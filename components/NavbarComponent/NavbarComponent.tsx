import Link from 'next/link'
import styles from './NavbarComponent.module.scss'
import data from '@/models/es.json'
import { NavigationProps } from '@/types'
import { IconComponent } from '../IconComponent/IconComponent'
import SideMenuComponent from '../SideMenuComponent/SideMenuComponent'
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
        <>
            <section className={`${styles["container-section-navbar"]} ${navType === "primary" && !isAtTop && styles["active"]} ${navType === "secondary" && styles["secondary"]} ${showMenu && styles["active"]}`}>
                <div className={`${styles["wrapper"]} ${navType === "secondary" && styles["secondary"]}`}>
                    <Link onClick={() => handleShowMenu(true)} href={data.NavbarComponent.link} className={styles["logo-text"]}>
                        {data.NavbarComponent.title}
                    </Link>
                    <nav className={styles["container-navigation-titles"]}>
                        {Object.values(data.NavbarComponent.navigation).map((navItem: NavigationProps, index: number) => {
                            return <Link key={index} href={navItem.link} className={`${styles["text"]} ${navType === "secondary" && styles["secondary-color"]}`}>
                                {navItem.title}
                            </Link>
                        })}
                    </nav>
                    <div className={styles["container-mobile-icon"]}>
                        {!showMenu ?
                            <IconComponent isClickable={() => handleShowMenu()} iconData={data.NavbarComponent.burgerIcon} size='medium'
                                customNavFill={navType === "primary" ? ((isAtTop && !showMenu) ? "primary" : "secondary") : "secondary"} />
                            : <IconComponent isClickable={() => handleShowMenu()} iconData={data.NavbarComponent.closeIcon} size='medium'
                                customNavFill={navType === "primary" ? ((isAtTop && !showMenu) ? "primary" : "secondary") : "secondary"} />}
                    </div>
                </div>
            </section>
            <SideMenuComponent showMenu={showMenu} handleShowMenu={() => handleShowMenu()} />
        </>
    )
}