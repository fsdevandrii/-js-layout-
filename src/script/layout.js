// import { text } from 'express'

export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

// =================================
const HEADER_BUTTON_LIST = [
  {
    with: 24,
    height: 24,
    src: '/svg/arrow_back.svg',
  },
  {
    with: 24,
    height: 24,
    src: '/img/ava.png',
  },
]

// -----------------

export const createHeader = () => {
  const header = createElement('header', 'header')
  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')
    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    button.insertAdjacentElement('beforeend', img)
    header.insertAdjacentElement('beforeend', button)
  })
  return header
}

// =================================

const TAB_BUTTON_LIST = [
  {
    active: false,
    info: 'База знань',
  },
  {
    active: true,
    info: 'Інформація',
  },
]

// --------------

export const createTAB = () => {
  const tab = createElement('div', 'tab')
  tab.classList.add('button-tab')
  TAB_BUTTON_LIST.forEach((params) => {
    const button = createElement(
      'div',
      params.active
        ? 'button button-tab tab-active'
        : 'button button-tab',
    )
    button.innerText = params.info
    tab.insertAdjacentElement('beforeend', button)
  })
  return tab
}

// =================================

const IMG_POST_BUTTON = [
  {
    with: '100%',
    src: '/img/comm.png',
  },
]

export const createPostButton = () => {
  const post__img = createElement('div', 'post__img')
  IMG_POST_BUTTON.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')
    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    button.insertAdjacentElement('beforeend', img)
    post__img.insertAdjacentElement('beforeend', button)
  })
  return post__img
}

// =================================

const POST_BUTTON = [
  {
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
  },
]

export const createPost = () => {
  const post = createElement('div', 'post')
  post.classList.add('button')
  POST_BUTTON.forEach((params) => {
    const header = createElement(
      'div',
      'post__header',
      params.title,
    )
    const param = createElement(
      'p',
      'post__info',
      params.text,
    )

    post.insertAdjacentElement('afterBegin', header)
    post.insertAdjacentElement('beforeEnd', param)
  })
  return post
}

// ====================
const FINAL_BUTTON = [
  {
    text: 'Перейти до ком"юніті у Телеграм',
  },
]

export const createFinalButton = () => {
  const button = createElement('button', 'button')
  button.classList.add('button-trans')
  FINAL_BUTTON.forEach((params) => {
    button.innerText = params.text
  })
  return button
}

// ========
