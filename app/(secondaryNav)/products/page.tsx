import { ProductInterface } from "@/types/productsType"
import styles from "./page.module.scss"
import productsData from "@/models/products"
import ProductCardComponent from "@/components/ProductCardComponent/ProductCardComponent"
import CarouselComponent from "@/components/CarouselComponent/CarouselComponent"

export default function ProductPage() {
    return (
        <section className={styles["container-section-product"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-products-desktop"]}>
                    {
                        Object.values(productsData).map((productData: ProductInterface) => {
                            return <ProductCardComponent key={productData.productSlug} productData={productData} />
                        })
                    }
                </div>
                <div className={styles["container-products-mobile"]}>
                    <CarouselComponent productData={Object.values(productsData).slice(0, 3)} />
                </div>
                <div className={styles["container-products-mobile"]}>
                    <CarouselComponent productData={Object.values(productsData).slice(3, 6)} />
                </div>
            </div>
        </section>
    )
}