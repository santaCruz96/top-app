import { JSX } from "react";
import { ProductProps } from "./Product.props";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import styles from "./Product.module.css";
import cn from "classnames";
import { declOfNum, priceRu } from "@/helpers/helpers";

export const Product = ({
    product,
}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image
                    src={
                        product.image.startsWith("http")
                            ? product.image
                            : process.env.NEXT_PUBLIC_DOMAIN + product.image
                    }
                    alt={product.title}
                    width={70}
                    height={70}
                />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && (
                    <Tag className={styles.oldPrice} color="green">
                        {priceRu(product.price - product.oldPrice)}
                    </Tag>
                )}
            </div>
            <div className={styles.credit}>
                {priceRu(product.credit)}/
                <span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map((c) => (
                    <Tag key={c} className={styles.category} color="ghost">
                        {c}
                    </Tag>
                ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
                {product.reviewCount}{" "}
                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>
                {product.characteristics.map((c) => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>
                            {c.name}
                        </span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>
                            {c.value}
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && (
                    <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>
                )}
                {product.disadvantages && (
                    <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>
                )}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button
                    appearance="ghost"
                    arrow={"right"}
                    className={styles.reviewButton}
                >
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};
