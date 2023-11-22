import { ImgDataInterface } from '@/types'
import styles from './RelevantComponent.module.scss'
import data from '@/models/es.json'
import RelevantCardComponent from '../RelevantCardComponent/RelevantCardComponent'
import Link from 'next/link'
import TitleDecorationComponent from '../TitleDecorationComponent/TitleDecorationComponent'
export default function RelevantComponent() {
    return (
        <section className={styles["container-section-relevant"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-twoImages"]}>
                    {data.homePage.relevant.images.map((imageData: ImgDataInterface, index: number) => {
                        return <div key={index} className={index === 1 ? styles["space"] : ""}>
                            <RelevantCardComponent imageData={imageData} />
                        </div>
                    })}
                </div>
                <div className={styles["container-info"]}>
                    <div>
                        <TitleDecorationComponent text={data.homePage.relevant.smallTitle} colorType='primary' />
                        <p className={styles["title"]}>{data.homePage.relevant.title}</p>
                    </div>
                    {data.homePage.relevant.description.map((item: string, index: number) => {
                        return <p className={styles["description"]} key={index}>{item}</p>
                    })}
                    <Link href={data.homePage.relevant.button.link} className='btn-secondary'>
                        {data.homePage.relevant.button.title}
                    </Link>
                </div>
            </div>
        </section>
    )
}