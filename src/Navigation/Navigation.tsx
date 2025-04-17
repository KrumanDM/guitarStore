import React from 'react';

const Navigation = () => {
    return (
        <div className="navigation">
            <button>Главная</button>
            <button><a href="/assortment">Ассортимент</a></button>
            <button>Контакты</button>
        </div>
    );
};

export default Navigation;