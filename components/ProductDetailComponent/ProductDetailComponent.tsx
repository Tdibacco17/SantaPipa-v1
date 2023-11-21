import { useContext } from 'react'
import styles from './ProductDetailComponent.module.scss'
import { ProductDetailContext } from '@/context/ProductDetailContextProvider'
import { ProductsDataContextInterface } from '@/types/productsType'
import GaleryComponent from '../GaleryComponent/GaleryComponent'
export default function ProductDetailComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface

    return (
        <section className={styles["container-section-product-detail"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["galery-container"]}>
                    <GaleryComponent imagesData={productData?.details.imagesData}/>
                </div>
            </div>
        </section>
    )
}