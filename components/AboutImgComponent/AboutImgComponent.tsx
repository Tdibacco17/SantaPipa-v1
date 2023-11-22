import { ImgDataInterface } from '@/types'
import styles from './AboutImgComponent.module.scss'
import data from '@/models/es.json'
import AboutImgCardComponent from '../AboutImgCardComponent/AboutImgCardComponent'
import Link from 'next/link'
import TitleDecorationComponent from '../TitleDecorationComponent/TitleDecorationComponent'
export default function AboutImgComponent() {
    return (
        <section className={styles["container-section-about"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-info"]}>
                    <div>
                        <TitleDecorationComponent text={data.homePage.about.smallTitle} colorType='secondary' />
                        <p className={styles["title"]}>
                            {data.homePage.about.title.map((item: string, index: number) => {
                                return <span key={index}>{item}</span>
                            })}
                        </p>
                    </div>
                    <p className={styles["description"]}>{data.homePage.about.description}</p>
                    <Link href={data.homePage.about.button.link} className='btn-primary'>
                        {data.homePage.about.button.title}
                    </Link>
                </div>
                <div className={styles["container-images"]}>
                    {data.homePage.about.images.map((imageData: ImgDataInterface, index: number) => {
                        return <AboutImgCardComponent key={index} imageData={imageData} />
                    })}
                </div>
            </div>
        </section>
    )
}