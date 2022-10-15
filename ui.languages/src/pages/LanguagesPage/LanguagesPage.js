import Languages from "../../components/Languages/Languages";
import style from './LanguagesPage.module.css';

const LanguagesPage = () => {
    return (
        <div className={style['lang-page']}>
            <div className={style['cloud']}>
                <div className={style['branch']}>
                    <Languages />
                </div>
            </div>
        </div>
    );
}
export default LanguagesPage;  