export class Livro{
    constructor(
        public id?:number,
        public nome?: string,
        public autor?:string,
        public editora?: string,
        public disponivel?: boolean
    ){
        
    }
}