import { IconProps, LinkIconProps } from '@/types'
import styles from './FooterComponent.module.scss'
import data from '@/models/es.json'
import { IconComponent, LinkIconComponent } from '../IconComponent/IconComponent'
export default function FooterComponent() {
    return (
        <section className={styles["container-section-footer"]}>
            <p>{data.FooterComponent.copyright}</p>
            <div className={styles["container-network-data"]}>
                {
                    Object.values(data.FooterComponent.networks).map((iconData: IconProps | LinkIconProps, index: number) => {
                        if (iconData.isLink) {
                            return <LinkIconComponent key={index} iconData={iconData as LinkIconProps} />
                        } else {
                            return <IconComponent key={index} iconData={iconData as IconProps} />
                        }
                    })
                }
            </div>
        </section>
    )
}