import { ProductInterface } from '@/types/productsType'
import styles from './ProductDetailInfoComponent.module.scss'
import data from '@/models/es.json'
import TitleDecorationComponent from '../TitleDecorationComponent/TitleDecorationComponent'
import { IconComponent } from '../IconComponent/IconComponent'
import Link from 'next/link'
import CopyToClipboardComponent from '../CopyToClipboardComponent/CopyToClipboardComponent'
import DropdownContainer from '@/containers/DropdownContainer/DropdownContainer'
export default function ProductDetailInfoComponent({
    productData
}: {
    productData: ProductInterface
}) {
    return (
        <section className={styles["container-section-info-product-detail"]}>
            <div className={styles["header-division"]}>
                <div>
                    {productData.isNewIn &&
                        <TitleDecorationComponent text={productData.details.smallTitle} colorType='secondary' />}
                    <p className={styles["product-title"]}>{productData.title}</p>
                    <p className={styles["price"]}>{productData.offerPrice}</p>
                </div>
                <div className={styles["container-wrapper-payment"]}>
                    <div className={styles["container-payment"]}>
                        <p className={styles["title"]}>{data.productDetail.payment.title}</p>
                        <p>{data.productDetail.payment.method}</p>
                    </div>
                </div>
            </div>

            <div className={styles["footer-division"]}>
                <div className={styles["wrapper-titles"]}>
                    <p>{data.productDetail.contact.title}</p>
                    <p>
                        {data.productDetail.contact.subtitle.map((item: string, index: number) => {
                            return <span className={`${styles["note"]} ${index === 1 && styles["bold"]}`} key={index}>{item}</span>
                        })}
                    </p>
                </div>
                <div className={styles["wrapper"]}>
                    <div className={styles["container-network-data"]}>
                        {Object.values(data.productDetail.contact.networks).map((item: any, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    className={`${styles["content"]} ${item.icon.onlyDesktop && styles["desktop"]} ${item.icon.onlyMobile && styles["mobile"]}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
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
                        productSlug={productData.productSlug}
                        icon={data.productDetail.contact.share.icon}
                    />
                </div>
            </div>

            <div className={styles["body-division"]}>
                <DropdownContainer dropdownData={data.productDetail.shipments} />
                <DropdownContainer dropdownData={data.productDetail.description}
                    descriptionData={productData.details.description} />
                <DropdownContainer dropdownData={data.productDetail.measures} />
            </div>
        </section>
    )
}