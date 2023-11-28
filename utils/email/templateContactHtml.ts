import { MessageDataInterface } from "@/types"

export const templateContactHtml = (data: MessageDataInterface) => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    
    <head>
    <meta charset="UTF-8">
    <title>NUEVO PEDIDO</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.5;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: left;
            padding-bottom: 20px;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 900;
        }

        .content {
            padding: 20px 0;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }

        .personal-info {
            margin-bottom: 15px;
            color: #555;
        }

        .personal-info li {
            margin-bottom: 5px;
            color: #555;
            font-weight: 500;
        }

        .order-summary {
            margin-bottom: 15px;
            color: #555;
        }

        .order-summary li {
            margin-bottom: 5px;
            color: #555;
        }
    
        .link {
            color: #007bff;
            text-decoration: none;
        }

        .footer {
            margin-bottom: 15px;
            text-align: left;
            padding-top: 20px;
        }

        .footer li {
            list-style-type: none;
            margin-bottom: 5px;
            color: #777;
        }
    </style>
</head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Santa Pipa</h1>
                <p>Gracias por contactarnos.</p>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h3>Datos personales:</h3>
                    <ul>
                        <li><strong>Nombre: </strong>${data.name}</li>
                        <li><strong>Email: </strong><a href="mailto:${data.email}" class="link">${data.email}</a></li>
                        <li><strong>Teléfono: </strong><a href="https://wa.me/${data.phone}" class="link">${data.phone}</a></li>
                    </ul>
                </div>
                <br></br>
            </div>
            <div class="footer">
                <li><strong>Consulta: </strong>${data.consultation}</li>
                <a class="link" href="https://desarrollo-santa-pipa.vercel.app/">www.santapipa.com.ar</a>
            </div>
        </div>
    </body>
    
    </html>
    `
}