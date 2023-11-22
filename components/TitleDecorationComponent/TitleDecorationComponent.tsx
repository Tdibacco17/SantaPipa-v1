import styles from './TitleDecorationComponent.module.scss'
export default function TitleDecorationComponent({
    colorType,
    text
}: {
    colorType: "primary" | "secondary",
    text: string
}) {
    return (
        <p className={`${styles["small"]} ${colorType === "secondary" && styles["secondary"]}`}>
            <span className={styles["line-decoration"]} />
            {text}
        </p>
    )
}