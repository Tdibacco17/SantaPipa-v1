// 'use client'
// import { ProductInterface, ProductsDataInterface } from "@/types/productsType";
// import { ReactNode, createContext, useState } from "react";

// export const ProductDetailContext = createContext<ProductsDataInterface | {}>({});

// export const ProductProvider = ({ children }: { children: ReactNode }) => {
//     const [productData, setProductData] = useState<ProductInterface | undefined>(undefined);
//     const handleProductDataChange = (productData: ProductInterface) => {
//         setProductData(productData);
//     };
//     return (
//         <ProductDetailContext.Provider
//             value={{
//                 productData,
//                 handleProductDataChange,
//             }}
//         >
//             {children}
//         </ProductDetailContext.Provider>
//     );
// };