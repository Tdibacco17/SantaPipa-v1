'use client'
import PhotoSeassonComponent from "@/components/PhotoSeassonComponent/PhotoSeassonComponent";
import { useState } from "react";
export default function PhotoSeassonContainer() {
    const [isView, setIsView] = useState<boolean>(false)
    const handleView = () => {
        setIsView(!isView)
    }
    return <PhotoSeassonComponent handleView={handleView} isView={isView} />
}