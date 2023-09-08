let userID = localStorage.getItem("userId");
let postsCard = document.querySelector(".posts");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => data.filter((el) => el.userId == userID))
  .then((data) => {
    let str = "";
    data.map((posts) => {
      str += `<div class="card p-3">
      <p class="fw-bold">
        ${posts.title}
      </p>
      <p>
        ${posts.body}
      </p>
      <a href="./comments.html"
        ><button class="btn btn-info" style="color: white" onclick="getId(${posts.id})">
          Comments
        </button></a
      >
    </div>`;
      postsCard.innerHTML = str;
    });
  })
  .catch((err) => {
    console.log(err);
  });

function getId(id) {
  localStorage.setItem("postsId", JSON.stringify(id));
}
