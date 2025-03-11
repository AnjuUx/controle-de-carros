import hb20 from '@/../public/images/cars/hb20.png'
import Cars from '@/patterns/Cars'


const SelectCar = () => {
    const carNames = ['hb20', 'hb20']
    const carImages = [hb20, hb20]

    return (
        <Cars
            carNames={carNames}
            carImages={carImages}
            buttonText='Selecionar'
            usage={false}
        />
    )
}

export default SelectCar
