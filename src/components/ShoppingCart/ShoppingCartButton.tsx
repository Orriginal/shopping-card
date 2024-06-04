import { ActionIcon, Badge, Group } from '@mantine/core';
import { IconBasket } from '@tabler/icons-react';
import { useShoppingCart } from '../../hooks/ShoppingCart';
import './ShoppingCartButton.css';

function ShoppingCartButton() {
    const { cartItems, toggleCart } = useShoppingCart();
    return (
        <Group className="shopping-cart-btn-container">
            <Badge
                className="shopping-cart-btn-badge"
                size="xs"
                circle
            >
                {cartItems.length}
            </Badge>
            <ActionIcon
                variant="default"
                size="lg"
                aria-label="Shopping cart"
                onClick={toggleCart}
            >
                <IconBasket stroke={1.5} />
            </ActionIcon>
        </Group>
    );
}

export default ShoppingCartButton;
