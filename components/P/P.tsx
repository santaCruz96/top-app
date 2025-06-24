import { JSX } from "react";
import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({
    size = "m",
    children,
    className,
    ...props
}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.text, className, styles[size])} {...props}>
            {children}
        </p>
    );
};
