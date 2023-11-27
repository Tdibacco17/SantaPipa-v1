'use client'
import { copyToClipboard } from '@/utils/copy'
import styles from './CopyToClipboardComponent.module.scss'
import { IconComponent } from '../IconComponent/IconComponent'
import { useState } from 'react'
export default function CopyToClipboardComponent({
    title,
    productSlug,
    icon
}: {
    title: string,
    productSlug: string,
    icon: any
}) {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopyClick = () => {
        copyToClipboard(`https://desarrollo-santa-pipa.vercel.app/products/${productSlug}`);
        setIsCopied(true);

        // Después de 2 segundos, reiniciar el estado
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className={styles["container-clipboard"]}>

            <div onClick={handleCopyClick} className={styles["content"]}>
                <IconComponent iconData={icon} size='small' />
                <p className={styles["text"]}>{title}</p>
            </div>
            {isCopied && (
                <div className={styles["popup"]}>
                    <small>Copiado al portapapeles</small>
                </div>
            )}
        </div>
    )
}