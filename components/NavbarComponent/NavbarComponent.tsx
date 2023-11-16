import Link from 'next/link'
import styles from './NavbarComponent.module.scss'
import data from '@/models/es.json'
import { NavigationProps } from '@/types'
import { IconComponent } from '../IconComponent/IconComponent'
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
            <Link onClick={() => handleShowMenu(true)} href={data.NavbarComponent.link} className={styles["text"]}>{data.NavbarComponent.title}</Link>
            <nav className={styles["container-navigation-titles"]}>
                {
                    Object.values(data.NavbarComponent.navigation).map((navItem: NavigationProps) => {
                        return <Link href={navItem.link} className={styles["text"]}>{navItem.title}</Link>
                    })
                }
            </nav>
            <div className={styles["container-mobile-icon"]}>
                {!showMenu ?
                    <IconComponent isClickable={() => handleShowMenu()} iconData={data.NavbarComponent.burgerIcon} size='small' />
                    : <IconComponent isClickable={() => handleShowMenu()} iconData={data.NavbarComponent.closeIcon} size='small' />
                }
            </div>
        </section>
    )
}