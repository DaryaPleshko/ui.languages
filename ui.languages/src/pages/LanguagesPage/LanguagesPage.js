import Languages from "../../components/Languages/Languages";
import InpHistory from "../../components/InpHistory/InpHistory";
import { Link } from 'react-router-dom';
import style from './LanguagesPage.module.css';

const LanguagesPage = () => {
    return (
        <div className={style['lang-page']}>
            <div className={style['forest']}>
                <div className={style['wrapper']}>
                    <h1 className={style['logo']}>MNELA</h1>
                    <div className={style['flex']}>
                        <Link to={'/about'}><p className={style['header-text']}>About Us</p></Link>
                        <Link to={'/using'}><p className={style['header-text']}>Terms Of Use</p></Link>
                        <Link to={'/'}><div className={style['signup-btn']}>Sign Out</div></Link>
                    </div>
                </div>
                <div className={style['flex-page']}>
                    <Languages />
                    <InpHistory />
                </div>
            </div>
        </div>
    );
}
export default LanguagesPage;  