const gridContainerEl = document.querySelector(".grid-container");

// fetching the API & returning a promise with array of data
function fetchAPI() {
  return new Promise((resolve, reject) => {
    resolve(
      fetch(
        "https://free-food-menus-api-production.up.railway.app/burgers"
      ).then((res) => res.json())
    );
  });
}

// getting the data from fetchAPI and displaying the menu
function getMenu(data) {
  data.forEach((ele) => {
    gridContainerEl.innerHTML += `<div class="menu">
           <img src = "${ele.img}" alt="img not loading" width="100%" />
            <h3>${ele.name}</h3>
            <i><h4>$${ele.price}</h4></i>
         </div>`;
  });
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

// taking the array & returning object with 3 random menu
function takeOrder(data) {
  // generating random orders & storing in object
  let obj = {
    0: data[Math.floor(Math.random() * data.length)],
    1: data[Math.floor(Math.random() * data.length)],
    2: data[Math.floor(Math.random() * data.length)],
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj);
    }, 2500);
  });
}

function orderPrep(data) {
  let obj = {
    order_status: true,
    paid: false,
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj);
    }, 1500);
  });
}

//returning an object with order_status & paid status
function payOrder(data) {
  data.paid = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

//displaying the thank you alert if paid === true
function thankYouFunc(obj) {
  if (obj.paid === true) alert("Thank You");
}
// promise chaining
fetchAPI()
  .then(getMenu)
  .then(takeOrder)
  .then(orderPrep)
  .then(payOrder)
  .then(thankYouFunc);
