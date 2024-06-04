import { Autocomplete, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import ThemeButton from '../ThemeButton/ThemeButton';
import './Header.css';
import { useStoreItems } from '../../hooks/StoreItems';
import ShoppingCartButton from '../ShoppingCart/ShoppingCartButton';

function Header() {
    const { defaultItems, setStoredFilteredItems } = useStoreItems();

    const handleChange = (value: string) => {
        const filteredItems = defaultItems.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase().trim())
        );
        setStoredFilteredItems(filteredItems);
    };

    return (
        <header className="header">
            <div className="inner">
                <Group className="logo">Giphy Store</Group>

                <Group>
                    <Autocomplete
                        className="search"
                        placeholder="Search"
                        leftSection={
                            <IconSearch
                                style={{ width: 16, height: 16 }}
                                stroke={1.5}
                            />
                        }
                        data={defaultItems.map(({ title }) => title)}
                        visibleFrom="xs"
                        onClick={(e) => (e.target as HTMLInputElement).select()}
                        onChange={handleChange}
                    />
                    <ShoppingCartButton />
                    <ThemeButton />
                </Group>
            </div>
        </header>
    );
}

export default Header;
