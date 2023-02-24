// Custom scripts

// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode
      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active')
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'))
        parent.classList.add('accordion__item-active')
      }
    })
  })
}
accordion()

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav);

function getUsers() {
  let getUsers = document.querySelectorAll('.get__user');

  const remove = () => {
    getUsers.forEach(getUser => {
      getUser.classList.remove('active')
    });
  }

  getUsers.forEach(getUser => {
    getUser.addEventListener('click', () => {
      remove();
      getUser.classList.add('active')
    })
  });
}

getUsers()

//taimer

let inital_time = (22 * 60 * 60) + (30 * 60); // Устанавливаем таймер на 22 часа 30 минут

if (localStorage.getItem('keep-timer') != null) {
  inital_time = parseInt(localStorage.getItem('keep-timer'));
}

const update_timer = async () => {
  try {
    if (inital_time <= 0) return;
    inital_time = inital_time - 1;
    // Трансформируем секунды во все возможные значения
    let hours = Math.floor(inital_time / 60 / 60);
    let minutes = Math.floor(inital_time / 60) - (hours * 60);
    let seconds = inital_time - (minutes * 60) - (hours * 60 * 60);
    // Устанавливаем значения в нужные поля
    for (const el of document.querySelectorAll('.countdown-time.hours')) el.innerHTML = ('0' + hours).slice(-2);
    for (const el of document.querySelectorAll('.countdown-time.minutes')) el.innerHTML = ('0' + minutes).slice(-2);
    for (const el of document.querySelectorAll('.countdown-time.seconds')) el.innerHTML = ('0' + seconds).slice(-2);
    // Запоминаем новое значение таймера
    localStorage.setItem('keep-timer', String(inital_time));
    // Можно ещё сделать какое-то действие по окончанию таймера
    if (inital_time == 0) {
      // TO-DO
    }
  } catch (err) {
    console.log(err);
  }
};

setInterval(() => update_timer(), 1000);


