import StyledSection from './styles'
import Car from '@/components/Car'
import Overlay from '@/components/Overlay'
import { ReactElement, useState } from 'react'

interface CarsProps {
    carNames: string[]
    carImages: string[]
    buttonText: string
    usage: boolean
    form: ReactElement
}

const Cars = ({ carNames, carImages, buttonText, usage, form }: CarsProps) => {
    const [selected, setSelected] = useState<boolean[]>([false, false])

    const selectHandle = (car: '1' | '2') => {
        if (car === '1') setSelected([true, false])
        if (car === '2') setSelected([false, true])
    }

    const closeHandle = () => {
        setSelected([false, false])
    }

    return (
        <StyledSection>
            <Overlay />
            <Car
                image={carImages[0]}
                title={carNames[0]}
                selected={selected[0]}
                select={() => selectHandle('1')}
                close={() => closeHandle()}
                buttonText={buttonText}
                usage={usage}
                form={form}
            />
            <Car
                image={carImages[1]}
                title={carNames[1]}
                selected={selected[1]}
                select={() => selectHandle('2')}
                close={() => closeHandle()}
                buttonText={buttonText}
                usage={usage}
                form={form}
            />
        </StyledSection>
    )
}

export default Cars
