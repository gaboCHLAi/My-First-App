import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Swiper.scss";
 

import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
import Card, { SecondCard } from "../cards/Cards";

export default function Slider({ cards = [] }, cardClass) {
  return (
    <div className="container-fluid">
      <div className="FirstSlider row justify-content-start position-relative">
        <div  >
          <Swiper

            cardClass
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={4} // სლაიდებს შორის დაშორება პიქსელებში
            slidesPerView={3} // სამი სლაიდი ერთდროულად
            pagination={{ clickable: true }}
            breakpoints={{
              // Desktop/Large screens
              1024: {
                slidesPerView: 3, // 1 სლაიდი 1024px-ზე ზემოთ
              },
              // Tablet screens
              768: {
                slidesPerView: 2, // 2 სლაიდი 768px-ზე ზემოთ
              },
              // Mobile screens
              568: {
                slidesPerView: 2, // 2 სლაიდი 568px-ზე ზემოთ
              },
              480: {
                slidesPerView: 2, // 2 სლაიდი 568px-ზე ზემოთ
              },
              300: {
                slidesPerView: 1, // 2 სლაიდი 568px-ზე ზემოთ
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  title={card.title}
                  description={card.description}
                  img={require(`../../assets/images/${card.img}`)}
                  number={card.number}
                  NumberInPercent={card.percentage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export function SecondSlider({ cards = [] }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <Swiper
            className="SecondSlider"
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10} // სლაიდებს შორის დაშორება პიქსელებში
            slidesPerView={4} // სამი სლაიდი ერთდროულად
            pagination={{ clickable: true }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <SecondCard
                  title={card.title}
                  paragraph={card.paragraph}
                  name={card.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
