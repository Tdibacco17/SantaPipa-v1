import { ProductInterface } from '@/types/productsType'
import styles from './ProductDetailInfoComponent.module.scss'
import data from '@/models/es.json'
import TitleDecorationComponent from '../TitleDecorationComponent/TitleDecorationComponent'
import { IconComponent } from '../IconComponent/IconComponent'
import Link from 'next/link'
import CopyToClipboardComponent from '../CopyToClipboardComponent/CopyToClipboardComponent'
export default function ProductDetailInfoComponent({
    productData
}: {
    productData: ProductInterface
}) {
    return (
        <div className={styles["container-section-info-product-detail"]}>
            <div className={styles["header-division"]}>
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
            </div>
            <div className={styles["body-division"]}>
                <div className={styles["container-division"]}>
                    <p className={styles["division-title"]}>{data.productDetail.description.title}</p>
                    <p className={styles["info"]}>
                        {productData.details.description.map((item: string, index: number) => {
                            return <span key={index}>{`- ${item}`}</span>
                        })}
                    </p>
                </div>
                <div className={styles["container-division"]}>
                    <p className={styles["division-title"]}>{data.productDetail.measures.title}</p>
                    <p>{`- ${data.productDetail.measures.description}`}</p>
                </div>
                <div className={styles["container-division"]}>
                    <p className={styles["division-title"]}>{data.productDetail.shipments.title}</p>
                    <p className={styles["info"]}>
                        {data.productDetail.shipments.description.map((item: string, index: number) => {
                            return <span key={index}>{`- ${item}`}</span>
                        })}
                    </p>
                </div>
            </div>
            {/* <div className={styles["container-division"]}>
                <p className={`${styles["division-title"]}`}>{data.productDetail.note.title}</p>
                <p className={styles["info"]}>
                    {data.productDetail.note.description.map((item: string, index: number) => {
                        return <span key={index}>{item}</span>
                    })}
                </p>
            </div> */}
            <div className={styles["footer-division"]}>
                <p>{data.productDetail.contact.title}</p>
                <div className={styles["wrapper"]}>
                    <div className={styles["container-network-data"]}>
                        {Object.values(data.productDetail.contact.networks).map((item: any, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    className={`${styles["content"]} ${item.icon.onlyDesktop && styles["desktop"]} ${item.icon.onlyMobile && styles["mobile"]}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={`Ir a ${item.name}`}
                                    href={item.link}
                                >
                                    <IconComponent iconData={item.icon} size='small' />
                                    <span className={styles["text"]}>{item.title}</span>
                                </Link>
                            )
                        })}
                    </div>
                    <CopyToClipboardComponent
                        title={data.productDetail.contact.share.title}
                        shareUrl={productData.shareUrl}
                        icon={data.productDetail.contact.share.icon}
                    />
                </div>
            </div>
        </div>
    )
}