'use client'
import DropdownComponent from "@/components/DropdownComponent/DropdownComponent";
import { DropdownDataInterface } from "@/types";
import { useState } from "react";
export default function DropdownContainer({
    dropdownData,
    descriptionData
}: {
    dropdownData: DropdownDataInterface,
    descriptionData?: string[]
}) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenDropdown = () => {
        setIsOpen(!isOpen)
    }
    return <DropdownComponent dropdownData={dropdownData} descriptionData={descriptionData}
        isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} />
}