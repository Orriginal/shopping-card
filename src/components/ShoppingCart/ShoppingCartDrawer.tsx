import { Drawer } from '@mantine/core';
import { useShoppingCart } from '../../hooks/ShoppingCart';

function ShoppingCartDrawer() {
    const { isCartOpen, toggleCart } = useShoppingCart();

    return (
        <Drawer
            opened={isCartOpen}
            onClose={toggleCart}
            title="Shopping cart"
        >
            <div>Content</div>
        </Drawer>
    );
}

export default ShoppingCartDrawer;
