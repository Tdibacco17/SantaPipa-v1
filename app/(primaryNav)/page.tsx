import BannerImgComponent from '@/components/BannerImgComponent/BannerImgComponent'
import styles from './page.module.scss'
import RelevantComponent from '@/components/RelevantComponent/RelevantComponent'
import ContactImgComponent from '@/components/ContactImgComponent/ContactImgComponent'
import AboutImgComponent from '@/components/AboutImgComponent/AboutImgComponent'
import OutStandingComponent from '@/components/OutStandingComponent/OutStandingComponent'
export default function Home() {
  return (
    <div className={styles["container-section-home"]}>
      <BannerImgComponent />
      <OutStandingComponent />
      <AboutImgComponent />
      <RelevantComponent />
      <ContactImgComponent />
    </div>
  )
}
