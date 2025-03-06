import StyledDiv from './styles'

interface InputProps {
    label: string
}

const Input = ({ label }: InputProps) => {
    return (
        <StyledDiv>
            <label htmlFor={label}>{label}</label>
            <input id={label} />
        </StyledDiv>
    )
}

export default Input
