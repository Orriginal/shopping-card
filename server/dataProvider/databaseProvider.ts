import { TShoppingCard, TShoppingItem } from '../types/DatabaseTypes';
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

/**
 * The shopping card of the user.
 * There is only one shopping card for now. normally, it should be tracked by the user.
 * @type {TShoppingCard[]}
 */
const shoppingCard: TShoppingCard[] = [];

export { items, shoppingCard };
