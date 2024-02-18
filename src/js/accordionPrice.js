const characteristicsListElem = document.querySelector('.price__accordion');
const characteristicsItemElems = document.querySelectorAll(
  '.price__accordion .accordion__item'
);

characteristicsItemElems.forEach((elem) => {
  if (elem.children[1].classList.contains('active')) {
    elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
  }
});

const open = (button, dropDown) => {
  closeAllDrops(button, dropDown);
  dropDown.style.height = dropDown.scrollHeight + 'px';
  button.classList.add('active');
  button.parentElement.classList.add('active');
  dropDown.classList.add('active');
};

const close = (button, dropDown) => {
  button.classList.remove('active');
  button.parentElement.classList.remove('active');
  dropDown.classList.remove('active');
  dropDown.style.height = '';
};

const closeAllDrops = (button, dropDown) => {
  characteristicsItemElems.forEach((elem) => {
    if (elem.children[0] !== button && elem.children[1] !== dropDown) {
      close(elem.children[0], elem.children[1]);
    }
  });
};

if (characteristicsListElem) {
  characteristicsListElem.addEventListener('click', (event) => {
    const target = event.target;
    const head = target.closest('.accordion__head');

    if (!head) {
      return;
    }

    if (head.classList.contains('accordion__head')) {
      const parent = target.closest('.accordion__item');
      const description = parent.querySelector('.accordion__content');
      description.classList.contains('active')
        ? close(head, description)
        : open(head, description);
    }
  });
}
