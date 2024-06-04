import { items } from './dataProvider/databaseProvider';
import { randomUUID } from 'crypto';
import { TShoppingItem } from './types/DatabaseTypes';

/**
 * Get item by given id.
 * @param id
 * @returns {TShoppingItem | undefined}
 */
const getItem = ({ id }: { id: string }): TShoppingItem | undefined => {
    return items.find((item) => item.id === id);
};

/**
 * Get all items.
 * @returns {TShoppingItem[]}
 */
const getItems = (): TShoppingItem[] => {
    return items;
};

/**
 * Create a new item by giving a @link{TShoppingItem} object.
 * @param newItem
 * @returns {TShoppingItem}
 */
const createItem = (newItem: Partial<TShoppingItem>): TShoppingItem => {
    const generatedId = randomUUID().toString();
    const emptyItem: TShoppingItem = {
        id: generatedId,
        title: '',
        price: 0,
        pictureUri: '',
        stockAmount: 0,
        onSale: false,
    };
    const item: TShoppingItem = { ...emptyItem, ...newItem };
    items.push(item);
    return item;
};

/**
 * Update an item by giving a @link{TShoppingItem} object.
 * If the item is not found, it returns undefined.
 * If the item is found, it returns the updated item.
 * @param updateItem
 * @returns {TShoppingItem | undefined}
 */
const updateItem = (updateItem: Partial<TShoppingItem>): TShoppingItem | undefined => {
    let item = items.find(({ id }) => id === updateItem.id);

    if (!item) {
        return;
    }

    item = { ...item, ...updateItem };
    return item;
};

/**
 * Delete an item by giving the id of the item.
 * @param itemId
 */
const deleteItem = (itemId: string): void => {
    const index = items.findIndex(({ id }) => id === itemId);
    if (index !== -1) {
        items.splice(index, 1);
    }
};

export const root = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem,
};
