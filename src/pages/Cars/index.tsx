import StyledSection from './styles'
import Car from '@/components/Car'
import hb20 from '@/../public/images/cars/hb20.png'
import Overlay from '@/components/Overlay'

const Cars = () => {
    return (
        <StyledSection>
            <Overlay />
            <Car image={hb20} title='hb 20' />
            <Car image={hb20} title='hb 20' />
        </StyledSection>
    )
}

export default Cars
