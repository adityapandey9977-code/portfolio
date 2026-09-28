import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'adityapandey9977@gmail.com',
        pass: process.env.EMAIL_PASS || 'upjtwnpztygjtkxu',
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER || 'adityapandey9977@gmail.com'}>`,
      to: 'adityapandey9977@gmail.com',
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio Inquiry] ${subject || 'New Message from Portfolio'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="background-color: #0b1329; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Message from Portfolio</h2>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #64748b;">Sender:</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px;"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Mobile / Phone:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: bold;">${phone}</a></td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject:</td>
                <td style="padding: 8px 0; color: #0f172a;">${subject || 'General Inquiry'}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin-top: 10px;">
              <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; background-color: #f1f5f9; border-radius: 0 0 8px 8px; font-size: 12px; color: #64748b; text-align: center;">
            Received via Aditya Pandey's Portfolio Website Contact Form
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
  }
}
