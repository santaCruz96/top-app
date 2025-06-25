import { JSX, useState } from "react";
import { Htag, Button, P, Tag, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag="h1">Текст</Htag>
            <Button appearance="primary" arrow="right">
                Кнопка
            </Button>
            <Button appearance="ghost" arrow="down">
                Кнопка
            </Button>
            <P size="l">Большой</P>
            <P>Средний</P>
            <P size="s">Маленький</P>
            <Tag size="s">ghost</Tag>
            <Tag size="m" color="red">
                red
            </Tag>
            <Tag size="s" color="green">
                green
            </Tag>
            <Tag color="primary">primary</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}

export default withLayout(Home);
