import BannerImgComponent from '@/components/BannerImgComponent/BannerImgComponent'
import styles from './page.module.scss'
export default function Home() {
  return (
    <div className={styles["container-section-home"]}>
      <BannerImgComponent />
    </div>
  )
}
