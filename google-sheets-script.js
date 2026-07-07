/**
 * Jazwooden Google Sheets Database Webhook Script
 * (With Google Drive integration for image uploads)
 * 
 * Instructions:
 * 1. Create a new Google Sheet.
 * 2. Go to Extensions -> Apps Script.
 * 3. Delete any default code and paste this script.
 * 4. Click the Save icon (floppy disk).
 * 5. Click "Deploy" -> "New deployment".
 * 6. Under "Select type", select "Web app".
 * 7. Set:
 *    - Description: "Jazwooden Orders API Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (crucial, so Cloudflare or the website can send data)
 * 8. Click "Deploy" and authorize the script (allow access).
 * 9. Copy the Web app URL (it ends in /exec) and paste it into the Jazwooden Admin theme settings.
 */

function doPost(e) {
  try {
    // Parse incoming JSON contents
    var jsonString = e.postData.contents;
    var payload = JSON.parse(jsonString);
    
    var type = payload.type; // 'order' or 'subscription'
    var data = payload.data;
    
    if (type === 'order') {
      return handleOrder(data);
    } else if (type === 'subscription') {
      return handleSubscription(data);
    } else {
      return sendResponse({ success: false, error: 'Unknown payload type: ' + type });
    }
  } catch (err) {
    return sendResponse({ success: false, error: err.toString() });
  }
}

// Handle Order insertions
function handleOrder(order) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Orders");
  
  // Create sheet with headers if it does not exist
  if (!sheet) {
    sheet = ss.insertSheet("Orders");
    var headers = [
      "Date & Time (التاريخ والوقت)", 
      "Order ID (رقم الطلب)", 
      "Order Type (نوع الطلب)", 
      "Customer Name (اسم العميل)", 
      "Country Code (رمز الدولة)", 
      "Phone Number (رقم الهاتف)", 
      "Product ID (معرف المنتج)", 
      "Product Name (اسم المنتج)", 
      "Category (الفئة)", 
      "Final Price (السعر النهائي)", 
      "Original Price (السعر الأصلي)", 
      "Custom Phrase (العبارة المخصصة)", 
      "Uploaded Image Link (رابط الملف المرفوع)", 
      "Idea Description / Notes (الملاحظات أو الفكرة)", 
      "Order Status (حالة الطلب)"
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#F4EBE1");
  }
  
  // Format date correctly
  var formattedDate = Utilities.formatDate(new Date(order.date || new Date()), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  
  // Check and process image links
  var finalImageLink = order.image_link || '';
  if (finalImageLink) {
    // If the image link contains base64 formatted data, upload it to Google Drive first
    if (finalImageLink.indexOf("data:") > -1 && finalImageLink.indexOf("base64") > -1) {
      finalImageLink = processBase64Images(finalImageLink, order.name || "Customer", order.id || "Order");
    }
  }

  // Map fields into a row array
  var rowData = [
    formattedDate,
    order.id || '',
    order.order_type || '',
    order.name || '',
    order.country_code || '',
    "'" + (order.phone || ''), // Prefix with quote so Sheets doesn't truncate leading zeroes
    order.product_id || '',
    order.product_name || '',
    order.category || '',
    order.price || 0,
    order.original_price || 0,
    order.custom_phrase || '',
    finalImageLink,
    order.notes || '',
    order.status || 'New'
  ];
  
  sheet.appendRow(rowData);
  return sendResponse({ success: true, message: 'Order logged successfully' });
}

// Process Base64 image links (supports single or multiple comma-separated files)
function processBase64Images(imageLinkData, customerName, orderId) {
  // If multiple base64 strings exist (cart checkout), split and upload each
  var parts = imageLinkData.split(" , ");
  var urls = [];
  
  for (var i = 0; i < parts.length; i++) {
    var rawStr = parts[i].trim();
    if (rawStr.indexOf("data:") === 0) {
      var driveUrl = saveSingleBase64ToDrive(rawStr, customerName, orderId + "_" + (i + 1));
      urls.push(driveUrl);
    } else {
      urls.push(rawStr); // If it's already a standard URL, keep it
    }
  }
  
  return urls.join(" , ");
}

// Upload a single Base64 file into a Google Drive Folder named "Jazwooden Uploads"
function saveSingleBase64ToDrive(base64String, customerName, suffix) {
  try {
    var folderName = "Jazwooden Uploads";
    var folders = DriveApp.getFoldersByName(folderName);
    var folder;
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }
    
    // Extract base64 parameters
    var splitParts = base64String.split(",");
    var metadata = splitParts[0];
    var base64Data = splitParts[1];
    
    var mimeType = metadata.substring(metadata.indexOf(":") + 1, metadata.indexOf(";"));
    
    // Detect extension based on MIME type
    var extension = "png";
    if (mimeType.indexOf("pdf") > -1) extension = "pdf";
    else if (mimeType.indexOf("svg") > -1) extension = "svg";
    else if (mimeType.indexOf("jpeg") > -1 || mimeType.indexOf("jpg") > -1) extension = "jpg";
    else if (mimeType.indexOf("webp") > -1) extension = "webp";
    else if (mimeType.indexOf("eps") > -1) extension = "eps";
    else if (mimeType.indexOf("dxf") > -1) extension = "dxf";
    else if (mimeType.indexOf("ai") > -1) extension = "ai";
    
    // Clean name for filenames safety
    var safeCustomerName = customerName.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, "_");
    var filename = safeCustomerName + "_" + suffix + "." + extension;
    
    // Decode and save to drive
    var decodedBytes = Utilities.base64Decode(base64Data);
    var fileBlob = Utilities.newBlob(decodedBytes, mimeType, filename);
    
    var file = folder.createFile(fileBlob);
    
    // Set file sharing access so the owner can view it via link in sheet
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    return file.getUrl();
  } catch (err) {
    return "Error saving to Drive: " + err.toString();
  }
}

// Handle Subscription newsletter insertions
function handleSubscription(sub) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Subscriptions");
  
  // Create sheet with headers if it does not exist
  if (!sheet) {
    sheet = ss.insertSheet("Subscriptions");
    var headers = [
      "Date & Time (التاريخ والوقت)", 
      "Contact Info (رقم الهاتف أو البريد)", 
      "Source Page (الصفحة المصدر)", 
      "Selected Language (اللغة المختارة)", 
      "Contact Type (النوع)"
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#F4EBE1");
  }
  
  var formattedDate = Utilities.formatDate(new Date(sub.date || new Date()), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  
  var rowData = [
    formattedDate,
    "'" + (sub.contact || ''),
    sub.source || '',
    sub.lang || '',
    sub.type || ''
  ];
  
  sheet.appendRow(rowData);
  return sendResponse({ success: true, message: 'Subscription logged successfully' });
}

// Send standard JSON response
function sendResponse(responseObj) {
  return ContentService.createTextOutput(JSON.stringify(responseObj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle OPTIONS requests (for CORS preflight)
function doOptions(e) {
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
