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

    .usage {
        z-index: 99;
        margin-bottom: -100px;

        h2 {
            color: ${variables.colors.white};
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        p {
            color: ${variables.colors.white};
            font-size: 2rem;
            font-weight: 600;
        }
    }
`

export default StyledDiv
