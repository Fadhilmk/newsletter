import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestBody = {
    author: string;
    buttons: string[];
    paragraph: string;
    socialLinks: string[];
    imageURL: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body: RequestBody = await req.json();
        const { author, buttons, paragraph, socialLinks, imageURL } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "",
                pass: ""
            }
        });

        const mailOptions = {
            from: "",
            to: '',
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
