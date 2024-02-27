//var,let,const
//JS fire base(dosya bazlı)'dir.

let sayi1 = 10;
sayi1="Pelin Coskun"
let student={id:1,name:"Pelin"}
//console.log(student)

function save(puan=10,ogrenci) {
 // console.log(ogrenci.name+ " : "+ puan)
}
save(undefined,student)

let students=["Engin Demiroğ","Pelin Coşkun","İzel","Ece"]
//console.log(students)
let students2=[student,{id:2,name:"Fatma"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest
//params
let showProducts=function(id,...products){
    console.log(id)
    console.log(products[0])
}

//showProducts(10,["Elma","Armut"])

//spread
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


let setState=function(params){

}
//Destructuring
let populations=[10000,20000,30000,[40000,10000]]
let [small,medium,high,veryHigh,maximum]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small1,number]) {
    console.log(small1)
}

someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)