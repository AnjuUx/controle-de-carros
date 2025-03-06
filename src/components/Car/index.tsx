import Button from '../Button'
import CarForm from './CarForm'
import StyledDiv from './styles'
import { useState } from 'react'

interface CarProps {
    image: string
    title: string
}

const Car = ({ image, title }: CarProps) => {
    const [selected, setSelected] = useState<boolean>(false)

    const btnHandle = (action: boolean) => {
        setSelected(action)
    }

    return (
        <StyledDiv style={{ backgroundImage: `url(${image})` }} title={title}>
            {selected ? (
                <>
                    <button onClick={() => btnHandle(false)} style={{zIndex: 99}}>Voltar</button>
                    <CarForm />
                </>
            ) : (
                <>
                    <div></div>
                    <div></div>
                    <Button onClick={() => btnHandle(true)}>Selecionar</Button>
                </>
            )}
        </StyledDiv>
    )
}

export default Car
