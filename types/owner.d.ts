export type User = {
    display_name:string
    id:string;
    type: 'user' | 'artist' | 'admin'
    href?:string;
} 