import Glide from '@glidejs/glide'

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
