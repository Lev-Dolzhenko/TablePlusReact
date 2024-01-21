import './Header.css'
import logotype from './../../content/Header/logotype.svg'
import catalog from './../../content/Header/catalogIcon.svg'
import bag from './../../content/Header/bagIcon.svg';

function Header() {
    return (
        <header className="header">
            <div className="container--header">
                <div className="header__grid">
                    <div className="header__grid__logotype">
                        <img src={logotype} alt="tablePlus" />
                    </div>
                    <div className="header__grid__catalog">
                        <button className='button button--catalog'>
                            <img src={catalog} alt="catalog" />
                            Каталог
                        </button>
                    </div>
                    <div className="header__grid__nav">
                        <nav>
                            <ul className="nav__list">
                                <li className="nav__list__item"><a className='nav__list__link' href="#!">Доставка</a></li>
                                <li className="nav__list__item"><a className='nav__list__link' href="#!">Способы оплаты</a></li>
                                <li className="nav__list__item"><a className='nav__list__link' href="#!">Контакты</a></li>
                                <li className="nav__list__item"><a className='nav__list__link' href="#!">Гарантии и возврат</a></li>
                                <li className="nav__list__item"><a className='nav__list__link' href="#!">Политика конфиденциальности</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__grid__bag">
                        <button className='button button--bag'>
                            <img src={bag} alt="" />
                            Корзина
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;