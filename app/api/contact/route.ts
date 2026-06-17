import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'damavedanth@gmail.com',
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;padding:32px;background:#050508;color:#E8EAF0;">
          <p style="font-size:11px;letter-spacing:0.15em;color:rgba(232,234,240,0.35);margin:0 0 24px 0;">PORTFOLIO CONTACT</p>
          <h2 style="font-size:22px;font-weight:300;margin:0 0 8px 0;color:#E8EAF0;">${name}</h2>
          <p style="font-size:13px;color:rgba(232,234,240,0.5);margin:0 0 32px 0;">${email}</p>
          <p style="font-size:15px;line-height:1.75;color:rgba(232,234,240,0.8);white-space:pre-wrap;margin:0;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
