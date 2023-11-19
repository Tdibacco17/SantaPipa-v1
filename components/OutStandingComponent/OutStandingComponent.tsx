import CarouselComponent from '../CarouselComponent/CarouselComponent'
import styles from './OutStandingComponent.module.scss'
import productsData from '@/models/products'
import { ProductInterface } from '@/types/productsType'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import Link from 'next/link'
import data from '@/models/es.json'
export default function OutStandingComponent() {
    return (
        <section className={styles["container-section-OutStanding"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-info"]}>
                    <p className={styles["small"]}>
                        <span className={styles["line-decoration"]} />
                        {data.homePage.outStanding.smallTitle}
                    </p>
                    <p className={styles["title"]}>
                        {data.homePage.outStanding.title.map((item: string, index: number) => {
                            return <span key={index}>{item}</span>
                        })}
                    </p>
                </div>
                <div className={styles["container-carousel-desktop"]}>
                    {Object.values(productsData).slice(3, 6).map((productData: ProductInterface, index: number) => {
                        return <ProductCardComponent key={index} productData={productData} />
                    })}
                </div>
                <div className={styles["container-carousel-mobile"]}>
                    <CarouselComponent productData={Object.values(productsData).slice(3, 6)} />
                </div>
                <Link href={data.homePage.outStanding.button.link} className='btn-secondary'>
                    {data.homePage.outStanding.button.title}
                </Link>
            </div>
        </section>
    )
}