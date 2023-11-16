'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { useState } from "react";

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

    return <NavbarComponent
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
        isAtTop={isAtTop}
        navType={navType}
    />
}