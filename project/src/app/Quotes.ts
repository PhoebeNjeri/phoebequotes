export class Quotes {
    id:number;
    title:string;
    description:Boolean;
    completeDate:Date
   constructor(id,title,description,completeDate){
       this.id=id,this.title=title,this.description=false,this.completeDate= new Date
   } 
}