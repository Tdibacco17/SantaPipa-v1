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
                color: #000000;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                margin-top: 50px;
                padding: 30px;
                border: 1px solid rgb(182, 182, 182);
                border-radius: 10px;
                background-color: rgba(182, 182, 182, 0.04);
                box-shadow: 7px 7px 10px rgba(0, 0, 0, .5)
            }
    
            .header {
                text-align: left;
                padding-bottom: 20px;
                border-bottom: 1px solid #ccc;
            }
    
            p {
                margin: 0;
                padding: 0;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
                padding: 0;
                color: #000000;
            }
    
            .content {
                border-bottom: 1px solid #ccc;
                min-height: 250px;
            }
    
            .personal-info {
                color: rgb(80, 80, 80);
                padding: 0px;
                padding-top: 20px;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                margin-left: 0px;
                color: rgb(80, 80, 80);
                list-style-type: none;
            }
    
            .personal-info li strong {
                font-weight: 700;
                color: #000000;
            }
    
            .personal-info ul {
                padding: 0px;
            }
    
            .personal-info h3 {
                margin: 0;
                padding: 0;
                color: #000000;
            }
    
            .order-summary {
                margin-bottom: 15px;
                color: rgb(80, 80, 80);
            }
    
            .order-summary li {
                margin-bottom: 5px;
                color: rgb(80, 80, 80);
            }
    
            .link {
                color: rgba(0, 98, 255, 0.9);
                text-decoration: none;
            }
    
            .footer {
                text-align: left;
                padding-top: 20px;
            }
    
            .footer li {
                list-style-type: none;
                margin-bottom: 5px;
                margin-left: 0px;
                color: rgb(80, 80, 80);
            }
    
            .footer ul {
                padding: 0px;
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
                    <h3>Detalles de la consulta:</h3>
                    <ul>
                        <li>
                            <strong>Nombre: </strong>${data.name}
                        </li>
                        <li>
                            <strong>Email: </strong><a href="mailto:${data.email}" class="link">${data.email}</a>
                        </li>
                        <li>
                            <strong>Teléfono: </strong><a href="https://wa.me/${data.phone}" class="link">${data.phone}</a>
                        </li>
                        <li>
                            <strong>Consulta: </strong>${data.consultation}
                        </li>
                    </ul>
                </div>
                <br></br>
            </div>
            <div class="footer">
                <li>Este mensaje fue enviado desde el sitio de
                    <a class="link" href="https://desarrollo-santa-pipa.vercel.app/">www.santapipa.com.ar</a>
                </li>
            </div>
        </div>
    </body>
    
    </html>
    `
}