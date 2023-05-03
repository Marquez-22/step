import { useState } from "react"
import { CircleNumber } from "../CircleNumber"
import { Button } from "../Button"

type PasosType = "pasos1"

interface PasosProps {
    type?: PasosType
    npasos: number  // esta variable sirve para definir cuantos pasos se van a imprimir//
    currentStep?: number //SE UTILIZA PARA DEFINIR EN QUE PASO VA A INICIAR//

}

export const Pasos = ({ npasos = 6, currentStep = 0, type = "pasos1" }: PasosProps) => {
    const testArray = new Array(npasos).fill(1) // => acepta una cantidad grande de numeros utilizando npasos , formula para crear un array de n-longitud

    const [step, setStep] = useState<number>(currentStep)// usestate permite guardar valores retorna el valor y una funcion para modificar el mismo, step => valor, setstep=> funcion para modificar ese valor,  <> => se define el tipo de valor, (current) => es el valor inicial por defecto
    // si se ejecuta setStep(x) eso hara que step=x
    // si se ejecuta setStep(3) eso hara que step=3

    // 2 formas de hacer funciones
    function nameFunction(params: number) {
        //lo que vallas a hacer
    }
    const nameFunction2 = (param: number) => {
        //lo que vallas a hacer
    }

    // las funciones se colocan antes del return en un componente 

    //pasar una funcion de forma NO directa
    // crea la funcion
    const functionClickNext = () => {
        //lo que vallas a hacer
        //codigo para que avance 1 paso
        setStep((step) => step + 1)

    }

    return (<>

        <div className="contentPasos">
            <div className="pasos">
                {
                    testArray.map((elemento, index) => {// el MAP se utiliza para imprimir cuando se repite varios elementos, =>elemento es el valor del array, index=> posicion de ese elemento  
                        return (
                            <>
                                <CircleNumber
                                    key={index}
                                    number={index + 1}
                                    active={index <= step}
                                    onClick={() => {
                                        setStep(index)
                                    }}
                                />
                            </>
                        )
                    })
                }
            </div>
            <div className="contentBoton">
                {/* onclick es un evento que se ejecuta cuando haces click en el element, cuando se va a ejecutar un evento se tiene que colocar una funcion */}
                {/* tiene que desactivar en el primer paso */}
                {/* step == 0 => estamos en el paso 1 */}
                {/* step es el paso actual */}
                <Button disabled={step == 0}
                    //le pasas la funcion de forma directa
                    onClick={() => {
                        //lo que valla a hacer
                        //loq ue tiene que hacer es restarle uno al paso
                        // es decir step - 1 
                        setStep((step) => step - 1)
                        // esto es la mera correnta de hacer  setStep(step -1)
                    }}> Anterior </Button>

                {/* tiene que desactivar en el ultimo paso */}
                <Button disabled={step == npasos - 1}
                    //pasar funcion de forma NO directa
                    onClick={functionClickNext}
                > Siguiente </Button>
            </div>


        </div>


    </>)
}