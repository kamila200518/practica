import style from './FadeSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function FadeSlider() {
    {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
        return (
            <>
                <div className={style.t}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=b4b245d9623e30445ddec343b53e022c_l-5235360-images-thumbs&n=13' />
                            </div>
                            <div className={style.item}>
                                <img src='https://i.pinimg.com/originals/9a/c9/14/9ac91429547d5f60d78b699af0881bf7.png' />
                            </div>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=0284d133dee569c6126885eb12f2d2fd81d9e3c1-8350343-images-thumbs&n=13' />
                            </div>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=e36dc31795971e379e32467e2b2b21e01619f3e1-9181356-images-thumbs&n=13' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>

        );
    }
}
