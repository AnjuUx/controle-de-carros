import LabelInput from '@/components/LabelInput'
import StyledForm from './styles'
import Button from '@/components/Button'
import { useState } from 'react'

const CarForm = () => {

    const [nome, setNome] = useState<string>('')
    const [cliente, setCliente] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [submited, setSubmited] = useState<boolean>(false)

    const submit = (e: Event) => {
        setSubmited(true)
        e.preventDefault()
    }

    return (
        <StyledForm>
            <LabelInput
                label='Nome de usuário'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                submited={submited}
            />
            <LabelInput
                label='Cliente'
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                submited={submited}
            />
            <LabelInput
                label='Senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                submited={submited}
                type='password'
                password={true}
            />
            <div className='button-wrapper'>
                <Button type='submit' onClick={(e) => submit(e)}>
                    Iniciar Corrida
                </Button>
            </div>
        </StyledForm>
    )
}

export default CarForm
