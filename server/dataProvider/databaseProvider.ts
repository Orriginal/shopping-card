import { TShoppingItem } from '../types/DatabaseTypes';
import { GiphyDataProvider } from './giphyDataProvider';

/**
 * It is used to simulate a database.
 */

/**
 * The items in the shop.
 * @type {TShoppingItem[]}
 */
let items: TShoppingItem[] = [];

/**
 * Get the items from the Giphy API and use it as dummy data.
 */
GiphyDataProvider.getGifs().then((shoppingItems: TShoppingItem[]): void => {
    items = shoppingItems;
});

export { items };
