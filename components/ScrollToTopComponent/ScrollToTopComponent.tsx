'use client'
import { handleScrollToSection } from "@/utils/scroll/scrollToSection";
import styles from './ScrollToTopComponent.module.scss'

export default function ScrollToTopComponent({ scrollTo }: { scrollTo: string }) {
    return <div onClick={() => handleScrollToSection(scrollTo)}
        className={styles["container-scroll-to"]}>
    </div>
}