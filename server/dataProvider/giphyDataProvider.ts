import { TShoppingItem } from '../types/DatabaseTypes';
import { NumberHelper } from '../../src/helpers/NumberHelper';

/**
 * Get the items from the Giphy API and convert them to shopping items.
 */
export class GiphyDataProvider {
    /**
     * Get the items from the Giphy API and convert them to shopping items.
     * @returns {Promise<TShoppingItem[]>}
     */
    public static async getGifs(): Promise<TShoppingItem[]> {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=programmer`;
        const response = await fetch(url);
        const data = (await response.json()).data;
        const existingTitles: string[] = [];
        return data.map(
            ({ id, title, images }: { id: string; title: string; images: any }): TShoppingItem => ({
                id: id,
                title: this.title(existingTitles, title),
                price: NumberHelper.randomNumber(3, 18),
                pictureUri: images.original.url,
                stockAmount: NumberHelper.randomNumber(5, 50),
                onSale: NumberHelper.randomNumber(1, 3) === 1,
            })
        );
    }

    private static title(existingTitles: string[], title: string): string {
        const titleExistsXTimes: number = existingTitles.filter((t) => t === title).length;
        existingTitles.push(title);
        return titleExistsXTimes ? `${title} (${titleExistsXTimes})` : title;
    }
}
