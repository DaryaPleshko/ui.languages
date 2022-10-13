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
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );

}
export default MainPage;