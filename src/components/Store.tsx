import { gql, useQuery } from '@apollo/client';

const ITEMS = gql`
    {
        getItems {
            title
            price
            pictureUri
            stockAmount
        }
    }
`;

interface ItemData {
    id: string;
    title: string;
    price: number;
    pictureUri: string;
    stockAmount: number;
}

interface ItemsResult {
    getItems: ItemData[];
}

function Store() {
    const { loading, data } = useQuery<ItemsResult>(ITEMS);
    console.log(data);
    return (
        <>
            {loading || !data ? (
                <p>Loading...</p>
            ) : (
                data.getItems.map((elem, key) => (
                    <div key={key}>
                        <h2>
                            <a href={elem.pictureUri}>{elem.title}</a>
                        </h2>
                        <p>{elem.price}</p>
                    </div>
                ))
            )}
        </>
    );
}

export default Store;
