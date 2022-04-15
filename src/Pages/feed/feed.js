export default function Feed() {
  const feed = document.createElement("div");
  feed.classList.add("post-feed")
  feed.innerHTML = `  
      <div class="perfil-container">
        <div class="perfil-style">
        <img class="foto-style" src=''>
        <p id="usuario" class="text-style"></p>
        <p class="text-style"></p>
      </div>
      
      <div class="menu">
        <img id="home-btn" class="home-btn" alt="menu home" src="./img/home.png">
        <img id="perfil-btn" class="perfil-btn" alt="menu perfil" src="./img/perfil.png">
        <img id="notification-btn" class="notification-btn" alt="menu notification" src="./img/notification.png">
        <img id="logout-btn" class="logout-btn" alt="menu logout" src="./img/logout.png">
      </div>

      <img id="add-post" class="add-post" alt="adicionar post" src="./img/add.png">
      
      <section id="post" class="post">
        <div class="post-container">
          <img src="./img/fechar.png" alt="Fechar Post" id="close-post" class="close-post">
          <textarea class="post-textarea" rows="5" cols="35" maxlength="180" placeholder="Fale mais sobre seus investimentos."></textarea>
          <button type="submit" id="post-btn" class="post-btn">Postar</button>
        </div>
      </section>
        `;


    const btn = feed.querySelector('#add-post');
    const modalPost = feed.querySelector('#post');
    const btnPost = feed.querySelector('#post-btn');
    const close = feed.querySelector('#close-post');

    btn.onclick = function() {
        modalPost.style.display = "block";
        btn.style.display = "none";
    }
    close.onclick = function() {
        modalPost.style.display = "none";
        btn.style.display = "block";
      }
    btnPost.onclick = function() {
        modalPost.style.display = "none";
        btn.style.display = "block";
    }

  return feed;
}
