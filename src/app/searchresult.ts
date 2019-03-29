export class SearchResult {
    name: string;
    link: string;
    price?: Prices;
    photo?: string;
}

export class Prices {
    promotional_price?: string;
    regular_price: string;
}