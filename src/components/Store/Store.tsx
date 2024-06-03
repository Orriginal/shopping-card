import ShoppingItem from '../ShoppingItem/ShoppingItem';
import './Store.css';
import { useStoreItems } from '../../store/StoreItems';
import DotLoader from '../Loader/loader';
import { IconAlertTriangle } from '@tabler/icons-react';

function Store() {
    const { filteredItems, isLoading } = useStoreItems();

    if (!filteredItems.length && !isLoading) {
        return (
            <div className="no-items">
                <IconAlertTriangle size={24} />
                No items found
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="loader">
                <DotLoader />
            </div>
        );
    }

    return (
        <div className="store-item-container">
            {filteredItems?.map(({ pictureUri, title, price, stockAmount }, key) => (
                <ShoppingItem
                    key={key}
                    pictureUri={pictureUri}
                    title={title}
                    price={price}
                    stockAmount={stockAmount}
                />
            ))}
        </div>
    );
}

export default Store;
