import {
  createElement,
  createHeader,
  createTAB,
  createPostButton,
  createPost,
} from '../../script/layout'

const page = document.querySelector('.page')

// ===== Post

const post = createPost()

page.append(post)

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

// =====
