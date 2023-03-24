class  Movie{
    constructor(title,studio,rating){     //constructor
         this.title  = title;
         this.studio = studio;
         this.rating = rating;
    }
    getPG(){
         if(this.rating===undefined){    
            this.rating="PG";
           };
         let info=`
         Movie Title: ${this.title}
         Studio     : ${this.studio}
         Rating     : ${this.rating}
         `;
         return info;
    }
};
let Movie1  =  new Movie("Casino_Royale","Eon productions","PG13");

let arr_movie =  [Movie1];              

arr_movie.forEach((a)=>console.log(a.getPG()));      

//output:
//Movie Title: Casino_Royale
//Studio     : Eon productions
//Rating     : PG13