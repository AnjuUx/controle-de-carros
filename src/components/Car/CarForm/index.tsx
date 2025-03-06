import Input from '@/components/LabelInput'
import StyledForm from './styles'
import Button from '@/components/Button'

const CarForm = () => {
    return (
        <StyledForm>
            <Input label='Nome de usuário'/>
            <Input label='Cliente'/>
            <Input label='Senha'/>
            <div className='button-wrapper'>
                <Button>
                    Iniciar Corrida
                </Button>
            </div>
        </StyledForm>
    )
}

export default CarForm
