import Image from 'next/image'
import styles from './GaleryCardComponent.module.scss'
import { ImgDataInterface } from '@/types'
export default function GaleryCardComponent({
    imageData,
    imgType,
    priority
}: {
    imageData: ImgDataInterface,
    imgType: "primary" | "secondary",
    priority: boolean
}) {
    return (
        <div className={`${styles["container-outer-galery-img"]} ${imgType === "secondary" && styles["secondary"]}`}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                priority={priority}
                placeholder='blur'
                blurDataURL={imageData.imgBlur}
                style={{ objectPosition: imageData.objPosition }}
                className={styles["container-inner-galery-img"]}
            />
        </div>
    )
}