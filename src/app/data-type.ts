// to post  data into to sign up form
export interface SignUp{
    name:string;
    email:string;
    password:string;
    cpassword:string;
    
}

export interface LogIn{
    email:string;
    password:string;
    
}


export interface product{
    id:number;
    name:string;
    price:string;
    color:string;
    category:string;
    image:string;
    desciption:string;
    
}