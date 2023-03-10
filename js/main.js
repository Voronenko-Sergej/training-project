'use strict';

window.addEventListener('DOMContentLoaded', function () {

    // Tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer 
    let dedlain = '2023-03-01';

    function getTimeRemelding(endtime) {
        let timeDifference = Date.parse(endtime) - Date.parse(Date());
        let day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        let seconds = Math.floor((timeDifference / 1000) % 60);

        if (timeDifference <= 0) {
            return {
                'total': dedlain,
                'days': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0
            };
        } else {
            return {
                'total': dedlain,
                'days': day,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selektor, endTime) {

        const timer = document.querySelector(selektor),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemelding(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock('.timer', dedlain);


    // ModalWindov



    function modal() {
        const btmOpenWindow = document.querySelectorAll('[data-modal]'),
            modalWindow = document.querySelector('.modal'),
            btmCloseModal = document.querySelector('[data-close]');

        function open() {
            modalWindow.classList.toggle('show');
            document.querySelector('body').style.overflow = 'hidden';
        }

        let close = function (itemWindow) {
            itemWindow.classList.remove('show');
            document.querySelector('body').style.overflow = '';
        };

        function OpenModal(btm,) {
            btm.forEach(item => {
                item.addEventListener('click', open);
            });
        }

        function closeModal(btm, itemWindow) {
            btm.addEventListener('click', (e) => {
                if (e.target === btm) {
                    close(itemWindow);
                }
            });
        }

        function closeModalKey() {
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
                    close(modalWindow);
                }
            });
        }

        const openModalEndTime = function (time) {
            setTimeout(open, time);
        };

        function openModalScroll() {
            const scrollHeight = document.documentElement.clientHeight + document.documentElement.scrollTop;
            const allHeight = document.documentElement.scrollHeight;
            if (allHeight <= scrollHeight) {
                openModalEndTime(2000);
                window.removeEventListener('scroll', openModalScroll);
            }
        }





        closeModal(btmCloseModal, modalWindow);
        closeModal(modalWindow, modalWindow);
        closeModalKey();
        OpenModal(btmOpenWindow, modalWindow);
        window.addEventListener('scroll', openModalScroll);
        openModalEndTime(6000);
    }

    modal();











});

