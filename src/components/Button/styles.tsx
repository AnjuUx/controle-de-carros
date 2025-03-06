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
    transition: ease .2s;
    z-index: 99;
    width: 350px;

    &:hover {
        cursor: pointer;
        background-color: ${variables.colors.blue}af;
    }
`

export default StyledButton
