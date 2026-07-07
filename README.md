# Jazwooden - Premium Handmade Wooden Products Website

A responsive, translation-ready (Arabic RTL / English LTR) Single Page Application (SPA) designed for **Jazwooden** (custom and illuminated wooden crafts). Built using static HTML/CSS/JS with a Serverless API backend ready to deploy on **Cloudflare Pages** and sync directly with a free **Google Sheets** database.

---

## 📁 Project Structure

```
jazwooden-web/
├── index.html                  # Core HTML single-page skeleton
├── style.css                   # Premium wood theme visual styling & RTL support
├── app.js                      # Core router, translation mapping & cart controls
├── database.js                 # LocalStorage API interface & Imgbb uploader
├── admin.js                    # Admin panel controllers & CRUD handlers
├── google-sheets-script.js     # Google Apps Script Webhook source code
├── README.md                   # Setup and deployment documentation
└── functions/                  # Cloudflare Pages serverless functions folder
    └── api/
        ├── submit-order.js      # /api/submit-order (Logs orders & sends to Google)
        └── submit-subscription.js # /api/submit-subscription (Logs newsletter signups)
```

---

## 🚀 How to Run the Project Locally

The website features an automatic **LocalStorage fallback**. This means the site works 100% locally out-of-the-box without setting up any backend! Any products you add, orders you make, or settings you change are saved in your browser cache.

### Option A: Direct Local Server (Recommended for quick testing)
1. Install VS Code extension **Live Server** (or run `npx serve .` / `python -m http.server`).
2. Open `index.html` in your browser.
3. Access the Admin Panel at the bottom footer link: `Jazwooden Admin` -> login with **`jazadmin2026`**.

### Option B: Cloudflare Pages Wrangler (Testing Functions locally)
To test the serverless function endpoints locally:
1. Open your terminal in the `jazwooden-web` folder.
2. Run wrangler dev server (uses local V8 node sandbox):
   ```bash
   npx wrangler pages dev . --compatibility-date=2024-01-01
   ```
3. Open `http://localhost:8788` in your browser.

---

## 📊 How to Set Up the Google Sheets Database

You can store all order and subscription entries in a Google Sheet for free, without paying for servers.

1. Create a new empty **Google Sheet**.
2. Go to the top menu: **Extensions (إضافات)** -> **Apps Script (برمجة تطبيقات Google)**.
3. Delete any default code and copy-paste the contents of [google-sheets-script.js](file:///C:/Users/moh/.gemini/antigravity/scratch/jazwooden-web/google-sheets-script.js).
4. Click the **Save** (floppy disk) icon.
5. Click the **Deploy** button (top right) -> select **New deployment**.
6. Set:
   - *Select type:* Click the gear icon and choose **Web app**.
   - *Execute as:* **Me** (your email).
   - *Who has access:* **Anyone** (this is vital, so the Cloudflare API can forward logs).
7. Click **Deploy**.
8. Authorize the script when prompted (you might need to click "Advanced" -> "Go to Untitled project (unsafe)").
9. Copy the **Web App URL** (it ends in `/exec`).
10. Go to your Jazwooden website Admin Dashboard -> **Theme & settings (مظهر الموقع)** and paste the URL in the Google Sheets Webhook field. Click **Save Settings**.

---

## 🖼️ How Image Uploads Work

To store drawings, window sketches, and customizable images that customers upload:
1. Go to [Imgbb.com](https://imgbb.com) and create a free account.
2. Go to [api.imgbb.com](https://api.imgbb.com/) and click **Create API Key**.
3. Copy the API Key.
4. Open the Jazwooden Admin Panel -> **Theme & settings (مظهر الموقع)**.
5. Paste the API Key in the **Imgbb API Key** field and save.
*If no API key is specified, the website falls back to saving images as temporary Base64-encoded strings locally so it stays fully testable.*

---

## 🛠️ Admin Dashboard Access

- **Admin Login Link:** Located at the bottom of the footer on every page.
- **Default passcode:** **`jazadmin2026`**
- **Dashboard Capabilities:**
  - **Products:** Add, edit, delete catalog items, set customizable status (shows/hides the custom phrase input box), set image requirements, mark as Best Seller, and set delivery times.
  - **Categories:** Add and delete categories.
  - **Orders:** View custom design requests and store orders, track status (New, Contacting, In Progress, Completed, Cancelled), and manually sync orders to Google Sheets.
  - **Subscriptions:** View/manage newsletter list.
  - **Content:** Update YouTube video URLs for the homepage gallery, edit "About Us", and manage customer reviews.
  - **Visual Identity/Theme:** Change the global colors (Primary wood brown, Secondary gold accent, Background ivory, Text espresso) live using color pickers.

---

## ☁️ How to Deploy to Cloudflare Pages

Cloudflare Pages offers fast, free static hosting with integrated serverless functions:

### Method A: Wrangler CLI Deploy (Easiest for testing)
1. Log in to your Cloudflare account from terminal:
   ```bash
   npx wrangler login
   ```
2. Deploy the directory:
   ```bash
   npx wrangler pages deploy . --project-name=jazwooden
   ```
3. Cloudflare will automatically deploy your frontend and build the serverless functions inside `/functions`.

### Method B: Git Integration (Recommended for production updates)
1. Push this folder to a GitHub repository.
2. Go to your **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your repository.
4. Set build settings:
   - *Framework preset:* None.
   - *Build command:* Leave blank.
   - *Build output directory:* `/` (root directory).
5. Click **Save and Deploy**. Any future pushes to your GitHub repo will automatically update the website live!
