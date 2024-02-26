//var,let,const
//JS fire base(dosya bazlı)'dir.

let sayi1 = 10;
sayi1="Pelin Coskun"
let student={id:1,name:"Pelin"}
//console.log(student)

function save(puan=10,ogrenci) {
  console.log(ogrenci.name+ " : "+ puan)
}
save(undefined,student)

let students=["Engin Demiroğ","Pelin Coşkun","İzel","Ece"]
//console.log(students)
let students2=[student,{id:2,name:"Fatma"},"Ankara",{city:"İstanbul"}]
console.log(students2)