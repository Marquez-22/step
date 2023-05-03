
type CircleNumberType = "circle1"

interface CircleNumberProps {
    number: number
    type?: CircleNumberType
    active?: boolean
    onClick?: () => void

}


export const CircleNumber = ({ number = 1, active = false, onClick }: CircleNumberProps) => {
    /**const [currentActive, setCurrentActive] = useState(1);=>  se utiliza el que contiene todos los pasos**/
    return (<>
        <div className={`Circle ${active ? "active" : ""}`} onClick={onClick}>
            {number}
            <span className="line"></span>
        </div>
    </>)

}