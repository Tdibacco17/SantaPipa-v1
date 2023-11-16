import { ProductProvider } from "@/context/ProductDetailContextProvider";
export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}