import AboutUs from "../../components/AboutUs/AboutUs";
import style from './AboutUsPage.module.css';



const AboutUsPage = () => {
    return (
        <div className={style['about-us-page']}>
            <div className={style['branch']}>
                <AboutUs />
            </div>
        </div>
    );

}
export default AboutUsPage;