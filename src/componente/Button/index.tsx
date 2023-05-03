
import { ReactNode } from "react"


type ButtonType = "btn1"
interface ButtonProps {
    children?: ReactNode
    type?: ButtonType
    className?: string
    onClick?: () => void
    disabled?:boolean
}


export const Button = ({ children = "", className = "", onClick, type = "btn1",disabled=false }: ButtonProps) => {
    return (<>
        <button className={`btn ${type} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    </>)
}