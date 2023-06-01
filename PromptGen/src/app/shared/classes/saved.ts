export class Saved {
    id: number;
    prevId: number;
    createDate: string
    prompt: String

    constructor (id: number, prompt: string){
        this.id = id;
        this.prevId = id - 1;
        this.prompt = prompt;
        this.createDate = new Date().toLocaleString();
     }
}
