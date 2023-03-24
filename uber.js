class Uberprice{
    constructor(rider,time,distance){
        let [base_fare,cost_per_km]=[25,7]; 
        this.rider_name=rider;
        this.base_fare=+base_fare;
        this.time=+time;
        this.cost_per_km=+cost_per_km;
        this.distance=distance;
    }
    getprice(){
        if(this.time<30){       
           this.time=0;
        }else{
            var revise=0;
            for(let i=30;i<=this.time;i=i+30){
                revise+=30;
        }}
        this.time=revise;
        let passengers_ride_fair=this.base_fare+(this.distance*(this.cost_per_km)+this.time);   
                                                                            
        return `
        Uber price :     ₹ ${passengers_ride_fair}
        `;                                                                         
    }
}
let rider1   =   new Uberprice("suresh",70,60);                          
let rider2   =   new Uberprice("sharma",30,30);
let rider3   =   new Uberprice("jeevesh",120,100);
let arr_rider=   [rider1,rider2,rider3];                                           
arr_rider.forEach((rider)=>console.log(`Rider: ${rider.rider_name} ${rider.getprice()}`));

//output:
//Rider: suresh 
//        Uber price :     ₹ 505
//
//Rider: sharma 
//        Uber price :     ₹ 265
//
//Rider: jeevesh
//        Uber price :     ₹ 845