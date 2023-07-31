export type TUser = {
    name:string;
    plalists?:number;
}


export type ActiveTrack = {
    trackID:string;
    next:string;
    previous:string;
}


export type HomeSection = {
    name:string;
    sourceID:string;
    contents: ContentCard[];
}



export type ContentCard = {
    name:string;
    description:string;
    sourceID:string;
}