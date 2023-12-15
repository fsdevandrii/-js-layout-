import {
  createElement,
  createHeader,
  createPost,
  createTAB,
} from '../../script/layout'

const page = document.querySelector('.page')

// =====

const header = createHeader()

page.append(header)

// =====

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

// =====
const tab = createTAB()

page.append(tab)
// =====

const post = createPost()

page.append(post)
