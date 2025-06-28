
interface saludoProps {
saludo: string
}

export function Saludo(saludar: saludoProps){

    
    return (
        <>
        <button>{saludar.saludo}</button>
        </>
    )
}
