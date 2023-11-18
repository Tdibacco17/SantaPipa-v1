import BannerImgComponent from '@/components/BannerImgComponent/BannerImgComponent'
import styles from './page.module.scss'
import RelevantComponent from '@/components/RelevantComponent/RelevantComponent'
export default function Home() {
  return (
    <div className={styles["container-section-home"]}>
      <BannerImgComponent />
      <RelevantComponent />
    </div>
  )
}
