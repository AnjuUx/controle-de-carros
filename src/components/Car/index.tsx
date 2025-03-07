import variables from '@/variables'
import Button from '../Button'
import CarForm from './CarForm'
import StyledDiv from './styles'
import { FaArrowLeft } from 'react-icons/fa6'

interface CarProps {
    image: string
    title: string
    selected: boolean
    select: () => void
    close: () => void
}

const Car = ({ image, title, selected, select, close }: CarProps) => {
    return (
        <StyledDiv style={{ backgroundImage: `url(${image})` }} title={title}>
            {selected ? (
                <>
                    <button
                        onClick={() => close()}
                        style={{ zIndex: 99 }}
                        className='back'
                    >
                        <FaArrowLeft color={variables.colors.blue} size={35} />
                    </button>
                    <CarForm />
                </>
            ) : (
                <>
                    <div></div>
                    <div></div>
                    <Button onClick={() => select()}>Selecionar</Button>
                </>
            )}
        </StyledDiv>
    )
}

export default Car
