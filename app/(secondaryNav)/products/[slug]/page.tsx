import ProductDetailContainer from "@/containers/ProductDetailContainer/ProductDetailContainer";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return <ProductDetailContainer params={params} />
}