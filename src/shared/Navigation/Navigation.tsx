import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <button>Главная</button>
            <button><a href="/assortment">Ассортимент</a></button>
            <button>Контакты</button>
        </div>
    );
};

export default Navigation;