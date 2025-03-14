import StyledSection from './styles'
import Car from '@/components/Car'
import Overlay from '@/components/Overlay'
import { ReactElement, useEffect, useState } from 'react'
import variables from '@/variables'

interface CarsProps {
    carNames: string[]
    carImages: string[]
    buttonText: string
    usage: boolean
    form: ReactElement
}

const Cars = ({ carNames, carImages, buttonText, usage, form }: CarsProps) => {
    const [selected, setSelected] = useState<boolean[]>([false, false])
    const [smartphone, setSmartphone] = useState<boolean>(false)

    const smartphoneBreakpoint = Number(
        variables.breakpoints.smartphone.slice(0, 3)
    )
    const isASmartphone = window.screen.width <= smartphoneBreakpoint

    useEffect(() => {
        if (isASmartphone) setSmartphone(true)
        if (!isASmartphone) setSmartphone(false)
    }, [isASmartphone])

    const selectHandle = (car: '1' | '2') => {
        if (isASmartphone) setSmartphone(true)
        if (!isASmartphone) setSmartphone(false)
        if (car === '1') setSelected([true, false])
        if (car === '2') setSelected([false, true])
    }

    const closeHandle = () => {
        setSelected([false, false])
        setSmartphone(false)
    }

    return (
        <StyledSection>
            <Overlay />
            {smartphone && !selected[0] ? (
                ''
            ) : (
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
            )}
            {smartphone && !selected[1] ? (
                ''
            ) : (
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
            )}
        </StyledSection>
    )
}

export default Cars
