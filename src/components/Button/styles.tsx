import variables from '@/variables'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${variables.colors.blue};
    border: none;
    color: ${variables.colors.white};
    border-radius: 15px;
    padding: 4px 0;
    font-family: ${variables.fonts.poppins};
    font-weight: 400;
    font-size: 1.3rem;
    transition: ease 0.2s;
    z-index: 99;
    width: 350px;

    &:hover {
        cursor: pointer;
        background-color: ${variables.colors.blue}af;
    }

    @media screen and (max-width: ${variables.breakpoints.laptop}) {
        font-size: 1.2rem;
        width: 320px;
    }
    @media screen and (max-width: ${variables.breakpoints.tablet}) {
        font-size: 1rem;
        width: 250px;
    }
    @media screen and (max-width: ${variables.breakpoints.smallSmartphone}) {
        font-size: 0.9rem;
        width: 220px;
    }
`

export default StyledButton
