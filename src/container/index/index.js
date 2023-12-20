import {
  createElement,
  createHeader,
  createTAB,
  createPostButton,
  createPost,
  createFinalButton,
} from '../../script/layout'

const page = document.querySelector('.page')

// ===== кнопки Хедера

const header = createHeader()
page.append(header)

// ===== Заголовок H1

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

// ===== кнопки Табів
const tab = createTAB()
page.append(tab)

// ===== кнопка Баанер

const post__img = createPostButton()
page.append(post__img)

// ===== Post

const post = createPost()

page.append(post)

// ===== кнопк FinalButton
const button = createFinalButton()
page.append(button)
