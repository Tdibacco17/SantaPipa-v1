import { MessageDataInterface } from "@/types"

export const templateContactHtml = (data: MessageDataInterface) => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Consulta</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
    
            .container {
                max-width: 600px;
                word-break: break-all;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #333333;
            }
    
            p {
                color: #666666;
            }
    
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
    
            th,
            td {
                border: 1px solid #dddddd;
                padding: 10px;
                text-align: left;
            }
    
            th {
                background-color: #f2f2f2;
                font-size: 14px;
                min-width: 80px
            }
    
            @media only screen and (max-width: 600px) {
                .container {
                    width: 100%;
                    padding: 10px;
                }
    
                th,
                td {
                    padding: 8px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <h1>Santa Pipa</h1>
            <p>Gracias por contactarnos. Detalles de la consulta:</p>
    
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Teléfono</th>
                    <td><a href="https://wa.me/${data.phone}">${data.phone}</a></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                    <th>Consulta</th>
                    <td>${data.consultation}</td>
                </tr>
            </table>
            <br>
            <br>
            <p>Este mensaje fue enviado desde el sitio <a href="https://desarrollo-santa-pipa.vercel.app/">https://desarrollo-santa-pipa.vercel.app/</a></p>
        </div>
    </body>
    
    </html>
    `
}