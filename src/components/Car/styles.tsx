import styled from 'styled-components'
import flex from '@/utils/flex'

const padding = '24px'

const StyledDiv = styled.div`
    ${flex('column', 'space-around', 'center')}
    height: calc(100% - ${padding} - ${padding});
    width: 50%;
    background: center center no-repeat;
    background-size: 100%;
    padding: ${padding};
`

export default StyledDiv
