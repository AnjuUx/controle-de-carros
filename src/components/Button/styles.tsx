import variables from '@/variables'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${variables.colors.blue};
    border: none;
    color: ${variables.colors.white};
    border-radius: 15px;
    padding: 4px 120px;
    font-family: ${variables.fonts.poppins};
    font-weight: 400;
    font-size: 1.5rem;
    transition: ease .2s;

    &:hover {
        cursor: pointer;
        background-color: ${variables.colors.blue}af;
    }
`

export default StyledButton
