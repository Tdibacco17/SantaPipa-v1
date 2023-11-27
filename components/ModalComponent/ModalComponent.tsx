import styles from './ModalComponent.module.scss'
export default function ModalComponent() {
    return (
        <section className={styles["container-section-modal"]}>
            <p className={styles["title"]}>
                <span>Mensaje enviado</span>
                <span>correctamente</span>
            </p>
        </section>
    )
}