import { posts } from './data.js'

const postsGrid = document.getElementById('posts-grid')

function renderPosts() {
  let postsGridDom = ''

  posts.forEach(function(post) {
    postsGridDom += `
    <div class="posts-card">
      <img src="${post.imgPath}" alt="${post.imgAlt}">
      <p class="posts-card-date">${post.createdDate}</p>
      <h2 class="posts-card-title">${post.title}</h2>
      <p class="posts-card-description">${post.description}</p>
    </div>    
    `
  })


  postsGrid.innerHTML = postsGridDom
}

renderPosts()