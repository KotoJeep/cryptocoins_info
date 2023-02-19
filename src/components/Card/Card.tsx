import React from 'react';
import './Card.scss'
import cn from 'classnames';

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

export const Card: React.FC<CardProps> = ({image, title, subtitle, content, onClick}: CardProps) => {
    return <div className='card' onClick={onClick}>
        <img src={image} alt='' className="card__img"/>
        <div className="card-content">
            <div className="card-content__header">
                <h4 className="card-content__title">{title}</h4>
                <div className="card-content__coast">{content}₹2,509.75</div>
            </div>
            <div className="card-content__info">
                <h5 className="card-content__subtitle">{subtitle}</h5>
                <div className="card-content__change">+9.77%</div>
            </div>

        </div>
    </div>
};

