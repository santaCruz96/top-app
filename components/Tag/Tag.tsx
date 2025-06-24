import { JSX } from "react";
import { PProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
    size = "s",
    children,
    color = "ghost",
    href,
    className,
    ...props
}: PProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, styles[size], styles[color])}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
