import { LinkIconProps } from '@/types'
import styles from './FooterComponent.module.scss'
import data from '@/models/es.json'
import { LinkIconComponent } from '../IconComponent/IconComponent'
export default function FooterComponent() {
    return (
        <section className={styles["container-section-footer"]}>
            <div className={styles["wrapper"]}>
                <p className={styles["text"]}>{data.FooterComponent.copyright}</p>
                <div className={styles["container-network-data"]}>
                    {
                        Object.values(data.FooterComponent.networks).map((iconData: LinkIconProps, index: number) => {
                            return <LinkIconComponent key={index} iconData={iconData} size='small' />
                        })
                    }
                </div>
            </div>
        </section>
    )
}