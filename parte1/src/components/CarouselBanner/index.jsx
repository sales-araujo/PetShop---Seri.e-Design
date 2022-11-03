import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImagesBanners } from '../../resources/ImagesBanners.jsx'
import { Arrows } from "./Arrows";
import departament01 from '.././../assets/images/departament-01.png'
import departament02 from '.././../assets/images/departament-02.png'
import departament03 from '.././../assets/images/departament-03.png'
import './styles.css'

export function CarouselBanner(){

  const slickConfigs = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <Arrows type="prev"/>,
    nextArrow: <Arrows type="next"/>
  };

  return (
    <section className='sliderBannerContainer'>
      <Slider
        {...slickConfigs}
        className='sliderBannerWrapper'
      > 
        {
          ImagesBanners.map((item, index) => {

            return (
              <div key={ index } className='wrapperImagePet'>
                <img src={item.image} alt='Banner'/>
              </div>
            )
          })
        }
      </Slider>
      <div className="containerDepartamentProduct">
        <a href="#">
          <img src={departament01} alt="Banner Departamento" />
        </a>
        <a href="#">
          <img src={departament02} alt="Banner Departamento" />
        </a>
        <a href="#">
          <img src={departament03} alt="Banner Departamento" />
        </a>
      </div>
    </section>
  )
}