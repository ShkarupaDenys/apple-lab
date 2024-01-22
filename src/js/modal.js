const repairModal = document.querySelector('.modal.modal-repair');
const repairBtns = document.querySelectorAll('#button-repair');
const repairModalBg = document.querySelector('.modal-repair .modal__bg');
const closeBtnRepair = document.querySelector('#close-modal-repair');
const closeRepairModal = () => repairModal.classList.remove('open');

if (repairBtns.length) {
    repairBtns.forEach(item => {
        item.addEventListener('click', () => {
            repairModal.classList.add('open');
        })
    })
}

if (closeBtnRepair) {
    closeBtnRepair.addEventListener('click', closeRepairModal);
    repairModalBg.addEventListener('click', closeRepairModal);
}


const iPadModal = document.querySelector('.modal.modal-ipad-model');
const iPadBtn = document.querySelector('#button-ipad-model');
const iPadModalBg = document.querySelector('.modal-ipad-model .modal__bg');
const closeBtniPad = document.querySelector('#close-modal-ipad-model');
const closeiPadModal = () => iPadModal.classList.remove('open');

if (iPadBtn) {
    iPadBtn.addEventListener('click', () => {
        iPadModal.classList.add('open');
    })
}

if (closeBtniPad) {
    closeBtniPad.addEventListener('click', closeiPadModal);
    iPadModalBg.addEventListener('click', closeiPadModal);
}
