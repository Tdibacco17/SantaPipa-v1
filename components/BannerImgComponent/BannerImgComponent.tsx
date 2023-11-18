import Image from 'next/image'
import styles from './BannerImgComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
export default function BannerImgComponent() {
    return (
        <section className={styles["container-section-banner"]}>
            <div className={styles["container-outer-banner-img"]}>
                <Image
                    src={data.homePage.bannerImg.imgSrc}
                    alt={data.homePage.bannerImg.imgAlt}
                    fill
                    placeholder='blur'
                    blurDataURL={data.homePage.bannerImg.imgBlur}
                    style={{ objectPosition: data.homePage.bannerImg.objPosition }}
                    className={styles["container-inner-banner-img"]}
                />
            </div>
            <div className={styles["overlay-banner-img"]} />
            <div className={styles["container-banner-titles"]}>
                <div className={styles["wrapper"]}>
                    <p>{data.homePage.bannerImg.smallTitle}</p>
                    <h1 className={styles["slogan"]}>
                        {
                            data.homePage.bannerImg.title.map((item: string, index: number) => {
                                return <span key={index}>{item}</span>
                            })
                        }
                    </h1>
                    <Link href={data.homePage.bannerImg.button.link} className={styles["btn"]}>
                        {data.homePage.bannerImg.button.title}
                    </Link>
                </div>
            </div>
        </section>
    )
}