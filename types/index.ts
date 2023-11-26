import { ProductInterface } from "./productsType"
export interface LinkIconInterface {
    iconData: LinkIconProps
    size: "medium" | "big" | "small",
}
export interface IconInterface {
    iconData: IconProps,
    size: "medium" | "big" | "small",
    isClickable?: () => void,
    customNavFill?: string
}
export interface IconProps {
    fill: string,
    viewBox: string
    path: string[],
    isLink: boolean,
    hover: boolean
    onlyDesktop?: boolean,
    onlyMobile?: boolean,
}
export interface LinkIconProps extends IconProps {
    link: string,
    name: string,
    title?: string,
}

export interface NavigationProps {
    title: string,
    link: string
}
export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string
    imgBlur: string
    objPosition: string,
    hoverImg?: {
        imgSrc: string,
        imgAlt: string
        imgBlur: string
        objPosition: string,
    }
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

export interface FormRequestInterface {
    messageData: MessageDataInterface
}

export interface MessageDataInterface {
    name: string,
    phone: string,
    email: string,
    consultation: string
}

export interface FieldProps {
    label: string,
    input?: {
        type: string,
        name: string
    }
}