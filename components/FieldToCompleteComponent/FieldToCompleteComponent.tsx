import { FieldProps } from '@/types'
import styles from './FieldToCompleteComponent.module.scss'
import data from '@/models/es.json'
export default function FieldToCompleteComponent({
    isTextAreaField,
    fieldProps,
    valueRef,
    errors,
    handleChange,
    btnSubmitClicked
}: {
    isTextAreaField: boolean,
    fieldProps: FieldProps,
    valueRef?: string,
    errors: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    btnSubmitClicked: boolean
}) {

    if (isTextAreaField) {
        return (
            <label className={styles['wrapper-label']}>
                <p className={styles['text']}>{fieldProps.label}<small className={styles["required"]}> *</small></p>
                <textarea
                    // required
                    name={fieldProps.input.name}
                    value={valueRef}
                    className={styles['area']}
                    onChange={handleChange}
                    placeholder={data.contactPage.formData.placeholder} />
                {btnSubmitClicked && errors.length > 0 &&
                    <small className={styles["error"]}>{errors}</small>}
            </label>
        )
    }
    return (
        <label className={`${styles['wrapper-label']}`}>
            <p className={styles['text']}>{fieldProps.label}<small className={styles["required"]}> *</small></p>
            <input
                className={`${styles['field']}`}
                // required
                type={fieldProps.input.type}
                name={fieldProps.input.name}
                value={valueRef}
                onChange={handleChange}
                placeholder={data.contactPage.formData.placeholder}
            />
            {btnSubmitClicked && errors.length > 0 &&
                <small className={styles["error"]}>{errors}</small>}
        </label>
    )
}