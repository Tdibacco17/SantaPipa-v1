import Link from 'next/link'
import styles from './SideMenuComponent.module.scss'
import data from '@/models/es.json'
import { NavigationProps } from '@/types'
export default function SideMenuComponent({
    showMenu,
    handleShowMenu
}: {
    showMenu: boolean
    handleShowMenu: () => void,
}) {
    /* {
    showMenu && <div className={styles['container-overlay-menu-mobile']} />
} */
    return (
        <>
            {showMenu && <div className={styles['container-overlay-menu-mobile']} />}
            <section className={`${styles["container-section-side-menu"]} ${showMenu && styles["active-menu"]}`}>
                <div className={styles["container-titles-navigation"]}>
                    {Object.values(data.NavbarComponent.navigation).map((item: NavigationProps, index: number) => {
                        return <Link onClick={handleShowMenu}
                            key={index}
                            href={item.link}>
                            <span className={`${styles["text"]}`}>{item.title}</span>
                        </Link>
                    })}
                </div>
            </section>
        </>
    )
}