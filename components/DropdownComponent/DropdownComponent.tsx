import { DropdownDataInterface } from '@/types'
import styles from './DropdownComponent.module.scss'
export default function DropdownComponent({
    isOpen,
    handleOpenDropdown,
    dropdownData,
    descriptionData
}: {
    isOpen: boolean,
    handleOpenDropdown: () => void,
    dropdownData: DropdownDataInterface,
    descriptionData?: string[]
}) {
    return (
        <div className={`${styles["container-division"]}`}>
            <div onClick={handleOpenDropdown} className={`${styles["division-title"]} ${!isOpen && styles["isOpen"]}`}>
                <span className={styles["title"]}>{dropdownData.title}</span>
                <span className={styles["open"]}>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && descriptionData && descriptionData?.length > 0 &&
                <p className={styles["info"]}>
                    {descriptionData.map((item: string, index: number) => {
                        return <span key={index}>{`- ${item}`}</span>
                    })}
                </p>}
            {isOpen && dropdownData.description &&
                <p className={styles["info"]}>
                    {dropdownData.description.map((item: string, index: number) => {
                        return <span key={index}>{`- ${item}`}</span>
                    })}
                </p>}
        </div>
    )
}