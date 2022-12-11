export default class LgtmGif{
   private alt:string;
   private src:string;
    constructor(alt:string,src:string){
        this.alt=alt;
        this.src=src;
    }

    get markdown():string{
        return `![${this.alt}](${this.src})`;
    }

   static fromJson(json:any):LgtmGif{
       return new LgtmGif(json.alt,json.src);
    }
}