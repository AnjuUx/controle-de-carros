import StyledSection from './styles'
import Car from '@/components/Car'
import Overlay from '@/components/Overlay'
import { ReactElement, useState } from 'react'
import variables from '@/variables'

interface CarsProps {
    carNames: string[]
    carImages: string[]
    buttonText: string
    usage: boolean
    form: ReactElement
}

const Cars = ({ carNames, carImages, buttonText, usage, form }: CarsProps) => {
    // states utilizados no componente
    const [selected, setSelected] = useState<boolean[]>([false, false])
    const [smartphone, setSmartphone] = useState<boolean>(false)

    // transforma o breakpoint do celular (definido no arquivo de variáveis) em um número que possa ser colocado em
    // uma condicional
    const smartphoneBreakpoint = Number(
        variables.breakpoints.smartphone.slice(0, 3)
    )

    // tamanho da tela atual
    const windowWidth = window.screen.width

    // verifica se o tamanho da tela atual é menor que o breakpoint de smartphone
    const isASmartphone = windowWidth <= smartphoneBreakpoint

    // width antes do resize
    let prev = window.innerWidth

    // fecha o formulário ao mudar o tamnho da tela (horizontalmente) para não ocasionar problemas no layout
    window.addEventListener('resize', () => {
        if ((selected[0] || selected[1]) && prev != window.innerWidth) {
            prev = window.innerWidth
            setSmartphone(false)
            setSelected([false, false])
        }
    })

    // alterna entre os formulários, de acordo com a seleção do usuário
    // muda também o state smartphone, de acordo com o tamanho da tela
    const selectHandle = (car: '1' | '2') => {
        if (isASmartphone) setSmartphone(true)
        if (!isASmartphone) setSmartphone(false)
        if (car === '1') setSelected([true, false])
        if (car === '2') setSelected([false, true])
    }

    // fecha o formulário que está aberto
    const closeHandle = () => {
        setSelected([false, false])
        setSmartphone(false)
    }

    return (
        <StyledSection>
            <Overlay />
            {/* verifica se é um smartphone e se não está selecionado
                caso esteja selecionado, o outro carro irá desaparecer até o usuário fechar esse formulário em aberto
            */}
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
