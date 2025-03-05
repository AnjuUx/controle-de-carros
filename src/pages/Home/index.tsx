import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import StyledMain from './styles'
import ZLink from '@/components/ZLink'

const Home = () => {
    return (
        <StyledMain>
            <Overlay />
            <ZLink to='/carros'>
                <Button>Iniciar</Button>
            </ZLink>
        </StyledMain>
    )
}

export default Home
