const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const modalClasses = ['.balance-modal', '.payment-modal', '.data-modal'];

if (modalClasses.length) {
    modalClasses.forEach(cls => {
        const m = document.querySelector(`${cls}`);
        const mBg = document.querySelector(`${cls} .modal__bg`);
        const mOpen = document.querySelectorAll(`${cls}__open`);

        mOpen.forEach(el => {
            el.onclick = e => {
                e.preventDefault();
                document.querySelectorAll('.modal').forEach(data => {
                    data.classList.remove('active');
                })
                m.classList.add('active');
                bodyHidden();
            }
        })

        mBg.onclick = () => {
            m.classList.remove('active');
            bodyVisible();
        }
    })
}