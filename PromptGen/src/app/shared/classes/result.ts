export class Result {

    createDate: string
    prompt: String

    constructor (prompt: string){
        this.prompt = prompt;
        this.createDate = new Date().toLocaleString();
     }
}
