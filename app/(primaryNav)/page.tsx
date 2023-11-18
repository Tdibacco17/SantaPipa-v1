import BannerImgComponent from '@/components/BannerImgComponent/BannerImgComponent'
import styles from './page.module.scss'
import RelevantComponent from '@/components/RelevantComponent/RelevantComponent'
import ContactImgComponent from '@/components/ContactImgComponent/ContactImgComponent'
export default function Home() {
  return (
    <div className={styles["container-section-home"]}>
      <BannerImgComponent />
      <RelevantComponent />
      <ContactImgComponent />
    </div>
  )
}
