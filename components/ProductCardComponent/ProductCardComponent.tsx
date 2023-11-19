import styles from './ProductCardComponent.module.scss'
import Image from 'next/image'
import { ProductInterface } from '@/types/productsType'
import Link from 'next/link'
export default function ProductCardComponent({
    productData
}: {
    productData: ProductInterface
}) {
    return (
        <Link href={`/products/${productData.productSlug}`} className={`${styles["container-product-card"]}`}>
            <div className={styles["container-outer-product-img"]}>
                <Image
                    src={productData.image.imgSrc}
                    alt={productData.image.imgAlt}
                    fill
                    priority
                    placeholder='blur'
                    blurDataURL={productData.image.imgBlur}
                    style={{ objectPosition: productData.image.objPosition }}
                    className={styles["container-inner-product-img"]}
                />
                {productData.image.hoverImg &&
                    <Image
                        src={productData.image.hoverImg.imgSrc}
                        alt={productData.image.hoverImg.imgAlt}
                        fill
                        priority
                        placeholder='blur'
                        blurDataURL={productData.image.hoverImg.imgBlur}
                        style={{ objectPosition: productData.image.hoverImg.objPosition }}
                        className={`${styles["container-inner-product-img"]} ${styles["hover"]}`}
                    />}
                {productData.isNewIn && <div className={styles["position-new-in"]}> <p className={styles["new-in"]}>NEW IN</p> </div>}
            </div>
            <div className={styles["container-footer-card"]}>
                <p className={styles["title"]}>{productData.title}</p>
                <p className={styles["price"]}>{`${productData.offerPrice}`}</p>
            </div>
        </Link>
    )
}