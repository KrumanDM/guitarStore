import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import s from './MarketPage.module.css';
import { Header } from '../Header/Header/Header';
import Footer from 'pages/Footer/Footer';
import { RootState } from 'store/store';

const MarketPage = () => {
  const { categoryName = '' } = useParams<{ categoryName: string }>();
  const category = categoryName as keyof RootState['market'];
  const items = useSelector((state: RootState) => state.market[category] || []);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const usePagination = items.length > 40;

  // Сброс состояния при смене категории
  useEffect(() => {
    setCurrentPage(1);
    setVisibleCount(itemsPerPage);
  }, [categoryName]);

  const currentItems = usePagination
    ? items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : items.slice(0, visibleCount);

  const title =
    categoryName.length > 0
      ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
      : 'Категория не найдена';

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  return (
    <>
      <Header />
      <div className={s.market}>
        <h1 id={`${category}-title`} className={s.market_mainTitle}>
          {title}
        </h1>

        <ul
          role="list"
          aria-labelledby={`${category}-title`}
          className={s.market_list}
        >
          {currentItems.map((item) => (
            <li key={item.id} role="listitem" className={s.market_item}>
              <img
                src={item.image}
                alt={`${item.title} — ${item.brand}`}
                className={s.market_image}
              />
              <div className={s.market_header}>
                <img
                  src={item.logo}
                  alt={`${item.brand} logo`}
                  className={s.market_logo}
                />
                <span className={s.market_title}>{item.title}</span>
              </div>
              <span className={s.market_brand}>{item.brand}</span> —{' '}
              <span className={s.market_price}>${item.price}</span>
            </li>
          ))}
        </ul>

        {/* Управление выводом */}
        {usePagination ? (
          <div className={s.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? s.activePage : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        ) : (
          visibleCount < items.length && (
            <div className={s.showMoreWrapper}>
              <button onClick={handleShowMore} className={s.showMoreBtn}>
                Показать ещё
              </button>
            </div>
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default MarketPage;
