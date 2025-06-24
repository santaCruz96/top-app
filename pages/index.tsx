import { JSX } from "react";
import { Htag, Button, P, Tag } from "@/components";

export default function Home(): JSX.Element {
    return (
        <div>
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
        </div>
    );
}
