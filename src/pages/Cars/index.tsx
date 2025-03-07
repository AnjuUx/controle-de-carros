import StyledSection from './styles'
import Car from '@/components/Car'
import hb20 from '@/../public/images/cars/hb20.png'
import Overlay from '@/components/Overlay'
import { useState } from 'react'

const Cars = () => {
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
                image={hb20}
                title='hb 20'
                selected={selected[0]}
                select={() => selectHandle('1')}
                close={() => closeHandle()}
            />
            <Car
                image={hb20}
                title='hb 20'
                selected={selected[1]}
                select={() => selectHandle('2')}
                close={() => closeHandle()}
            />
        </StyledSection>
    )
}

export default Cars
