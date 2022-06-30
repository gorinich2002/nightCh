import axios from "axios";
import config from "../config/index.json";
class ApiController{
    apiHref:string;

    constructor(apiHref: string){
        this.apiHref = apiHref;
    }

    async getThread(board:string, threadNuber: number){
        axios.get(`http(s)://2ch.hk/${board}/res/${threadNuber}.json`)
    }
    

}

export default new ApiController(config['apiHref'])