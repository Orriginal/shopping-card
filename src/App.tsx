import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Store from './components/Store';

function App() {
    return (
        <MantineProvider>
            <Store />
        </MantineProvider>
    );
}

export default App;
