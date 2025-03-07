import Input from '@/components/LabelInput'
import StyledForm from './styles'
import Button from '@/components/Button'

const CarForm = () => {

    const submit = (e: Event) => {
        e.preventDefault()
    }

    return (
        <StyledForm>
            <Input label='Nome de usuário'/>
            <Input label='Cliente'/>
            <Input label='Senha'/>
            <div className='button-wrapper'>
                <Button type='submit' onClick={(e) => submit(e)}>
                    Iniciar Corrida
                </Button>
            </div>
        </StyledForm>
    )
}

export default CarForm
