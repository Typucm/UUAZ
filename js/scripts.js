const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
//для мобилок
if (isMobile.any()) {
    document.body.classList.add('touch');
    //////////////////////////////  Стрелки подменю  ////////////////////////////////////////
    let inner = document.querySelectorAll('li ul');
    inner.forEach(elem => {
        let arrowBox = document.createElement('div');
        arrowBox.classList.add('box__arrow');
        elem.parentElement.insertBefore(arrowBox, elem);
    });
    let arrowBox = document.querySelectorAll('.box__arrow');
    arrowBox.forEach(elem => {
        let arrow = document.createElement('span');
        arrow.classList.add('menu__arrow');
        elem.appendChild(arrow);
    });
    ////////////////////////////////  Событие клика по стрекле раскрывает подменю   /////////////////////////////////////

    arrowBox.forEach(elem => {
        elem.addEventListener('click', () => {
            let i = 0;
            let links = document.querySelectorAll('.menu__link');
            if (!elem.firstChild.classList.contains('menu__arrow-open')) {
                elem.firstChild.classList.add('menu__arrow-open');
                let parentElement = elem.parentNode;
                let childElement = parentElement.querySelector('.sub-menu__list');
                childElement.classList.add('sub-menu__list-open');
            }
            else
                if (elem.firstChild.classList.contains('menu__arrow-open')) {
                    elem.firstChild.classList.remove('menu__arrow-open');
                    let parentElement = elem.parentNode;
                    let childElement = parentElement.querySelector('.sub-menu__list');
                    childElement.classList.remove('sub-menu__list-open');
                    let childArrow = parentElement.querySelectorAll('.menu__arrow');
                    childArrow.forEach(element => {
                        if (element.classList.contains('menu__arrow-open')) {
                            element.classList.remove('menu__arrow-open');
                        }
                    });
                    let child = parentElement.querySelectorAll('.sub-menu__list');
                    child.forEach(elem => {
                        if (elem.classList.contains('sub-menu__list-open')) {
                            elem.classList.remove('sub-menu__list-open');
                        }
                    });
                }
            links.forEach(element => {
                if (!element.parentElement.classList.contains('sub-menu__list')) {
                    let sub = element.querySelector('.sub-menu__list-open');
                    if (sub) {
                        i = i + 1;
                        if (i > 1) {
                            let submenu = document.querySelectorAll('.sub-menu__list-open');
                            let arrow = document.querySelectorAll('.menu__arrow');
                            submenu.forEach(element => {
                                element.classList.remove('sub-menu__list-open');
                                arrow.forEach(element => {
                                    element.classList.remove('menu__arrow-open');
                                });
                                size = 0;
                            });
                            if (!elem.firstChild.classList.contains('menu__arrow-open')) {
                                elem.firstChild.classList.add('menu__arrow-open');
                                let parentElement = elem.parentNode;
                                let childElement = parentElement.querySelector('.sub-menu__list');
                                childElement.classList.add('sub-menu__list-open');
                            }
                        }
                    }
                }
            });

        });
    });
    ////////////////////////////////  Событие клика по меню бургер раскрывает и закрывает меню лист   /////////////////////////////////////

    document.addEventListener('click', openMenu);
    let menuBurger = document.querySelector('.menu__burger');
    menuList = document.querySelector('.menu__list');
    function openMenu(event) {
        if (event.target.closest('.menu__burger')) {
            if (!menuBurger.classList.contains("menu__burger-active")) {
                menuBurger.classList.add('menu__burger-active');
                menuList.classList.add('menu__list-active');
                document.body.classList.add('scroll__lock');
            }
            else
                if (menuBurger.classList.contains("menu__burger-active")) {
                    menuBurger.classList.remove('menu__burger-active');
                    menuList.classList.remove('menu__list-active');
                    document.body.classList.remove('scroll__lock');
                    let childMenu = document.querySelectorAll('.sub-menu__list-open');
                    let arrow = document.querySelectorAll('.menu__arrow');
                    if (arrow) {
                        arrow.forEach(element => {
                            element.classList.remove('menu__arrow-open');
                        });
                    }
                    if (childMenu) {
                        childMenu.forEach(el => {
                            el.classList.remove('sub-menu__list-open');
                        });
                    }
                }
        }
    }
}
//для ПК
else {
    document.body.classList.add('pc');
    let clientWidth = document.documentElement.clientWidth;
    if (clientWidth <= 1280) {
        let inner = document.querySelectorAll('li ul');
        inner.forEach(elem => {
            let arrowBox = document.createElement('div');
            arrowBox.classList.add('box__arrow');
            elem.parentElement.insertBefore(arrowBox, elem);
        });
        let arrowBox = document.querySelectorAll('.box__arrow');
        arrowBox.forEach(elem => {
            let arrow = document.createElement('span');
            arrow.classList.add('menu__arrow');
            elem.appendChild(arrow);
        });
        arrowBox.forEach(elem => {
            elem.addEventListener('click', () => {
                let i = 0;
                let links = document.querySelectorAll('.menu__link');
                if (!elem.firstChild.classList.contains('menu__arrow-open')) {
                    elem.firstChild.classList.add('menu__arrow-open');
                    let parentElement = elem.parentNode;
                    let childElement = parentElement.querySelector('.sub-menu__list');
                    childElement.classList.add('sub-menu__list-open');
                }
                else
                    if (elem.firstChild.classList.contains('menu__arrow-open')) {
                        elem.firstChild.classList.remove('menu__arrow-open');
                        let parentElement = elem.parentNode;
                        let childElement = parentElement.querySelector('.sub-menu__list');
                        childElement.classList.remove('sub-menu__list-open');
                        let childArrow = parentElement.querySelectorAll('.menu__arrow');
                        childArrow.forEach(element => {
                            if (element.classList.contains('menu__arrow-open')) {
                                element.classList.remove('menu__arrow-open');
                            }
                        });
                        let child = parentElement.querySelectorAll('.sub-menu__list');
                        child.forEach(elem => {
                            if (elem.classList.contains('sub-menu__list-open')) {
                                elem.classList.remove('sub-menu__list-open');
                            }
                        });
                    }
                links.forEach(element => {
                    if (!element.parentElement.classList.contains('sub-menu__list')) {
                        let sub = element.querySelector('.sub-menu__list-open');
                        if (sub) {
                            i = i + 1;
                            if (i > 1) {
                                let submenu = document.querySelectorAll('.sub-menu__list-open');
                                let arrow = document.querySelectorAll('.menu__arrow');
                                submenu.forEach(element => {
                                    element.classList.remove('sub-menu__list-open');
                                    arrow.forEach(element => {
                                        element.classList.remove('menu__arrow-open');
                                    });
                                    size = 0;
                                });
                                if (!elem.firstChild.classList.contains('menu__arrow-open')) {
                                    elem.firstChild.classList.add('menu__arrow-open');
                                    let parentElement = elem.parentNode;
                                    let childElement = parentElement.querySelector('.sub-menu__list');
                                    childElement.classList.add('sub-menu__list-open');
                                }
                            }
                        }
                    }
                });
            });
        });

    }
    else {
        let linkCollection = document.getElementsByClassName('menu__link');
        for (let i = 0; i < linkCollection.length; i++) {
            linkCollection[i].addEventListener('mouseenter', showSub, false);
            linkCollection[i].addEventListener('mouseleave', hideSub, false);
        }
        function showSub() {
            if (this.children.length > 1) {
                this.children[1].classList.add('sub-menu__list-open');
            }
            else {
                return false;
            }
        }
        function hideSub() {
            if (this.children.length > 1) {
                this.children[1].classList.remove('sub-menu__list-open');
            }
            else {
                return false;
            }
        }
    }
    document.addEventListener('click', openMenu);
    let menuBurger = document.querySelector('.menu__burger');
    menuList = document.querySelector('.menu__list');
    function openMenu(event) {
        if (event.target.closest('.menu__burger')) {
            if (!menuBurger.classList.contains("menu__burger-active")) {
                menuBurger.classList.add('menu__burger-active');
                menuList.classList.add('menu__list-active');
                document.body.classList.add('scroll__lock');
            }
            else
                if (menuBurger.classList.contains("menu__burger-active")) {
                    menuBurger.classList.remove('menu__burger-active');
                    menuList.classList.remove('menu__list-active');
                    document.body.classList.remove('scroll__lock');
                    let childMenu = document.querySelectorAll('.sub-menu__list-open');
                    let arrow = document.querySelectorAll('.menu__arrow');
                    if (arrow) {
                        arrow.forEach(element => {
                            element.classList.remove('menu__arrow-open');
                        });
                    }
                    if (childMenu) {
                        childMenu.forEach(el => {
                            el.classList.remove('sub-menu__list-open');
                        });
                    }
                }
        }
    }

    let logo = document.querySelectorAll('#logo__svg');
    let linkUUAZ = document.querySelectorAll('.link__UUAZ');
    logo.forEach(element => {
        element.addEventListener('mouseenter', () => {
            linkUUAZ.forEach(element => {
                element.classList.add('logo__hover');
            });
            element.classList.add('logo__svg');
        });
        element.addEventListener('mouseleave', () => {
            linkUUAZ.forEach(element => {
                element.classList.remove('logo__hover');
            });
            element.classList.remove('logo__svg');
        });
    });
    linkUUAZ.forEach(element => {
        element.addEventListener('mouseenter', () => {
            logo.forEach(element => {
                element.classList.add('logo__svg');
            });
            element.classList.add('logo__hover');
        });
        element.addEventListener('mouseleave', () => {
            logo.forEach(element => {
                element.classList.remove('logo__svg');
            });
            element.classList.remove('logo__hover');
        });
    });
}
// отключение zoom через скролл (в том числе трекападами в macOS)
document.addEventListener('mousewheel', function (e) {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    e.stopImmediatePropagation();
}, { passive: false });

// отключение zoom прикосновениями (в том числе трекападами и т.п.) в Safari и iOS
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
}, { passive: false });

// отключение zoom через клавиатуру (ctrl + "+", ctrl + "-")
// кнопки браузера для управления zoom отключены не будут
document.addEventListener('keydown', function (e) {
    if (!e.ctrlKey && !e.metaKey) return;
    if (e.keyCode != 189 && e.keyCode != 187) return;

    e.preventDefault();
    e.stopImmediatePropagation();
}, { passive: false });
// document.addEventListener('DOMContentLoaded', function () {
//     const slider = new ChiefSlider('.slider', {
//         loop: true,
//         autoplay: true,
//         interval: 7000,
//     });
// });
let arrowDown = document.querySelector('.arrow');
arrowDown.addEventListener('click', scrollDown);
function scrollDown(e){
    e.preventDefault();
    let heightWindow = window.innerHeight;
    window.scrollTo({
        top: heightWindow, 
        behavior: 'smooth'
    });
}
