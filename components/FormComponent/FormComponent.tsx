import FieldToCompleteComponent from '../FieldToCompleteComponent/FieldToCompleteComponent'
import styles from './FormComponent.module.scss'
import data from '@/models/es.json'
export default function FormComponent({
    nameRef,
    phoneRef,
    emailRef,
    consultationRef,
    loadingText,
    errorMessage,
    handleSubmit,
}: {
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    consultationRef: React.RefObject<HTMLTextAreaElement>,
    loadingText: boolean,
    errorMessage: string,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}) {
    return (
        <form onSubmit={handleSubmit} className={styles["container-section-form"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["wrapper-field"]}>
                    <FieldToCompleteComponent isTextAreaField={false} fieldProps={data.contactPage.formData.name} valueRef={nameRef} />
                    <FieldToCompleteComponent isTextAreaField={false} fieldProps={data.contactPage.formData.email} valueRef={emailRef} />
                </div>
                <FieldToCompleteComponent isTextAreaField={false} fieldProps={data.contactPage.formData.phone} valueRef={phoneRef} />
                <FieldToCompleteComponent isTextAreaField={true} fieldProps={data.contactPage.formData.consultation} areaRef={consultationRef} />
                <button className={styles['btn-send']}
                    type='submit'
                    disabled={loadingText}
                    aria-label={data.contactPage.formData.submit.ariaLabel}>
                    {loadingText ? data.contactPage.formData.submit.loading : data.contactPage.formData.submit.text}
                </button>
            </div>
        </form>
    )
}