import { Item, useStoreItemsQuery } from '../generated/Graphql';
import { useStoreItems } from '../hooks/StoreItems';
import React, { useEffect } from 'react';

interface DataProviderProps {
    children: React.ReactNode;
}

function DataProvider({ children }: DataProviderProps) {
    const { loading, data } = useStoreItemsQuery();
    const { isLoading, defaultItems, setIsLoading, setStoredFilteredItems, setStoredItems } = useStoreItems();

    useEffect(() => {
        if (isLoading !== loading) {
            setIsLoading(loading);
        }

        if (!loading && defaultItems.length !== data?.getItems.length) {
            setStoredItems((data?.getItems as Item[]) || []);
            setStoredFilteredItems((data?.getItems as Item[]) || []);
        }
    });

    return <>{children}</>;
}

export default DataProvider;
