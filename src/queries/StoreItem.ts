import { gql } from '@apollo/client';

const STORE_ITEM = gql`
   {
        getItem($id: ID!) {
            id
            pictureUri
            price
            stockAmount
            title
            onSale
        }
    }
`;

export default STORE_ITEM;
