let user = [];
let usersCard = document.querySelector(".users");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    let str = "";
    data.map((users) => {
      str += `
      <div class="card col-3 p-4">
          <h5>${users.name}</h5>
          <p class="text-muted fs-6 fw-semibold pb-1">${users.username}</p>
          <div class="d-flex gap-1">
            <p>Email:</p>
            <a href="#" style="text-decoration: none">${users.email}</a>
          </div>
          <div class="d-flex gap-1">
            <p>Website:</p>
            <a href="#" style="text-decoration: none">${users.website}</a>
          </div>
          <div class="d-flex gap-1">
            <p>Address:</p>
            <a href="#" style="text-decoration: none">${users.address.city}, ${users.address.street}</a>
          </div>
          <div class="d-flex gap-1">
            <p>Phone:</p>
            <a href="#" style="text-decoration: none">${users.phone}</a>
          </div>
          <div class="d-flex gap-3">
            <button class="btn btn1 btn-info" onclick="getId(${users.id})">
              <a href="./posts.html" style="text-decoration: none; color: white">Posts</a>
            </button>
            <button class="btn btn2 btn-info" onclick="getId(${users.id})">
              <a href="./todos.html" style="text-decoration: none; color: white">Todos</a>
            </button>
            <button class="btn btn3 btn-info" onclick="getId(${users.id})">
              <a href="./albums.html" style="text-decoration: none; color: white">Album</a>
            </button>
          </div>
        </div>
      `;
      usersCard.innerHTML = str;
    });
  })
  .catch((err) => {
    console.log(err);
  });
function getId(id) {
  localStorage.setItem("userId", JSON.stringify(id));
}
