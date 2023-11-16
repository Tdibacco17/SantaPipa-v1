import { Roboto } from 'next/font/google'

export const myFont = Roboto({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: 'normal',
    preload: true,
    variable: '--font-myFont',
    display: 'swap'
})
