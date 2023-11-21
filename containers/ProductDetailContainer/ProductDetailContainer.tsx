// 'use client'
// import ProductDetailComponent from "@/components/ProductDetailComponent/ProductDetailComponent";
// import { ProductDetailContext } from "@/context/ProductDetailContextProvider";
// import productsData from "@/models/products";
// import { ProductsDataContextInterface } from "@/types/productsType";
// import { useContext, useEffect } from "react";

// export default function ProductDetailContainer({ params }: { params: { slug: string } }) {
//     const { handleProductDataChange } = useContext(
//         ProductDetailContext
//     ) as ProductsDataContextInterface
//     useEffect(() => {
//         if (params.slug) {
//             handleProductDataChange &&
//                 handleProductDataChange(productsData[params.slug]);
//         }
//     }, [params.slug]);
//     return <ProductDetailComponent />
// }