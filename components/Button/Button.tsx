import { JSX } from "react";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
    appearance,
    arrow = "none",
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, styles[appearance])}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <ArrowIcon className={cn(styles.arrow, styles[arrow])} />
            )}
        </button>
    );
};
