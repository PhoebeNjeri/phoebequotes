export class Quotes {
    id:number;
    title:string;
    description:Boolean;
    completeDate:Date;
    submitter:string;
    author:string;
   constructor(id?,title?,description?,completeDate?,submitter?,author?){
       this.id=id,this.title=title,this.description=false,this.completeDate= new Date,this.submitter=submitter,this.author=author
   } 
}