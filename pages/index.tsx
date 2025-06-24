import { JSX } from "react";
import { Htag, Button, P } from "@/components";

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
        </div>
    );
}
