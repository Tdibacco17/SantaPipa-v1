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
            </div>
            <div className={styles["container-footer-card"]}>
                <p className={styles["title"]}>{productData.title}</p>
                <p className={styles["date"]}>{`${productData.date}`}</p>
                <p className={styles["price"]}>{`${productData.offerPrice}`}</p>
            </div>
        </Link>
    )
}