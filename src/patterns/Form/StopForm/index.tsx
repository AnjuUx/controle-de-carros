import LabelInput from '@/components/LabelInput'
import Form from '..'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StopForm = () => {
    const [senha, setSenha] = useState<string>('')
    const [submited, setSubmited] = useState<boolean>(false)
    const [validate, setValidate] = useState<boolean>(false)

    const navigate = useNavigate()

    const submit = (e: Event) => {
        e.preventDefault()
        setSubmited(true)
        
        if(senha.length >= 6){
            setValidate(true)
            navigate('/carros')
            setSubmited(false)
            setSenha('')
        }
        
    }

    return (
        <Form onSubmit={submit} btnContent='Encerrar corrida'>
            <LabelInput
                label='Senha'
                type='password'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                validation={true}
                validationTest={validate}
                submited={submited}
            />
        </Form>
    )
}

export default StopForm
