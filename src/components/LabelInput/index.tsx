import StyledDiv from './styles'

interface InputProps {
    label: string
    value: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (e: any) => void
    type?: string
    submited: boolean
    passwordLength?: boolean
    validation?: boolean
    validationTest?: boolean
}

const LabelInput = ({ label, value, onChange, type, submited, passwordLength = false, validation = false, validationTest }: InputProps) => {

    const nullErrorDisplay = !passwordLength && !validation && submited ? value ? 'none' : 'block' : 'none'
    const passwordLengthErrorDisplay = submited ? value.length < 6 ? 'block' : 'none' : 'none'
    const validationTestDisplay = submited ? validationTest ? 'none' : 'block' : 'none'

    return (
        <StyledDiv>
            <label htmlFor={label}>{label}</label>
            <input id={label} value={value} onChange={onChange} type={type} />
            <span style={{ display: nullErrorDisplay }}>
                Preencha este campo
            </span>
            {passwordLength && (
                <span style={{ display: passwordLengthErrorDisplay }}>
                    A senha está muito curta
                </span>
            )}
            {validation && (
                <span style={{ display: validationTestDisplay }}>
                    Senha incorreta
                </span>
            )}
        </StyledDiv>
    )
}

export default LabelInput
