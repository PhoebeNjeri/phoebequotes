export class Quotes {
    id: number;
    title: string;
    description: string;
    completeDate: Date;
    submitter: string;
    author: string;

    constructor(id?: number, title?: string ,description?: string, completeDate: any= new Date(), submitter?: string, author?: string){
       this.id=id;
       this.title=title;
       this.description = description;
       this.completeDate = completeDate;
       this.submitter = submitter;
       this.author = author;
   } 
}