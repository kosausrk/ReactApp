import { ReactNode } from "react"

interface Props{
    children:string
    color?:"primary" | "secondary" | "danger" | "success"
    onClick:()=>void 
}

function Button({children,onClick,color}:Props){
    return <button className={"btn btn-" +color} onClick={onClick}>{children}</button>   
}
export default Button