import { FormRequestInterface } from "@/types";
import { templateContactHtml } from "@/utils/email/templateContactHtml";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as FormRequestInterface;
        const contentHtml = templateContactHtml(body.messageData)

        const transporter = nodemailer.createTransport({
            host: `${process.env.EMAIL_SERVICE}`,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: `${process.env.GMAIL_USER}`,
                pass: `${process.env.GMAIL_PASS}`
            }
        });

        const mailOptions = {
            from: `SANTA PIPA ${process.env.GMAIL_USER}`,
            to: [`${process.env.GMAIL_USER}`, body.messageData.email],
            subject: "Consulta de contacto",
            html: contentHtml,
        };

        const server = await new Promise((resolve, reject) => {
            transporter.verify(function (error: any, success: any) {
                if (success) {
                    resolve(success)
                }
                reject(error)
            })
        })
        if (!server) {
            return NextResponse.json({ message: "Error instantiating smtp transporter", status: 500 }, { status: 500 })
        }

        const success = await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions).then((info: any, err: any) => {
                if (info.response.includes('250')) {
                    resolve(true)
                }
                reject(err)
            })
        })
        if (!success) {
            return NextResponse.json({ message: "An error ocurred sending your email", status: 500 }, { status: 500 })
        }
        return NextResponse.json({ message: "Message sent", status: 200 }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Catch error", status: 500 }, { status: 500 });
    }
}