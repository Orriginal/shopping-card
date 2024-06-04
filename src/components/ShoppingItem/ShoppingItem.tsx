import { Card, Image, Text, Badge, Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import './ShoppingItem.css';
import { useShoppingCart } from '../../hooks/ShoppingCart';
import { Item } from '../../generated/Graphql';

interface ShoppingItemProps {
    item: Item;
}

function ShoppingItem({ item }: ShoppingItemProps) {
    const { cartItems, addItemToCard } = useShoppingCart();
    const itemInCart = cartItems.filter((cartItem) => cartItem.id === item.id).length;

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
        >
            <Card.Section>
                {item.onSale && (
                    <Badge
                        className="badge"
                        color="pink"
                    >
                        On Sale
                    </Badge>
                )}
                <Image
                    src={item.pictureUri}
                    width={200}
                    height={200}
                    alt={item.title}
                />
            </Card.Section>

            <Group
                justify="space-between"
                mt="md"
                mb="xs"
            >
                <Text fw={500}>{item.title}</Text>
            </Group>

            <Group justify="space-between">
                <Text size="lg">&euro;{item.price}</Text>
                <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label={item.stockAmount === itemInCart ? 'There are not more items in stock' : 'Add to cart'}
                    withArrow
                    position="top"
                >
                    <Group className="shopping-cart-action-group">
                        {itemInCart && (
                            <Badge
                                className="shopping-cart-badge"
                                color="pink"
                                size="sm"
                                circle
                            >
                                {itemInCart}
                            </Badge>
                        )}
                        <ActionIcon
                            variant="gradient"
                            size="md"
                            aria-label="Gradient action icon"
                            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                            onClick={() => addItemToCard(item)}
                            disabled={item.stockAmount === itemInCart}
                        >
                            <IconShoppingCart size={18} />
                        </ActionIcon>
                    </Group>
                </Tooltip>
            </Group>
        </Card>
    );
}

export default ShoppingItem;
