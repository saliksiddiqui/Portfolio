// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

exports.handler = async function (event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Initialize SendGrid with API key from env
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY) {
      console.error('Missing SENDGRID_API_KEY');
      return { statusCode: 500, body: JSON.stringify({ error: 'Email service not configured' }) };
    }
    sgMail.setApiKey(SENDGRID_API_KEY);

    // Parse request body
    const data = JSON.parse(event.body || '{}');
    const { name, email, message } = data;

    // Simple server-side validation
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    // Construct message
    const toEmail = process.env.TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || 'no-reply@example.com';
    const subject = `Portfolio contact from ${name}`;

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<div>
               <p><strong>Name:</strong> ${escapeHtml(name)}</p>
               <p><strong>Email:</strong> ${escapeHtml(email)}</p>
               <p><strong>Message:</strong></p>
               <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
             </div>`
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Error in send-email function:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};

// Simple HTML escaping
function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
