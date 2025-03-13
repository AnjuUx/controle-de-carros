import StyledForm from './styles'
import Button from '@/components/Button'
import { ReactElement } from 'react'

interface FormProps {
    children: ReactElement | (string | ReactElement)[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (e: any) => void
    btnContent: string | React.ReactElement | [string | React.ReactElement][]
}

const Form = ({ children, onSubmit, btnContent }: FormProps) => {
    return (
        <StyledForm>
            {children}
            <div className='button-wrapper'>
                <Button type='submit' onClick={(e) => onSubmit(e)}>
                    {btnContent}
                </Button>
            </div>
        </StyledForm>
    )
}

export default Form