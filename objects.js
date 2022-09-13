const members = ["egoing", "k8805", "hoya"];

const roles = {
  programmer: "egoing",
  designer: "k8805",
  manager: "hoya",
};

let i = 0;
while (i < members.length) {
  console.log(`멤버 ${i} 번 : ${members[i]}`);
  i = i + 1;
}

for (let name in roles) {
  console.log(`object => ${name}`);
  console.log(`value => ${roles[name]}`);
}
