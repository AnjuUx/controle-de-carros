import StyledButton from './styles'

interface ButtonProps {
    children: string | React.ReactElement | [string | React.ReactElement][]
    onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
