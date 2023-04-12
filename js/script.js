let loadData = (snn) => {
  let url = `https://openapi.programming-hero.com/api/phones?search=${snn}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data.data));
};

let showData = (phone) => {
  // get the container id
  let get1 = document.getElementById("container");
  // empty the container
  get1.textContent = "";

  //loop the container
  phone.forEach((single) => {
    // here is dom manipulation

    //create a div
    let create = document.createElement("div");
    // add one class name
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
    // here is dom manipulation ends

    // send or append a child on container
    get1.appendChild(create);
  });
};

// document.getElementById("btn").addEventListener("click", function () {
//   let get12 = document.getElementById("input").value;
//   console.log(get12);
//   loadData(get12);
// });

let btn = () => {
  let get1 = document.getElementById("input").value;
  loadData(get1);
};

loadData();
