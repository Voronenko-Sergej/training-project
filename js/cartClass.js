'use strict';

class MenuCart {
    constructor(src, alt, title, description, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.price = price;
        this.parentSelector = document.querySelector(parentSelector);
        this.curs = 41;
        this.classes = classes;
        this.converUAN();
    }

    converUAN() {
        this.price = this.price * this.curs;
    }

    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            element.classList.add('menu__item');
        } else {
            this.classes.forEach(item => element.classList.add(item));
        }
        element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;
        this.parentSelector.append(element);

    }
}

new MenuCart(
    '"img/tabs/vegy.jpg"',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    10,
    ".menu .container",
    'menu__item',
).render();

new MenuCart(
    '"img/tabs/elite.jpg"',
    'elite',
    'Меню “Премиум"',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без походав ресторан!',
    15,
    ".menu .container",
    'menu__item'
).render();

new MenuCart(
    '"img/tabs/post.jpg"',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
    9,
    ".menu .container",
    'menu__item'
).render();



