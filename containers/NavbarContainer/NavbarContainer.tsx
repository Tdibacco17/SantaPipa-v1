'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { useWindowSize } from "@/utils/size/useWindowSize";
import { useEffect, useState } from "react";

export default function NavbarContainer({ navType }: { navType: "primary" | "secondary" }) {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const handleShowMenu = (isClose?: boolean) => {
        if (isClose) {
            setShowMenu(false)
        } else {
            setShowMenu(!showMenu)
        }
    }
    const { isAtTop } = useScrollPosition();
    const { width } = useWindowSize();
    useEffect(() => {
        if (width > 768) {
            setShowMenu(false)
        }
    }, [width])
    return <NavbarComponent
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
        isAtTop={isAtTop}
        navType={navType}
    />
}