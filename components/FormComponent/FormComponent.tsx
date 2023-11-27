import { FormValuesInterface } from '@/types'
import FieldToCompleteComponent from '../FieldToCompleteComponent/FieldToCompleteComponent'
import styles from './FormComponent.module.scss'
import data from '@/models/es.json'
export default function FormComponent({
    formValues,
    loadingText,
    errors,
    handleSubmit,
    handleChange,
    btnSubmitClicked
}: {
    formValues: FormValuesInterface,
    loadingText: boolean,
    errors: FormValuesInterface,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    btnSubmitClicked: boolean
}) {
    return (
        <form onSubmit={handleSubmit} className={styles["container-section-form"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["wrapper-field"]}>
                    <FieldToCompleteComponent btnSubmitClicked={btnSubmitClicked} errors={errors.name} isTextAreaField={false} fieldProps={data.contactPage.formData.name} valueRef={formValues.name} handleChange={handleChange} />
                    <FieldToCompleteComponent btnSubmitClicked={btnSubmitClicked} errors={errors.email} isTextAreaField={false} fieldProps={data.contactPage.formData.email} valueRef={formValues.email} handleChange={handleChange} />
                </div>
                <div className={styles["wrapper-field"]}>
                    <FieldToCompleteComponent btnSubmitClicked={btnSubmitClicked} errors={errors.phone} isTextAreaField={false} fieldProps={data.contactPage.formData.phone} valueRef={formValues.phone} handleChange={handleChange} />
                </div>
                <FieldToCompleteComponent btnSubmitClicked={btnSubmitClicked} errors={errors.consultation} isTextAreaField={true} fieldProps={data.contactPage.formData.consultation} valueRef={formValues.consultation} handleChange={handleChange} />
                <button className={`btn-secondary`}
                    type='submit'
                    disabled={loadingText}
                    aria-label={data.contactPage.formData.submit.ariaLabel}>
                    {loadingText ?
                        data.contactPage.formData.submit.loading : data.contactPage.formData.submit.text}
                </button>
            </div>
        </form>
    )
}