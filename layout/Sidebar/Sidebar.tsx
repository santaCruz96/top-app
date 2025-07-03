import { JSX } from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";
import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};
