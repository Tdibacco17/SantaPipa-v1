import Link from 'next/link';
import styles from './IconComponent.module.scss'
import { IconInterface, LinkIconInterface } from "@/types";

const IconGenerate = ({ fill, viewBox, path, isNavTransition }: { fill: string, viewBox: string, path: string[], isNavTransition?: boolean }) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {
                path.map((d: string, index: number) => {
                    return <path
                        key={index}
                        d={d}
                        fill={""}
                        className={`${styles['path']} ${styles[`${fill}`]} ${isNavTransition && styles["isNavTransition"]}`}
                    />
                })
            }
        </svg>
    )
}

export const IconComponent = ({ iconData, size, isClickable, customNavFill }: IconInterface) => {
    return (
        <div onClick={isClickable} className={`${styles["container-section-icon"]} ${styles[size]} ${iconData.hover && styles["hover"]}`}>
            {IconGenerate({
                fill: customNavFill ? customNavFill : iconData.fill,
                viewBox: iconData.viewBox,
                path: iconData.path,
                isNavTransition: customNavFill ? true : false
            })}
        </div>
    )
}

export const LinkIconComponent = ({ iconData, size }: LinkIconInterface) => {
    return (
        <Link
            className={`${styles["container-section-icon"]} ${styles[size]} ${iconData.hover && styles["hover"]} ${iconData.onlyDesktop && styles["hidden-mobile"]} ${iconData.onlyMobile && styles["hidden-desktop"]}`}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`Ir a ${iconData.name}`}
            href={iconData.link}
        >
            {IconGenerate({
                fill: iconData.fill,
                viewBox: iconData.viewBox,
                path: iconData.path,
            })}
        </Link>
    )
}