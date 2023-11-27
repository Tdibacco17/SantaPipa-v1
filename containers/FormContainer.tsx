'use client'
import FormComponent from "@/components/FormComponent/FormComponent";
import { FormValuesInterface, MessageDataInterface } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
const handleValidation = (formValues: FormValuesInterface) => {
    let errors = {
        name: "",
        phone: "",
        email: "",
        consultation: "",
    };
    const numRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const stringRegex = /^[a-zA-Z\s]+$/;
    if (!stringRegex.test(formValues.name.trim())) {
        errors.name = "El nombre debe contener solo caracteres de texto"
    }
    if (!formValues.email.trim() || !emailRegex.test(formValues.email)) {
        errors.email = "Formato de correo electrónico no válido"
    }
    if (formValues.phone && !(formValues.phone.length >= 8)) {
        errors.phone = "El número de teléfono no cumple con la longitud mínima"
    }
    if (formValues.phone && !(numRegex.test(formValues.phone.trim()))) {
        errors.phone = "Numero de teléfono tiene que ser solo caracteres numericos"
    }
    if (!formValues.name.trim()) {
        errors.name = "Por favor, complete este campo"
    }
    if (!formValues.email.trim()) {
        errors.email = "Por favor, complete este campo"
    }
    if (!formValues.phone.trim()) {
        errors.phone = "Por favor, complete este campo"
    }
    if (!formValues.consultation.trim()) {
        errors.consultation = "Por favor, complete este campo"
    }
    return errors;
};

export default function FormContainer() {
    const router = useRouter()
    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [btnSubmitClicked, setBtnSubmitClicked] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValuesInterface>({
        name: "",
        phone: "",
        email: "",
        consultation: "",
    });
    const [errors, setErrors] = useState<FormValuesInterface>({
        name: "",
        phone: "",
        email: "",
        consultation: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [e.target.name]: e.target.value,
        }));
        setErrors(handleValidation({
            ...formValues,
            [e.target.name]: e.target.value
        }));
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBtnSubmitClicked(true);

        const validationErrors = handleValidation(formValues);
        setErrors(validationErrors);

        const hasErrors = Object.values(validationErrors).some(error => error !== "");
        if (hasErrors) {
            return;
        }
        setLoadingText(true);

        let messageData: MessageDataInterface = {
            name: formValues.name.trim() || "No se paso un nombre",
            phone: formValues.phone.trim() || "No se paso un teléfono",
            email: formValues.email.trim() || "No se paso un email",
            consultation: formValues.consultation.trim() || "No se paso una consulta",
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
                setTimeout(() => {
                    setLoadingText(false);
                    setFormValues({
                        name: "",
                        phone: "",
                        email: "",
                        consultation: "",
                    })
                    setErrors({
                        name: "",
                        phone: "",
                        email: "",
                        consultation: "",
                    })
                    router.push("/");
                }, 1500)
                return
            }
            console.log(parseResponse.message)
            return
        } catch (error) {
            console.log("Entro al catch: ", error);
        }
        return;
    }

    return <FormComponent
        handleChange={handleChange}
        loadingText={loadingText}
        formValues={formValues}
        errors={errors}
        handleSubmit={handleSubmit}
        btnSubmitClicked={btnSubmitClicked}
    />
}