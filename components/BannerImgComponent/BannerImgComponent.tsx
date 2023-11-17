import Image from 'next/image'
import styles from './BannerImgComponent.module.scss'
import data from '@/models/es.json'
export default function BannerImgComponent() {
    return (
        <section className={styles["container-section-banner-img"]}>
            <Image
                src={data.homePage.bannerImg.imgSrc}
                alt={data.homePage.bannerImg.imgAlt}
                fill
                placeholder='blur'
                blurDataURL={data.homePage.bannerImg.imgBlur}
                style={{ objectPosition: data.homePage.bannerImg.objPosition }}
                className={styles["container-inner-banner-img"]}
            />
            <div className={styles["overlay-banner-img"]}/>
        </section>
    )
}