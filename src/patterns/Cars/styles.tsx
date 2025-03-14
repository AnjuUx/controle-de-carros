import styled from 'styled-components'
import flex from '@/utils/flex'
import variables from '@/variables'

const StyledSection = styled.section`
    ${flex('row')}
    height: 100%;
    background-color: ${variables.colors.lightBlue};

    @media screen and (max-width: ${variables.breakpoints.smartphone}) {
        ${flex('column', 'center', 'center')}
    }
`

export default StyledSection
