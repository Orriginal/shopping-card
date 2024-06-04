import { useShoppingCart } from '../../hooks/ShoppingCart';
import { ActionIcon, Image, Table } from '@mantine/core';
import './ShoppingCartTable.css';
import { Item } from '../../generated/Graphql';
import { IconTrash } from '@tabler/icons-react';

function ShoppingCartTable() {
    const { cartItems, setCartItems } = useShoppingCart();
    const total = cartItems.reduce((acc, { price }) => acc + price, 0);

    const uniqueCardItems: Item[] = [];
    const groupedCartItems = cartItems.reduce((acc, item) => {
        if (acc.has(item.id)) {
            acc.get(item.id)?.push(item);
        } else {
            uniqueCardItems.push(item);
            acc.set(item.id, [item]);
        }
        return acc;
    }, new Map<string, Item[]>());

    const handleDeleteButtonClick = (id: string) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const rows = uniqueCardItems.map(({ id, pictureUri, title, price }, key) => (
        <Table.Tr key={key}>
            <Table.Td>
                <Image
                    src={pictureUri}
                    alt={title}
                    width={40}
                    height={40}
                />
            </Table.Td>
            <Table.Td>{title}</Table.Td>
            <Table.Td className="center">{groupedCartItems.get(id)?.length}</Table.Td>
            <Table.Td className="center">&euro;{price}</Table.Td>
            <Table.Td className="center">&euro;{(groupedCartItems.get(id)?.length || 0) * price}</Table.Td>
            <Table.Td className="center">
                <ActionIcon
                    onClick={() => handleDeleteButtonClick(id)}
                    color="red"
                    size="sm"
                >
                    <IconTrash size={14} />
                </ActionIcon>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th />
                    <Table.Th>Name</Table.Th>
                    <Table.Th className="center">Amount</Table.Th>
                    <Table.Th className="center">Price</Table.Th>
                    <Table.Th className="center">Total</Table.Th>
                    <Table.Th />
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
            <Table.Tfoot>
                <Table.Tr>
                    <Table.Th colSpan={4}>Total</Table.Th>
                    <Table.Th>&euro;{total}</Table.Th>
                    <Table.Th />
                </Table.Tr>
                <Table.Tr>
                    <Table.Th colSpan={4}>Customer is king discount 100%</Table.Th>
                    <Table.Th>- &euro;{total}</Table.Th>
                    <Table.Th />
                </Table.Tr>
                <Table.Tr>
                    <Table.Th colSpan={4}>You have to pay</Table.Th>
                    <Table.Th>&euro;{0}</Table.Th>
                    <Table.Th />
                </Table.Tr>
            </Table.Tfoot>
        </Table>
    );
}

export default ShoppingCartTable;
