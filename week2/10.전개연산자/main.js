const fruits = ['π','π₯','π']
const fruits2 = ['π','π','π','π']

const fruits3 = ['π',...fruits2]

fruits3.forEach((fruit, index)=>{
  console.log(`${index}-${fruit}`);
})

const fruits4 = [...fruits,...fruits2]


fruits4.forEach(function(fruit, index){
  console.log(`${index}-${fruit}`);
})

const dept={
  deptno: 30,
  dname:'κ°λ°λΆ',
  loc:'μ μ£Ό'
}

const emp ={
  empno: 7566,
  ename: 'SCOTT',
  sal: 2500
}

const deptnemp = {...dept, ...emp}
console.log(deptnemp);

const emp2 = {...emp, empno:7499, ename:'TIGER', sal:3000}

console.log(emp);
console.log(emp2);

let items = [{ id: 1, name: "λ²€μΉνλ μ€", count: 0 }, { id: 2, name: "λ«νλ€μ΄", count: 0 },
{ id: 3, name: "μ€μΏΌνΈ", count: 0 },
];

let items2 = [...items]
console.log(items2);

items2 = [...items,{id:4, name:"λ€λ²¨νλ μ€", count:7}]
console.log(items2);

items2 = [...items,{id:5, name:"λ κ·Ένλ μ€"}]
console.log(items2);