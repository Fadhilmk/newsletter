import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { author, buttons, paragraph, socialLinks, imageURL } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "newletter.platform@gmail.com",
                // add to envvvvvvv
                pass: "romr ttcp lqba klky"
            }
        });

        // Construct the email
        const mailOptions = {
            from: "newletter.platform@gmail.com",
            to: 'newletter.platform@gmail.com',
            subject: 'Test',
            html: `
                <p>${paragraph}</p>
                <p>Author: ${author}</p>
                <p>Social Links: ${socialLinks.join(', ')}</p>
                <img src="${imageURL}" alt="Image" />
                <div>
                    ${buttons.map(button => `<button>${button}</button>`).join(' ')}
                </div>
            `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Send success response
        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        // Log the error
        console.error('Error sending email:', error);

        // Send error response without exposing the actual error message
        return NextResponse.json({ success: false, message: 'Error sending email' });
    }
}
