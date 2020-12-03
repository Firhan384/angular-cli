export class ConfigApi{
    baseUrl:string;
    url(){
        return this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }
}