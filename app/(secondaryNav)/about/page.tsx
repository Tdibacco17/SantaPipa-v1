import { ImgDataInterface } from '@/types'
import styles from './page.module.scss'
import data from '@/models/es.json'
import Image from 'next/image'
export default function CampaignPage() {
    return (
        <div className={styles["container-section-about"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-header"]}>
                    <p className={styles["title"]}>{data.aboutPage.title}</p>
                    <small className={styles["subtitle"]}>{data.aboutPage.subtitle}</small>
                </div>
                <div className={styles["grid"]}>
                    {data.aboutPage.images.map((imageData: ImgDataInterface, index: number) => {
                        return <div key={index} className={styles["container-outer-img"]}>
                            <Image
                                className={styles["container-inner-img"]}
                                src={imageData.imgSrc}
                                alt={imageData.imgAlt}
                                fill
                                style={{ objectPosition: imageData.objPosition }}
                            />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
