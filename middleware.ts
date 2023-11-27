import { NextRequest, NextResponse } from "next/server";

const productSlugs = ["blusa-pipa", "pollera-antonia", "vestido-santa-lucia", "top-antonia", "vestido-amelia", "vestido-siena"]

export function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url);
    //projects details
    if (pathname.startsWith("/products/")) {
        const productSlug = pathname.replace("/products/", "");
        const productExists = productSlugs.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/products", request.url));
        }
    }
    //path luego de /contact
    if (pathname.startsWith("/contact/")) {
        const additionalPath = pathname.replace("/contact/", "");

        if (additionalPath) {
            return NextResponse.redirect(new URL("/contact", request.url));
        }
    }
    //path luego de /about
    if (pathname.startsWith("/about/")) {
        const additionalPath = pathname.replace("/about/", "");

        if (additionalPath) {
            return NextResponse.redirect(new URL("/about", request.url));
        }
    }
    return NextResponse.next();
}