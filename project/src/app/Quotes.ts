export class Quotes {
    id: number;
    title: string;
    completeDate: Date;
    submitter: string;
    author: string;

    constructor(id?: number, title?: string, author?: string, submitter?: string, completeDate: Date = new Date()) {
       this.id = id;
       this.title = title;
       this.completeDate = completeDate;
       this.submitter = submitter;
       this.author = author;
   } 
}