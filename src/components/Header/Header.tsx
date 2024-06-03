import { Autocomplete, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import ThemeButton from '../ThemeButton/ThemeButton';
import './Header.css';

function Header() {
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
                        data={['moet', 'nog', 'gevuld']}
                        visibleFrom="xs"
                    />
                    <ThemeButton />
                </Group>
            </div>
        </header>
    );
}

export default Header;
