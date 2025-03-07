import styled from 'styled-components'
import flex from '@/utils/flex'
import variables from '@/variables'

const padding = '24px'

const StyledDiv = styled.div`
    ${flex('column', 'space-around', 'center')}
    height: calc(100% - ${padding} - ${padding});
    width: 50%;
    background: center center no-repeat;
    background-size: 100%;
    padding: ${padding};

    .back {
        background-color: transparent;
        border: none;
        border-radius: 50px;
        padding: 4px 5px;
        align-self: flex-start;
        margin-left: 5%;

        &:hover {
            cursor: pointer;
            background-color: ${variables.colors.white}29;
        }
    }
`

export default StyledDiv
