import { ProductInterface } from "./productsType"
export interface LinkIconInterface {
    iconData: LinkIconProps
    size: "medium" | "big" | "small"
}
export interface IconInterface {
    iconData: IconProps,
    size: "medium" | "big" | "small",
    isClickable: () => void
}
export interface IconProps {
    fill: string, //primary | secondary
    viewBox: string
    path: string[],
    isLink: boolean
}
export interface LinkIconProps extends IconProps {
    link: string,
    name: string,
    onlyDesktop?: boolean,
    onlyMobile?: boolean,
}

export interface NavigationProps {
    title: string,
    link: string
}
export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string
    imgBlur: string
    objPosition?: string
}

export interface CarouselProps {
    nextSlide: () => void,
    prevSlide: () => void,
    imagesData: ImgDataInterface[] | undefined,
    productsData: ProductInterface[] | undefined,
    slideshow: any,
    controls?: boolean,
    indicators?: boolean,
    activeIndex: number,
    isProduct?: boolean
}