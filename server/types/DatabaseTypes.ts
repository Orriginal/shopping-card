export type TShoppingItem = {
    id: string;
    title: string;
    price: number;
    pictureUri: string;
    stockAmount: number;
};

export type TShoppingCard = {
    id: string;
    items: TShoppingItem[];
};
