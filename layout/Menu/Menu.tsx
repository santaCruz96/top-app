import { JSX, useContext } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        if (setMenu) {
            setMenu(
                menu.map((m) => {
                    if (m._id.secondCategory === secondCategory) {
                        return { ...m, isOpened: !m.isOpened };
                    }
                    return m;
                }),
            );
        }
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((m) => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div
                                className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]:
                                        m.id === firstCategory,
                                })}
                            >
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((m) => {
                    if (
                        m.pages
                            .map((p) => p.alias)
                            .includes(router.asPath.split("/")[2])
                    ) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() =>
                                    openSecondLevel(m._id.secondCategory)
                                }
                            >
                                {m._id.secondCategory}
                            </div>
                            <div
                                className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockOpened]: m.isOpened,
                                })}
                            >
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((p) => (
            <Link
                key={p._id}
                href={`/${route}/${p.alias}`}
                className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]:
                        `/${route}/${p.alias}` === router.asPath,
                })}
            >
                {p.category}
            </Link>
        ));
    };

    return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
