export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { from_name, from_email, phone, services } = await request.json();
    const currentYear = new Date().getFullYear();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    // Email template
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="background-color: #4361ee; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
          <h2 style="margin: 0;">New Lead for Bharathpainters</h2>
        </div>
        
        <div style="padding: 20px;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hello,</p>
          <p style="font-size: 16px; margin-bottom: 20px;">A new lead has been generated for Bharathpainters 🎨</p>
          
          <h3 style="margin-bottom: 15px;">Here are the details:</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 10px;">${from_name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email</td>
              <td style="padding: 10px;">${from_email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Phone</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Services Selected</td>
              <td style="padding: 10px;">${services}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px;">Best Regards,<br>Bharath Painters</p>
        </div>
        
        <div style="text-align: center; padding: 15px; background-color: #f5f5f5; color: #666; font-size: 12px; border-radius: 0 0 5px 5px;">
          © ${currentYear} Bharathpainters. All rights reserved.
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: '"Bharath Painters Website" <${process.env.RECIPIENT_EMAIL}>',
      to: process.env.RECIPIENT_EMAIL,
      replyTo: from_email,
      subject: "New Lead Generated for Bharathpainters Website",
      html: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
