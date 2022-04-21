import {createPost, getAllPost, logout} from '/firebase.js';
export default function Feed() {
  const feed = document.createElement("div");
  feed.classList.add("feed-post")
  feed.innerHTML = `  
      
      <div class="menu">
        <img id="home-btn" class="home-btn" alt="menu home" src="./img/home.png">
        <img id="perfil-btn" class="perfil-btn" alt="menu perfil" src="./img/perfil.png">
        <img id="notification-btn" class="notification-btn" alt="menu notification" src="./img/notification.png">
        <img id="logout-btn" class="logout-btn" alt="menu logout" src="./img/logout.png">
      </div>

      <img id="add-post" class="add-post" alt="adicionar post" src="./img/add.png">
      
      <section id="post" class="post">
        <div class="post-container">
          <img src="./img/close.png" alt="Fechar Post" id="close-post" class="close-post">
          <textarea class="post-textarea" id="post-textarea" rows="5" cols="35" maxlength="180" placeholder="Fale mais sobre seus investimentos."></textarea>
          <button type="submit" id="post-btn" class="post-btn">Postar</button>
        </div>
      </section>

      <section class="post-feed">
        <ul id="container-post"></ul>
      </section>

    `;

    const addPost = feed.querySelector('#add-post');
    const homeBtn = feed.querySelector('#home-btn');
    const modalPost = feed.querySelector('#post');
    const postBtn = feed.querySelector('#post-btn');
    const closePost = feed.querySelector('#close-post');
    const postFeed = feed.querySelector('#post-textarea');
    const postList = feed.querySelector('#container-post');
    const logoutBtn = feed.querySelector('#logout-btn');

    getAllPost().then(post => {
      const postCreate = post.map(post => `
      <li>
        <div class='ide'> 
          <p class='name-user'> ${post.displayName} </p>
          <p class='data-post'> ${post.data} </p>
        </div>
        <div class='text-post'>
          <p class='post-feed'> ${post.post} </p>
        </div>
      </li>
    
      `).join('')
      postList.innerHTML = postCreate;
    })

    addPost.onclick = function() {
        modalPost.style.display = "block";
        addPost.style.display = "none";
    }
    closePost.onclick = function() {
        modalPost.style.display = "none";
        addPost.style.display = "block";
      }

    homeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "feed";
    });

    postBtn.addEventListener("click", (e) => {
      modalPost.style.display = "none";
      addPost.style.display = "block";
      e.preventDefault();
      createPost(postFeed.value);
    });

    logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    window.location.hash = "login";
  });

  return feed;
}


