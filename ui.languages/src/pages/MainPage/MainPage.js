import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import style from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={style['main-page']}>
            <div className={style['branch']}>
                <Header />
                <MainContent />
            </div>
        </div>
    );

}
export default MainPage;