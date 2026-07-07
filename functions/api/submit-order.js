export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { order, sheets_url } = body;

    if (!order) {
      return new Response(JSON.stringify({ success: false, error: 'Missing order data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get sheets URL from request body or fallback to environment variables
    const webhookUrl = sheets_url || context.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      // If not configured, we return success: true but notify that it was cached locally
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Google Sheets URL not configured. Order saved locally.' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Forward the request to Google Sheets Webhook
    // Google Apps Script doPost is a redirect, so we use no-cors or follow redirects
    const sheetsResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'order',
        data: order
      })
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Order submitted successfully to Google Sheets'
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// OPTIONS handler for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
