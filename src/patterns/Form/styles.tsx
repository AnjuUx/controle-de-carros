import styled from 'styled-components'
import flex from '@/utils/flex'
import variables from '@/variables'

const StyledForm = styled.form`
    ${flex('column', 'center', 'center', '20px')}
    z-index: 99;
    background-color: ${variables.colors.darkBlue}a0;
    border-radius: 30px;
    width: 100%;
    height: 100%;

    .button-wrapper {
        margin-top: 20px;
    }
`

export default StyledForm
