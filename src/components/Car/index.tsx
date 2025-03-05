import Button from '../Button'
import StyledDiv from './styles'
import ZLink from '../ZLink'

interface CarProps {
    image: string
    alt: string
}

const Car = ({ image, alt }: CarProps) => {
    return <StyledDiv>
        <img src={image} alt={alt} />
        <ZLink to='/'>
            <Button>
                Selecionar
            </Button>
        </ZLink>
    </StyledDiv>
}

export default Car
