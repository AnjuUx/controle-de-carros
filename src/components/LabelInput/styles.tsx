import variables from '@/variables'
import styled from 'styled-components'
import flex from '@/utils/flex'

const StyledDiv = styled.div`
    ${flex('column', 'auto', 'auto', '10px')}

    label {
        font-size: 1.25rem;
        color: ${variables.colors.white};
        margin-left: 27px;
    }

    input {
        background-color: ${variables.colors.darkestBlue};
        border-radius: 25px;
        font-size: 1.8rem;
        outline: 0;
        border: 3px solid transparent;
        padding: 8px 30px;
        color: ${variables.colors.white};
        font-family: ${variables.fonts.poppins};
        transition: ease 0.2s;

        &:focus {
            border-color: ${variables.colors.blue};
        }
    }

    span {
        font-size: .8rem;
        color: #ec7a7a;
    }
`

export default StyledDiv
