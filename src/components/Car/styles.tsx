import styled from 'styled-components'
import flex from '@/utils/flex'
import variables from '@/variables'

const padding = '20px'

const StyledDiv = styled.div`
    ${flex('column', 'space-around', 'center')}
    width: 50%;
    height: calc(100% - ${padding} - ${padding});
    background: center center no-repeat;
    background-size: 100%;
    padding: ${padding};
    overflow: hidden;

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

    @media screen and (max-width: ${variables.breakpoints.smartphone}) {
        width: 80%;
        background-size: 80%;
        button {
            margin-top: 200px;
        }
    }

    @media screen and (max-width: ${variables.breakpoints.smallSmartphone}) {
        width: calc(100% - ${padding} - ${padding});
    }
`

export default StyledDiv
