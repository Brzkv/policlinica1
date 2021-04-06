<template>
  <div id="services">
    <h1>Медицинские услуги</h1>
    <div>
      <div>Услуги врачей-специалистов</div>
      <p>
        Специалисты нашего медцентра помогут вам, поставят диагноз и вылечат
        все, что может вас тревожить. Обращайтесь за помощью, если вас что-то
        беспокоит. Записаться на первичный прием можно по телефону или через
        онлайн-форму на сайте.
      </p>
      <div ref="mySlider" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slideTitle">Невролог</div>
            <div class="slideText">
              Невролог – врач, специализирующийся на диагностике, лечении и
              профилактике заболеваний нервной системы: ее центральных отделов
              (головного и спинного мозга) и периферических структур,
              представленных нервами, нервными узлами и нервными сплетениями.
            </div>
            <div class="slideButtons">
              <button>Подробнее</button>
              <button>Записаться</button>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slideTitle">Кардиолог</div>
            <div class="slideText">
              Врач, в компетенцию которого входят диагностика, лечение и
              профилактика заболеваний сердца и сосудов, а также реабилитация
              пациентов после сердечно-сосудистых происшествий.
            </div>
            <div class="slideButtons">
              <button>Подробнее</button>
              <button>Записаться</button>
            </div>
          </div>
          <div class="swiper-slide">
            <h3>Кардиолог</h3>
            Кардиолог – это врач, в компетенцию которого входят диагностика,
            лечение и профилактика заболеваний сердца и сосудов, а также
            реабилитация пациентов после сердечно-сосудистых происшествий.
          </div>
          <div class="swiper-slide">Хирург</div>
          <div class="swiper-slide">Стоматолог</div>
          <div class="swiper-slide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            temporibus inventore cum quia nam! Cumque cum praesentium facilis
            optio! Nostrum, sit. Officiis molestiae et sed ipsa laboriosam iusto
            nesciunt veniam.
          </div>
          <div class="swiper-slide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            temporibus inventore cum quia nam! Cumque cum praesentium facilis
            optio! Nostrum, sit. Officiis molestiae et sed ipsa laboriosam iusto
            nesciunt veniam.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
  data() {
    return {
      slider: null,
    };
  },
  methods: {
    next() {
      this.slider.slideNext();
    },
    prev() {
      this.slider.slidePrev();
    },
  },
  mounted() {
    this.slider = new Swiper(this.$refs.mySlider, {
      speed: 900,
      slidesPerView: 2.25,
      autoplay: false,
      // direction: 'vertical',
      mousewheel: true,
      slideToClickedSlide: true,
      // freeMode: true,
      // centeredSlides: true,
      // centeredSlidesBounds: true,
      spaceBetween: 12,
      // slidesOffsetAfter: 300,
      // slidesOffsetBefore: 300
      // slideToClickedSlide: true
      // effect: 'fade',
      // pagination: { el: '.swiper-pagination', type: 'fraction',  },
      breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        1024: {
          slidesPerView: 2.25,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
$green: rgba(39, 166, 99, 1);

.swiper-container {
  width: 100%;
  /* height: 500px; */
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  background: white;
  border-radius: 32px;
}

.swiper-slide {
  background: rgba(39, 166, 99, 0.16);
  padding: 24px;
  border-radius: 24px;
  box-sizing: border-box;
  opacity: 0.5;
  min-height: 300px;
  /* width: 100%; */
  /* transform: scale(0.9); */
  /* filter: blur(15px); */
  transition: all 900ms ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
.swiper-slide.swiper-slide-active {
  opacity: 1;
  background: $green;
  color: white;
  /* filter: blur(0px); */
  /* transform: scale(1); */
}

.slideTitle {
  font-size: 2rem;
}
.slideText {
  font-size: 1rem;
}

.slideButtons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1rem;
}

.swiper-slide button {
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  margin-top: 1rem;
  font-size: 1rem;
}
.swiper-slide button:last-child {
  color: #111;
  background: white;
}
</style>
