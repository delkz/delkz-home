import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { to, subject, text } = await req.json();

        if (!to || !subject || !text) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log({
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        })

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service
            auth: {
                user: process.env.EMAIL_USER || '', // Your email address
                pass: process.env.EMAIL_PASS || '', // Your email password or app password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject,
            text,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}