

export interface ICourses {
    id:number;
    name:string;
    type:string;
    img:string;
    description:string;
    oldprice:number;
    newprice:number;
    date: {
        dayfrom: number;
        dayto: number;
        month:string;
        year: number;
      };
      rate:number;

}
