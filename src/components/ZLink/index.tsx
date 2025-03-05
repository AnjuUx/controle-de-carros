import { ReactElement } from 'react'
import StyledLink from './styles'

interface ZLinkProps {
    children: ReactElement | string | [ReactElement | string][]
    to: string
}

const ZLink = ({ children, to }: ZLinkProps) => {
    return <StyledLink to={to}>{children}</StyledLink>
}

export default ZLink
