import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  try {
    const transporter = nodemailer.createTransport({
      // Configure your email service here
      service: "gmail",
      auth: {
        user: "contact.careerpages@gmail.com",
        pass: "yrexvbxcdzavfzci",
      },
    });
    const mailOptions = {
      from: "contact.careerpages@gmail.com",
      to: "rohitlondhe727@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    };
    await transporter.sendMail(mailOptions);

    return new NextResponse("Message sent successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Message could not be sent", { status: 500 });
  }
}
