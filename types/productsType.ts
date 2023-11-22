import { ImgDataInterface } from ".";

export interface ProductsDataContextInterface {
    handleProductDataChange?: Function;
    productData?: ProductInterface;
}

export interface ProductsDataInterface {
    [id: string]: ProductInterface;
}
export interface ProductInterface {
    productSlug: string,
    title: string,
    price: string,
    offerPrice: string,
    image: ImgDataInterface,
    isNewIn: boolean
    details: {
        imagesData: ImgDataInterface[]
        // measures: string,
        description: string[],
        smallTitle: string
    }
}