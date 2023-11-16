import styles from './NavbarComponent.module.scss'
export default function NavbarComponent({
    showMenu,
    handleShowMenu,
    isAtTop,
    navType
}: {
    showMenu: boolean,
    handleShowMenu: (isClose?: boolean) => void,
    isAtTop: boolean,
    navType: "primary" | "secondary"
}) {

    return (
        <section className={styles["container-section-navbar"]}>
        </section>
    )
}