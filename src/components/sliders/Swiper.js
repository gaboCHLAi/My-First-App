import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "./Swiper.scss";

import { Navigation, Pagination, Autoplay, Grid } from "swiper";
import Card, { SecondCard, ThirdCard } from "../cards/Cards";

export default function Slider({ cards = [] }, cardClass) {
  return (
    <div className="container-fluid">
      <div className="FirstSlider row justify-content-start position-relative">
        <div>
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
                slidesPerView: 1, // 2 სლაიდი 568px-ზე ზემოთ
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
      <div className="row  d-flex justify-content-center">
        <div className="col-12  m-auto ">
          <Swiper
            className="SecondSlider "
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10} // სლაიდებს შორის დაშორება პიქსელებში
            slidesPerView={4} // სამი სლაიდი ერთდროულად
            pagination={{
              clickable: true, // შესაძლებლობა დააჭიროთ ბულეტებს 
            }}
            breakpoints={{
              // Desktop/Large screens
              1024: {
                slidesPerView: 4, // 1 სლაიდი 1024px-ზე ზემოთ
              },
              // Tablet screens
              768: {
                slidesPerView: 3, // 2 სლაიდი 768px-ზე ზემოთ
              },
              // Mobile screens
              568: {
                slidesPerView:2, // 2 სლაიდი 568px-ზე ზემოთ
              },
              480: {
                slidesPerView: 1, // 2 სლაიდი 568px-ზე ზემოთ
              },
              300: {
                slidesPerView: 1, // 2 სლაიდი 568px-ზე ზემოთ
              },
            }}
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

export function ThirdSlider({ cards = [] }) {
  return (
    <div>
      <Swiper
  className="thirdSlider"
  loop={true} // ლუპის რეჟიმი
  autoplay={{ delay: 3000 }}
  modules={[Pagination, Autoplay, Grid]}
  spaceBetween={10} // კარდებს შორის სივრცე
  slidesPerView={2} // სლაიდებს შორის ხედვა
  grid={{ rows: 2, fill: "row" }} // 2x2 განლაგება
  pagination={{
    clickable: true,
    type: "bullets",  // ბულეტების ტიპი
    dynamicBullets: true, // დინამიური ბულეტები
  }}
  loopAdditionalSlides={1} // დამატებითი სლაიდები, რომ ლუპი სწორად მუშაობდეს
>
  {cards.map((card, index) => (
    <SwiperSlide key={index}>
      <ThirdCard
        img={require(`../../assets/images/${card.img}`)}
        name={card.name}
        description={card.description}
      />
    </SwiperSlide>
  ))}
</Swiper>
  
    </div>
  );
}
