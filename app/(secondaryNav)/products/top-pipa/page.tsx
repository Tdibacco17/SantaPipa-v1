import ProductDetailComponent from "@/components/ProductDetailComponent/ProductDetailComponent";
import productsData from "@/models/products";
export default function VestidoAmeliaPage(){
    return <ProductDetailComponent productData={productsData["top-pipa"]}/>
}