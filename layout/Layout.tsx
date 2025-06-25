import { FunctionComponent, JSX } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./P.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import cn from "classnames";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>,
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
