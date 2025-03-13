import hb20 from '@/../public/images/cars/hb20.png'
import Cars from '@/patterns/Cars'
import StopForm from '@/patterns/Form/StopForm'

const Usage = () => {
    const carNames = ['hb20', 'hb20']
    const carImages = [hb20, hb20]

    return (
        <Cars
            carNames={carNames}
            carImages={carImages}
            buttonText='Encerrar corrida'
            usage={true}
            form={<StopForm/>}
        />
    )
}

export default Usage
