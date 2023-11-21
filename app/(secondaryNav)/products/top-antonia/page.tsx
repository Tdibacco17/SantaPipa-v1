import ProductDetailComponent from "@/components/ProductDetailComponent/ProductDetailComponent";
import productsData from "@/models/products";
export default function ProductDetailPage(){
    return <ProductDetailComponent productData={productsData["top-antonia"]}/>
}