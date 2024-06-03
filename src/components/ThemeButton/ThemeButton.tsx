import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ThemeColor } from '../../types/ThemeTypes';

const themeIcon = (themeColor: ThemeColor) => {
    return themeColor === 'dark' ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />;
};

function ThemeButton() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
        >
            {themeIcon(computedColorScheme)}
        </ActionIcon>
    );
}

export default ThemeButton;
