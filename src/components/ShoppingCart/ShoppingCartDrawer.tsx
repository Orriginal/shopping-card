import { Button, Drawer, Group, Text } from '@mantine/core';
import { useShoppingCart } from '../../hooks/ShoppingCart';
import ShoppingCartTable from './ShoppingCartTable';
import './ShoppingCartDrawer.css';
import { IconBasket } from '@tabler/icons-react';
import { useState } from 'react';

function ShoppingCartDrawer() {
    const { isCartOpen, toggleCart, cartItems, setCartItems } = useShoppingCart();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCheckout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setCartItems([]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <Drawer
            opened={isCartOpen}
            onClose={toggleCart}
            size={600}
            title="Shopping cart"
        >
            <Group className="group-container">
                {cartItems.length === 0 ? (
                    <Text
                        className="empty-cart-message"
                        size="xs"
                    >
                        Your shopping cart is empty.
                    </Text>
                ) : (
                    <ShoppingCartTable />
                )}
                <Group className="checkout-cart-button-container">
                    <Button
                        onClick={handleCheckout}
                        className="checkout-cart-button"
                        variant="default"
                        leftSection={<IconBasket size={20} />}
                        disabled={cartItems.length === 0}
                        loading={isLoading}
                    >
                        Checkout
                    </Button>
                </Group>
            </Group>
        </Drawer>
    );
}

export default ShoppingCartDrawer;
