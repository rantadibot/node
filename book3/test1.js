const Users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
  { name: "티아라", age: 23 },
];
// for (let i = 0; i < Users.length; i++) {
//   console.log(`배열 요소 #${i} : ${Users[i].name}, ${Users[i].age}`);
// }

const Users2 = [
  { name: "아이유", age: 25 },
  { name: "여자친구", age: 19 },
  { name: "마재윤", age: 25 },
];
// Users2.forEach(function (item, index) {
//   console.log(`배열 요소 #${index + 3} : ${item.name}, ${item.age}`);
// });
Users2.forEach(function (item, index) {
  Users.push({ name: `${item.name}`, age: parseInt(`${item.age}`) });
});
console.log(Users.slice(0, 2));
