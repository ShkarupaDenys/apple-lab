import Glide from '@glidejs/glide'

const heroScreen = document.querySelector('.hero-screen__carousel');
const contactsGeneralOne = document.querySelector('.contacts-general__carousel-one');
const contactsGeneralTwo = document.querySelector('.contacts-general__carousel-two');
const contactsGeneralThree = document.querySelector('.contacts-general__carousel-three');
const contactsGeneralFour = document.querySelector('.contacts-general__carousel-four');
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

  const contactsGeneralGlideOne = new Glide(contactsGeneralOne, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
  })

  if (contactsGeneralOne) {
    contactsGeneralGlideOne.mount()
  }

  const contactsGeneralGlideTwo = new Glide(contactsGeneralTwo, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
  })

  if (contactsGeneralTwo) {
    contactsGeneralGlideTwo.mount()
  }


  const contactsGeneralGlideThree = new Glide(contactsGeneralThree, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
  })

  if (contactsGeneralThree) {
    contactsGeneralGlideThree.mount()
  }

  const contactsGeneralGlideFour = new Glide(contactsGeneralFour, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 40,
  })

  if (contactsGeneralFour) {
    contactsGeneralGlideFour.mount()
  }
