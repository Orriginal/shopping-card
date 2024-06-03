import { TShoppingItem } from '../types/DatabaseTypes';
import { NumberHelper } from '../../src/helpers/NumberHelper';

/**
 * Get the items from the Giphy API and convert them to shopping items.
 */
export class GiphyDataProvider {
    public static async getGifs(): Promise<TShoppingItem[]> {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=programmer`;
        const response = await fetch(url);
        const data = (await response.json()).data;
        return data.map(
            ({ id, title, images }: { id: string; title: string; images: any }): TShoppingItem => ({
                id: id,
                title: title,
                price: NumberHelper.randomNumber(3, 18),
                pictureUri: images.original.url,
                stockAmount: NumberHelper.randomNumber(5, 50),
            })
        );
    }
}
