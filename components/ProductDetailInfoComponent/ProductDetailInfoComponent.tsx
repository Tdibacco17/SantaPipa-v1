import { ProductInterface } from '@/types/productsType'
import styles from './ProductDetailInfoComponent.module.scss'
import data from '@/models/es.json'
import TitleDecorationComponent from '../TitleDecorationComponent/TitleDecorationComponent'
import { IconComponent } from '../IconComponent/IconComponent'
import Link from 'next/link'
export default function ProductDetailInfoComponent({
    productData
}: {
    productData: ProductInterface
}) {
    return (
        <div className={styles["container-section-info-product-detail"]}>
            <div>
                {productData.isNewIn &&
                    <TitleDecorationComponent text={productData.details.smallTitle} colorType='primary' />}
                <p className={styles["product-title"]}>{productData.title}</p>
                <p className={styles["price"]}>{productData.offerPrice}</p>
            </div>
            <div className={styles["container-wrapper-payment"]}>
                <div className={styles["container-payment"]}>
                    <p className={styles["title"]}>{data.productDetail.payment.title}</p>
                    <p className={styles["method"]}>
                        {data.productDetail.payment.method}
                    </p>
                </div>
            </div>
            <div className={styles["container-division"]}>
                <p className={styles["division-title"]}>{data.productDetail.measures.title}</p>
                <p>{`- ${data.productDetail.measures.description}`}</p>
            </div>
            <div className={styles["container-division"]}>
                <p className={styles["division-title"]}>{data.productDetail.description.title}</p>
                <p className={styles["info"]}>
                    {productData.details.description.map((item: string, index: number) => {
                        return <span key={index}>{`- ${item}`}</span>
                    })}
                </p>

            </div>
            {/* <div className={styles["container-division"]}>
                <p className={`${styles["division-title"]}`}>{data.productDetail.note.title}</p>
                <p className={styles["info"]}>
                    {data.productDetail.note.description.map((item: string, index: number) => {
                        return <span key={index}>{item}</span>
                    })}
                </p>
            </div> */}
            <div className={styles["container-division"]}>
                <p className={styles["division-title"]}>{data.productDetail.shipments.title}</p>
                <p className={styles["info"]}>
                    {data.productDetail.shipments.description.map((item: string, index: number) => {
                        return <span key={index}>{`- ${item}`}</span>
                    })}
                </p>
            </div>
            <div className={styles["container-info-footer"]}>
                <p>{data.productDetail.contact.title}</p>
                <div className={styles["container-network-data"]}>
                    <Link
                        className={`${styles["content"]} ${styles["desktop"]}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`Ir a ${data.productDetail.contact.networks.whatsappDesktop.name}`}
                        href={data.productDetail.contact.networks.whatsappDesktop.link}
                    >
                        <IconComponent iconData={data.productDetail.contact.networks.whatsappDesktop.icon} size='small' />
                        <span className={styles["text"]}>{data.productDetail.contact.networks.whatsappDesktop.title}</span>
                    </Link>
                    <Link
                        className={`${styles["content"]} ${styles["mobile"]}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`Ir a ${data.productDetail.contact.networks.whatsappMobile.name}`}
                        href={data.productDetail.contact.networks.whatsappMobile.link}
                    >
                        <IconComponent iconData={data.productDetail.contact.networks.whatsappMobile.icon} size='small' />
                        <span className={styles["text"]}>{data.productDetail.contact.networks.whatsappMobile.title}</span>
                    </Link>
                    <Link
                        className={`${styles["content"]}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`Ir a ${data.productDetail.contact.networks.instagram.name}`}
                        href={data.productDetail.contact.networks.instagram.link}
                    >
                        <IconComponent iconData={data.productDetail.contact.networks.instagram.icon} size='small' />
                        <span className={styles["text"]}>{data.productDetail.contact.networks.instagram.title}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}