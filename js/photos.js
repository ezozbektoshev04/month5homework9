let albumId = localStorage.getItem("albumId");
let photosCard = document.querySelector(".photos");
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => data.filter((el) => el.albumId == albumId))
  .then((data) => {
    let str = "";
    data.map((photos) => {
      str += `<div class="card p-3 " style="width:400px">
    <img src="${photos.url}" alt="" />
    <p class="pt-2">${photos.title}</p>
  </div>`;
      photosCard.innerHTML = str;
    });
  });
