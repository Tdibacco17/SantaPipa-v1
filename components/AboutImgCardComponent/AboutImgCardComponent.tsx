import { ImgDataInterface } from '@/types'
import styles from './AboutImgCardComponent.module.scss'
import Image from 'next/image'
export default function AboutImgCardComponent({ imageData }: { imageData: ImgDataInterface }) {
    return (
        <div className={styles["container-outer-about-img"]}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                placeholder='blur'
                blurDataURL={imageData.imgBlur}
                style={{ objectPosition: imageData.objPosition }}
                className={styles["container-inner-about-img"]}
            />
        </div >
    )
}