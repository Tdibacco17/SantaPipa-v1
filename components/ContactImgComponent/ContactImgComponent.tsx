import Image from 'next/image'
import styles from './ContactImgComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
export default function ContactImgComponent() {
    return (
        <section className={styles["container-section-contact"]}>
            <div className={styles["container-outer-contact-img"]}>
                <Image
                    src={data.homePage.contact.image.imgSrc}
                    alt={data.homePage.contact.image.imgAlt}
                    fill
                    priority
                    placeholder='blur'
                    blurDataURL={data.homePage.contact.image.imgBlur}
                    style={{ objectPosition: data.homePage.contact.image.objPosition }}
                    className={styles["container-inner-contact-img"]}
                />
            </div>
            <div className='overlay-img' />
            <div className={styles["container-contact-titles"]}>
                <div className={styles["wrapper"]}>
                    <p className={styles["title"]}>{data.homePage.contact.title}</p>
                    <p className={styles["description"]}>{data.homePage.contact.description}</p>
                    <Link href={data.homePage.contact.button.link} className='btn-primary'>
                        {data.homePage.contact.button.title}
                    </Link>
                </div>
            </div>
        </section>
    )
}