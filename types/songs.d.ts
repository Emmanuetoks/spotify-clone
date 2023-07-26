export type TSongContext = [TSong[], Dispatch<TReducerAction>]


export type TSong = {
    name:string;
    songId?:string;
}


type TReducerAction= {
    type:string;
    payload: TSong
}






