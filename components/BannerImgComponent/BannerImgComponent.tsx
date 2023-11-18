import Image from 'next/image'
import styles from './BannerImgComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
export default function BannerImgComponent() {
    return (
        <section className={styles["container-section-banner"]}>
            <div className={styles["container-outer-banner-img"]}>
                <Image
                    src={data.homePage.bannerImg.image.imgSrc}
                    alt={data.homePage.bannerImg.image.imgAlt}
                    fill
                    priority
                    placeholder='blur'
                    blurDataURL={data.homePage.bannerImg.image.imgBlur}
                    style={{ objectPosition: data.homePage.bannerImg.image.objPosition }}
                    className={styles["container-inner-banner-img"]}
                />
            </div>
            <div className='overlay-img' />
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
                    <Link href={data.homePage.bannerImg.button.link} className='btn-primary'>
                        {data.homePage.bannerImg.button.title}
                    </Link>
                </div>
            </div>
        </section>
    )
}