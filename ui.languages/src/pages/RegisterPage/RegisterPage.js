import Register from "../../components/Register/Register";
import style from './RegisterPage.module.css';

const RegisterPage = () => {

    return (
        <div className={style['register-page']}>
            <div className={style['cloud']}>
                <div className={style['branch']}>
                    <Register />
                </div>
            </div>
        </div>
    );

}
export default RegisterPage;