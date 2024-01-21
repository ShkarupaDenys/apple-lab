import Glide from '@glidejs/glide'

const heroScreen = document.querySelector('.hero-screen__carousel');
const contactsGeneral = document.querySelector('.contacts-general__carousel');
const team = document.querySelector('.team__carousel');

const teamGlide = new Glide(team, {
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

  if (team) {
    teamGlide.mount()
  }

  const heroScreenGlide = new Glide(heroScreen, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
    breakpoints: {
    }
  })

  if (heroScreen) {
    heroScreenGlide.mount()
  }

  const contactsGeneralGlide = new Glide(contactsGeneral, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
  })

  if (contactsGeneral) {
    contactsGeneralGlide.mount()
  }
