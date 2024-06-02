import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req) {
    try {
        const body = await req.json();
        const { author, buttons, paragraph, socialLinks, imageURL } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "8590143232a@gmail.com",
                pass: "8590143232"
            }
        });

        const mailOptions = {
            from: "8590143232a@gmail.com",
            to: 'hadhirasal22@gmail.com',
            subject: 'Email Subject',
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

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error sending email', error: error.message });
    }
}
