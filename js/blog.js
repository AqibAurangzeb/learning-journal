import { posts } from './data.js'

const postsGridRecentPosts = document.getElementById('posts-grid-recent-posts')

function renderRecentPosts() {
  let postGridRecentPostsDom = ''

  for (let i = 0; i < 3; i++) {
    const post = posts[i]
    postGridRecentPostsDom += `
    <div class="posts-card">
      <img src="${post.imgPath}" alt="${post.imgAlt}">
      <p class="posts-card-date">${post.createdDate}</p>
      <h2 class="posts-card-title">${post.title}</h2>
      <p class="posts-card-description">${post.description}</p>
    </div>    
    `
  }

  postsGridRecentPosts.innerHTML = postGridRecentPostsDom
}

renderRecentPosts()