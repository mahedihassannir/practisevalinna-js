let loadData = () => {
  let url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data.data));
};

let showData = (phone) => {
  console.log(phone);

  let get1 = document.getElementById("container");

  phone.forEach((single) => {
    let create = document.createElement("div");
    create.classList.add("col");

    create.innerHTML = `
    <div class="col  width-50 p-4">

    <div class="card">

      <img src="  ${single.image}" class="  card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${single.phone_name}</h5>
      <p class="card-text">${single.brand}</p>
      </div>

      </div>
    `;

    get1.appendChild(create);
  });
};

loadData();
