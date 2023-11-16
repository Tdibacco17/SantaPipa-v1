import Link from 'next/link';
import styles from './IconComponent.module.scss'
import { IconInterface, IconProps, LinkIconInterface, LinkIconProps } from "@/types";

const IconGenerate = ({ fill, viewBox, path }: { fill: string, viewBox: string, path: string[] }) => {
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
                        className={`${styles['path']} ${styles[`${fill}`]}`}
                    />
                })
            }
        </svg>
    )
}

export const IconComponent = ({ iconData, size, isClickable }: IconInterface) => {
    return (
        <div onClick={isClickable} className={`${styles["container-section-icon"]} ${styles[size]}`}>
            {IconGenerate({ fill: iconData.fill, viewBox: iconData.viewBox, path: iconData.path })}
        </div>
    )
}

export const LinkIconComponent = ({ iconData, size }: LinkIconInterface) => {
    return (
        <Link
            className={`${styles["container-section-icon"]} ${styles[size]} 
            ${iconData.onlyDesktop && styles["hidden-mobile"]} ${iconData.onlyMobile && styles["hidden-desktop"]}`}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`Ir a ${iconData.name}`}
            href={iconData.link}
        >
            {IconGenerate({ fill: iconData.fill, viewBox: iconData.viewBox, path: iconData.path })}
        </Link>
    )
}