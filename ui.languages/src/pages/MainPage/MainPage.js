import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import style from './MainPage.module.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className={style['main-page']}>
            <div className={style['branch']}>
                <Header />
                <MainContent />
                <Link to={'/languages'}>languages</Link>
            </div>
        </div>
    );

}
export default MainPage;