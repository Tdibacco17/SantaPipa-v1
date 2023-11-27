import FormContainer from '@/containers/FormContainer/FormContainer'
import styles from './page.module.scss'
import data from '@/models/es.json'
export default function ContactPage() {
    return (
        <div className={styles["container-section-contact"]}>
            <div className={styles["wrapper"]}>
                <div className={styles ["container-header-titles"]}>
                    <p className={styles["title"]}>{data.contactPage.title}</p>
                    <p className={styles["subtitle"]}>{data.contactPage.subtitle}</p>
                </div>
                <FormContainer />
            </div>
        </div>
    )
}
