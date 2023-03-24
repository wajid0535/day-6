class person{                                                                  
    constructor(fname,lname,age,city,qualification){
        this.fname   =fname;
        this.lname    =lname;
        this.age         =age;
        this.city      =city;
        this.qualification  =qualification;
    }
    person_details(){
        let data=`
        Name         :   ${this.fname} ${this.lname}
        Age          :   ${this.age}
        Color        :   ${this.city}
        Qualification  :   ${this.qualification}
        `;                                                                      
        return data;
    }
}
let person1=new person("raj","kumar",22,"Hyderabad","Graduate");      
let person2=new person("sanjay","mishra",32,"Bangalore","Post Graduate");
let person3=new person("rohit","sharma",34,"Mumbai","P.H.D.")

let print_persons=[person1,person2,person3];                                     
print_persons.forEach((data)=>console.log(data.person_details()));   

//output:
//Name         :   raj kumar
//Age          :   22
//Color        :   Hyderabad
//Qualification  :   Graduate
//
//
//Name         :   sanjay mishra
//Age          :   32
//Color        :   Bangalore
//Qualification  :   Post Graduate
//
//
//Name         :   rohit sharma
//Age          :   34
//Color        :   Mumbai
//Qualification  :   P.H.D.
