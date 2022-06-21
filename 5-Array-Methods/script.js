const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];
getRandomUser();
getRandomUser();
getRandomUser();
// Fetch random user and add money

// function getRandomUser() {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((data) => {});
// }
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  //   console.log(data);

  // api'den gelen response içinden user datalarını ayıkladık.
  const user = data.results[0];

  // şimdi bu user bilgilerini bir object içine aktarıyoruz.
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function addData(obj) {
  data.push(obj);
}

console.log(data);
