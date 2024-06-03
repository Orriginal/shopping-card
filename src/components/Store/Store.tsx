import ShoppingItem from '../ShoppingItem/ShoppingItem';
import './Store.css';
import { useStoreItems } from '../../store/StoreItems';
import DotLoader from '../Loader/loader';

function Store() {
    const { filteredItems, isLoading } = useStoreItems();

    return (
        <>
            {isLoading || !filteredItems.length ? (
                <div className="loader">
                    <DotLoader />
                </div>
            ) : (
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
            )}
        </>
    );
}

export default Store;
