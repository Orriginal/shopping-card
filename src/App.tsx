import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Store from './components/Store/Store';
import Header from './components/Header/Header';
import DataProvider from './providers/DataProvider';
import ShoppingCartDrawer from './components/ShoppingCart/ShoppingCartDrawer';

const theme = createTheme({
    fontFamily: 'Roboto, sans-serif',
});

function App() {
    return (
        <MantineProvider
            defaultColorScheme="dark"
            theme={theme}
        >
            <DataProvider>
                <Header />
                <Store />
                <ShoppingCartDrawer />
            </DataProvider>
        </MantineProvider>
    );
}

export default App;
