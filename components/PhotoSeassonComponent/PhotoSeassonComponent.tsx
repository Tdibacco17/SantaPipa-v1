import Image from 'next/image'
import styles from './PhotoSeassonComponent.module.scss'
import data from '@/models/es.json'
import { ImgDataInterface } from '@/types'
export default function PhotoSeassonComponent({
    handleView,
    isView
}: {
    handleView: () => void,
    isView: boolean
}) {
    const showImages = isView
        ? data.aboutPage.images
        : data.aboutPage.images.slice(0, 8);
    return (
        <>
            <div className={styles["grid"]}>
                {showImages.map((imageData: ImgDataInterface, index: number) => (
                    <div key={index} className={styles["container-outer-img"]}>
                        <Image
                            className={styles["container-inner-img"]}
                            src={imageData.imgSrc}
                            alt={imageData.imgAlt}
                            fill
                            style={{ objectPosition: imageData.objPosition }}
                            placeholder='blur'
                            blurDataURL={imageData.imgBlur}
                        />
                    </div>
                ))}
            </div>
            <div className={styles["btn-view-more"]} onClick={handleView}>
                {!isView ? "Mostrar mas" : "Mostrar menos"}
            </div>
        </>

    )
}