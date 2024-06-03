import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface ShoppingItemProps {
    title: string;
    price: number;
    pictureUri: string;
    stockAmount: number;
}

function ShoppingItem({ title, pictureUri }: ShoppingItemProps) {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
        >
            <Card.Section>
                <Image
                    src={pictureUri}
                    width={200}
                    height={200}
                    alt={title}
                />
            </Card.Section>

            <Group
                justify="space-between"
                mt="md"
                mb="xs"
            >
                <Text fw={500}>{title}</Text>
                <Badge color="pink">On Sale</Badge>
            </Group>

            <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
            >
                Add to cart
            </Button>
        </Card>
    );
}

export default ShoppingItem;
