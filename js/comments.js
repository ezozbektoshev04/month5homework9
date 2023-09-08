let postsId = localStorage.getItem("postsId");
console.log(postsId);
let commentsCard = document.querySelector(".comments");
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => data.filter((el) => el.postId == postsId))
  .then((data) => {
    let str = "";
    data.map((posts) => {
      str += `<div
      class="d-flex p-3 w-100 text-white justify-content-center flex-column gap-4 mb-5 commnets card bg-success"
    >
      <p>${posts.email}</p>
      <span
        class="bg-dark w-100"
        style="height: 1px; margin-top: -25px"
      ></span>
      <p class="fw-bold" style="margin-top: -10px">
        ${posts.name}
      </p>
      <p style="margin-top: -20px">
        ${posts.body}
      </p>
    </div>`;
      commentsCard.innerHTML = str;
    });
  });
