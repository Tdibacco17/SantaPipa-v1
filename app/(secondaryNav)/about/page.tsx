import styles from './page.module.scss'
import data from '@/models/es.json'
import PhotoSeassonContainer from '@/containers/PhotoSeassonContainer/PhotoSeassonContainer'
export default function CampaignPage() {
    return (
        <section className={styles["container-section-about"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-header"]}>
                    <p className={styles["title"]}>
                        {data.aboutPage.title.map((item: string, index: number) => {
                            return <span key={index}>{item}</span>
                        })}
                    </p>
                    <small className={styles["subtitle"]}>{data.aboutPage.subtitle}</small>
                </div>
                <PhotoSeassonContainer />
            </div>
        </section>
    )
}
