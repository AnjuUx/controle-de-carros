import StyledDiv from './styles'

interface InputProps {
    label: string
    value: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (e: any) => void
    type?: string
    submited: boolean
    password?: boolean
}

const LabelInput = ({ label, value, onChange, type, submited, password = false }: InputProps) => {

    const nullErrorDisplay = !password && submited ? value ? 'none' : 'block' : 'none'
    const passwordErrorDisplay = submited ? value.length < 6 ? 'block' : 'none' : 'none'

    return (
        <StyledDiv>
            <label htmlFor={label}>{label}</label>
            <input id={label} value={value} onChange={onChange} type={type}/>
            <span style={{ display: nullErrorDisplay }}>Preencha este campo</span>
            {
                password && <span style={{ display: passwordErrorDisplay }}>A senha está muito curta</span>
            }
        </StyledDiv>
    )
}

export default LabelInput
