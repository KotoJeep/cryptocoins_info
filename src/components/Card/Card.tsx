import React from "react";
import styles from "./Card.module.scss";

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}: CardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt="" className={styles["card__img"]} />
      <div className={styles["card-content"]}>
        <div className={styles["card-content__header"]}>
          <h4 className={styles["card-content__title"]}>{title}</h4>
          <div className={styles["card-content__coast"]}>
            {content}₹2,509.75
          </div>
        </div>
        <div className={styles["card-content__info"]}>
          <h5 className={styles["card-content__subtitle"]}>{subtitle}</h5>
          <div className={styles["card-content__change"]}>+9.77%</div>
        </div>
      </div>
    </div>
  );
};
