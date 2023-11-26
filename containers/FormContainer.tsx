'use client'
import FormComponent from "@/components/FormComponent/FormComponent";
import { MessageDataInterface } from "@/types";
import { useRef, useState } from "react";
export default function FormContainer() {
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const consultationRef = useRef<HTMLTextAreaElement>(null);

    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleValidation = () => {
        const regex = /^[0-9]+$/;
        if (nameRef.current?.value.trim() === "" || phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" || consultationRef.current?.value.trim() === "") {
            setErrorMessage("Por favor, complete todos los campos");
            return false;
        }

        if (phoneRef.current?.value && !(phoneRef.current?.value.length >= 8)) {
            setErrorMessage("El número de teléfono no cumple con la longitud mínima");
            return false;
        }

        if (phoneRef.current?.value && !(regex.test(phoneRef.current?.value.trim()))) {
            setErrorMessage("Numero de telefono tiene que ser solo caracteres numericos");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!handleValidation()) {
            setTimeout(() => {
                setErrorMessage("")
            }, 4000)
            return;
        }
        let messageData : MessageDataInterface = {
            name: nameRef.current?.value.trim() || "No se paso un nombre",
            phone: phoneRef.current?.value.trim() || "No se paso un teléfono",
            email: emailRef.current?.value.trim() || "No se paso un email",
            consultation: consultationRef.current?.value.trim() || "No se paso una consulta",
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Accept": "application/json, text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ messageData })
            })
            const parseResponse = await response.json()

            if (parseResponse.status === 200) {
                alert("Email enviado correctamente")
                setErrorMessage("")
                setTimeout(() => {
                    setLoadingText(false);
                    // router.push("/");
                }, 1500)
                return
            }
            return
        } catch (error) {
            console.log("Entro al catch: ", error);
        }
        return;
    }

    return <FormComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        consultationRef={consultationRef}
        loadingText={loadingText}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
    />
}