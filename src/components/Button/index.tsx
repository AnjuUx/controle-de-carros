import StyledButton from './styles'

interface ButtonProps {
    children: string | React.ReactElement | [string | React.ReactElement][]
}

const Button = ({ children }: ButtonProps) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button
