import styles from './ProductDetailComponent.module.scss'
import { ProductInterface } from '@/types/productsType'
import GaleryComponent from '../GaleryComponent/GaleryComponent'
import ProductDetailInfoComponent from '../ProductDetailInfoComponent/ProductDetailInfoComponent'
export default function ProductDetailComponent({
    productData
}: {
    productData: ProductInterface
}) {

    return (
        <section className={styles["container-section-product-detail"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["galery-container"]}>
                    <GaleryComponent imagesData={productData.details.imagesData} />
                </div>
                <ProductDetailInfoComponent productData={productData} />
            </div>
        </section>
    )
}