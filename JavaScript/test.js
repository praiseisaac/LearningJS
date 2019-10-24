const i = 0;
var p = ["praise","isaac","daramola"];
for(let i = 0;i < p.length;i++){
  console.log(p[i]);
}
var j = 0;
do{
  console.log(p[j]);
  j++;
}while(j < p.length)
console.log(multiply(5,2));

function multiply(a,b){
  return a*b;
}

class Car{
  constructor(brand){
    this.brand = brand;
  }
  getbrand(){
    return this.brand;
  }
  setbrand(brand){
    this.brand = brand;
  }
}

car = new Car("Ford");
console.log(car.getbrand());
car.setbrand("Porsche");
console.log(car.getbrand());
