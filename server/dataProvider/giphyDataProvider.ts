import { TShoppingItem } from '../types/DatabaseTypes';
import { NumberHelper } from '../../src/helpers/numberHelper';

/**
 * Get the items from the Giphy API and convert them to shopping items.
 */
export class GiphyDataProvider {
    public static async getGifs(): Promise<TShoppingItem[]> {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=programmer`;
        const response = await fetch(url);
        const data = (await response.json()).data;
        return data.map(
            ({ id, title, embed_url }: { id: string; title: string; embed_url: string }): TShoppingItem => ({
                id: id,
                title: title,
                price: NumberHelper.randomNumber(3, 18),
                pictureUri: embed_url,
                stockAmount: NumberHelper.randomNumber(5, 50),
            })
        );
    }
}
