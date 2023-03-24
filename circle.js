//class Circle:

class Circle{
    constructor(radius,color){                  
        this.radius=radius;
        this.color=color;
    }
    circle_details(){
        return `
cirlce:        
        radius  :  ${(this.radius).toFixed(1)}
        color   :  ${this.color}`
                 
    }
}
let circle1=new Circle(1.0,"red");
console.log(circle1.circle_details())

//getarea:
class Area_of_circle extends Circle{
     
    constructor(radius=1.0){
       super(radius);                           
    }
    getArea(){                                
       let data=`                               
Area:
       Area:  ${((this.radius)*3.14*(this.radius)).toFixed(1)}
       `;
       return data;
    }
}
let radius=new Area_of_circle();
console.log(radius.getArea());  

//getCircumference:
class Circumference extends Circle{
   constructor(radius=1.0){
       super(radius)
   }
   circumference_method(){                      
       let data=`
Circumference:      
       Circumference:  ${((this.radius)*2*3.14)}
       `;
       return data;
   }
}
let circum=new Circumference();                 
console.log(circum.circumference_method());

//toString output:
class outputstringify extends Circle{
   constructor(radius,color){
        super(radius,color);
   }
   getstrin(){
       let data=`
Stringify:
       Circle[radius = ${this.radius} , colout = ${this.color}]
       `;
       return data;
   }
}
let strcircle=new outputstringify(1.0,"Red")     
console.log(strcircle.getstrin());

//getter method:
let circle={
   radius:1,
   color:"red",
   get getradius(){                             
       return (this.radius).toFixed(1);
   }
}
console.log(`
Getter method :
       Radius: ${(circle.getradius)}
`);

//setter method:
let circle2={
   color:"red",
   set change_color(newname){                  
       this.color=newname;
   }
}
console.log(`
Setter Method:
      value in the object is==> color : ${circle2.color}
`);
circle2.change_color="blue";
console.log(`
value change using setter:
      value in the object==> color : ${circle2.color}
`);

//output:

//cirlce:
//        radius  :  1.0
//        color   :  red
//
//Area:
//       Area:  3.1
//
//
//Circumference:
//       Circumference:  6.28
//
//
//Stringify:
//       Circle[radius = 1 , colout = Red]
//
//
//Getter method :
//       Radius: 1.0
//
//
//Setter Method:
//      value in the object is==> color : red
//
//
//value change using setter:
//      value in the object==> color : blue