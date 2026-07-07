export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { sub, sheets_url } = body;

    if (!sub) {
      return new Response(JSON.stringify({ success: false, error: 'Missing subscription data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const webhookUrl = sheets_url || context.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Google Sheets URL not configured. Subscription saved locally.' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Forward the request to Google Sheets Webhook
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'subscription',
        data: sub
      })
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Subscription submitted successfully to Google Sheets'
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
