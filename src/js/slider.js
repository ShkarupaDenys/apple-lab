import Glide from '@glidejs/glide'

const heroScreen = document.querySelector('.hero-screen__carousel');

const team = new Glide('.team__carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 20,
    breakpoints: {
        1024: {
            perView: 3
          },
          768: {
            perView: 2,
          }
    }
  })

  team.mount()

  const heroScreenGlide = new Glide(heroScreen, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
    breakpoints: {
        //1024: {
        //    perView: 3
        //  },
          //768: {
          //  gap: 80,
          //}
         //  768: {
        //    perView: 2,
        //  }
    }
  })

  console.log(heroScreen);

  if (heroScreen) {
    heroScreenGlide.mount()
  }
