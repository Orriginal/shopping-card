import { gql } from '@apollo/client';

const STORE_ITEMS = gql`
    query StoreItems {
        getItems {
            id
            title
            price
            pictureUri
            stockAmount
        }
    }
`;

export default STORE_ITEMS;
