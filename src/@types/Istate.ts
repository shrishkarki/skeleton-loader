import { Result } from "./Imodel";

export interface Istate{
    loading:boolean,
    page:number,
    totalPages:number,
    movies:Result[],
    errorMsg:string
  }