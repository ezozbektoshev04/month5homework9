let userID = localStorage.getItem("userId");
let todosCard = document.querySelector(".todos");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => data.filter((el) => el.userId == userID))
  .then((data) => {
    let str = "";
    data.map((todos) => {
      str += ` <div class="card">
        <div class="d-flex justify-content-between ps-3 pe-3 pt-2">
          <p class="">${todos.title}</p>
          <p>${todos.completed ? "✅" : "❌"}</p>
        </div>
      </div>`;
    });
    todosCard.innerHTML = str;
  });
