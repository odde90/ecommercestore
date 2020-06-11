
export interface Product {
    productID: number
    img: string
    title: string
    author: string
    price: number
}
export const products: Product[] = [
    {
        productID: 1,
        img: '1.png',
        title: "Dark Blue",
        author: "author",
        price: 5000
    },
    {
        productID: 2,
        img: '2.jpg',
        title: "Groom Classic",
        author: "author",
        price: 2500
    },
    {

        productID: 3,
        img: '3.jpg',
        title: "Summer Suit",
        author: "author",
        price: 1800
    },
    {
        productID: 4,
        img: '3.jpg',
        title: "Tiger of Sweden",
        author: "author",
        price: 3000
    },
    {
        productID: 5,
        img: '2.jpg',
        title: "Party Style",
        author: "author",
        price: 3000
    }
];
