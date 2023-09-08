let userID = localStorage.getItem("userId");
let albumsCard = document.querySelector(".albums");
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((data) => data.filter((el) => el.userId == userID))
  .then((data) => {
    let str = "";
    data.map((albums) => {
      str += `<div class="card col-3 p-3">
        <p class="fw-bold">${albums.title}</p>
        <a href="./photos.html"><button class="btn btn-info w-100" onclick="getId(${albums.id})">Photos</button></a>
      </div>`;
    });
    albumsCard.innerHTML = str;
  })
  .catch((err) => {
    console.log(err);
  });
function getId(id) {
  localStorage.setItem("albumId", JSON.stringify(id));
}
