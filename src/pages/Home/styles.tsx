import styled from 'styled-components'
import flex from '@/utils/flex'
import backgroundImage from '../../../public/images/background-image.jfif'

const StyledMain = styled.main`
    ${flex('row', 'center', 'center')}
    background-color: lightblue;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
`

export default StyledMain
