import LabelInput from '@/components/LabelInput'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '@/patterns/Form'

const CarForm = () => {
    const [nome, setNome] = useState<string>('')
    const [cliente, setCliente] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [submited, setSubmited] = useState<boolean>(false)

    const navigate = useNavigate()

    const submit = (e: Event) => {
        setSubmited(true)
        e.preventDefault()

        if (nome && cliente && senha.length >= 6) {
            console.log('formulário enviado')

            navigate('/utilizando')

            setNome('')
            setCliente('')
            setSenha('')
            setSubmited(false)

        }
    }

    return (
        <Form onSubmit={submit} btnContent='Iniciar corrida'>
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
                passwordLength={true}
            />
        </Form>
    )
}

export default CarForm
