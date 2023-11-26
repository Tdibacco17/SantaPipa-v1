import { FieldProps } from '@/types'
import styles from './FieldToCompleteComponent.module.scss'
import data from '@/models/es.json'
export default function FieldToCompleteComponent({
    isTextAreaField,
    fieldProps,
    valueRef,
    areaRef
}: {
    isTextAreaField: boolean,
    fieldProps: FieldProps,
    valueRef?: React.RefObject<HTMLInputElement>,
    areaRef?: React.RefObject<HTMLTextAreaElement>,
}) {

    if (isTextAreaField) {
        return (
            <label className={styles['wrapper-label']}>
                <p className={styles['text']}>{fieldProps.label}<small className={styles["required"]}> *</small></p>
                <textarea
                    required
                    ref={areaRef}
                    className={styles['area']}
                    placeholder={data.contactPage.formData.placeholder} />
            </label>
        )
    }
    return (
        <label className={`${styles['wrapper-label']}`}>
            <p className={styles['text']}>{fieldProps.label}<small className={styles["required"]}> *</small></p>
            <input
                className={`${styles['field']}`}
                required
                type={fieldProps.input?.type}
                name={fieldProps.input?.name}
                ref={valueRef}
                placeholder={data.contactPage.formData.placeholder}
            />
        </label>
    )
}