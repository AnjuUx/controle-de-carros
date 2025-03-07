import StyledButton from './styles'

interface ButtonProps {
    children: string | React.ReactElement | [string | React.ReactElement][]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (e: any) => void
    type?: 'submit' | 'button' | 'reset'
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
    return <StyledButton onClick={onClick} type={type}>{children}</StyledButton>
}

export default Button
