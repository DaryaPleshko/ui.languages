import Auth from "../../components/Auth/Auth";
import style from './AuthPage.module.css';

const AuthPage = () => {
    return (
        <div className={style['auth-page']}>
            <div className={style['cloud']}>
                <div className={style['branch']}>
                    <Auth />
                </div>
            </div>
        </div>
    );

}
export default AuthPage;  