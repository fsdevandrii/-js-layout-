import { text } from 'express'

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
    active: 'false',
    info: 'База знань',
  },
  {
    active: 'true',
    info: 'Інформація',
  },
]

// --------------

export const createTAB = () => {
  const tab = createElement('div', 'tab')
  TAB_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
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
  POST_BUTTON.forEach((params) => {
    const header = createElement(
      'div',
      'post__header',
      params.title,
    )
    const post = createElement(
      'p',
      'post__info',
      params.text,
    )
    const button = createElement('button', 'button')

    div.insertAdjacentText('afterBegin', title)
    p.insertAdjacentText('beforeEnd', text)
  })
  return post
}

// const POST_VIEWED = []

// const POST_LIST = [
//   {
//     category: [
//       { text: 'Важливо', id: '1' },
//       { text: 'Нова', id: '2' },
//     ],
//     info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//     date: '25.01',
//     viewed: false,
//   },
//   {
//     category: [{ text: 'Нова', id: '2' }],
//     info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій',
//     date: '24.01',
//     viewed: true,
//   },
// ]

// export const createPost = () => {
//   const postList = createElement('main', 'post__list')

//   POST_LIST.forEach((postData) => {
//     const post = createElement(
//       'div',
//       postData.viewed
//         ? 'post button post---viewed'
//         : 'post button',
//     )

//     const postHeader = createElement('div', 'post__header')

//     //   ===

//     const categoryList = createElement(
//       'div',
//       'post__category-list',
//     )

//     postData.category.forEach((category) => {
//       const categorySpan = createElement(
//         'span',
//         `post__category post__category--${category.id}`,
//         category.text,
//       )
//       categoryList.append(categorySpan)
//     })
//     //   ===

//     const dateSpan = createElement(
//       'span',
//       'post__date',
//       postData.date,
//     )

//     // ===
//     postHeader.append(categoryList, dateSpan)

//     //   ===

//     const infoParagraph = createElement(
//       'p',
//       'post__info',
//       postData.info,
//     )
//     post.append(postHeader, infoParagraph)

//     //   ===
//     postList.append(post)
//   })
//   return postList
// }

// ========
// const post = createPost()
// page.append(post)
// ========

// const HEADER_BUTTON_LIST = [
//   {
//     with: 24,
//     height: 24,
//     src: '/svg/arrow_back.svg',
//   },
//   {
//     with: 24,
//     height: 24,
//     src: '/img/ava.png',
//   },
// ]

// ========

// export const createHeader = () => {
//   const header = createElement('header', 'header')
//   HEADER_BUTTON_LIST.forEach((params) => {
//     const button = createElement('button', 'button')
//     const img = createElement('img')
//     Object.entries(params).forEach(([key, value]) => {
//       img[key] = value
//     })
//     button.insertAdjacentElement('beforeend', img)
//     header.insertAdjacentElement('beforeend', button)
//   })
//   return header
// }

// ========
