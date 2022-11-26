import { OrbitControls } from '@react-three/drei'
import Terasa from './Terasa.js'

export default function Experience()
{ 

    return <>
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.1 } shadow-normalBias={ 0.04 } />
        <directionalLight position={ [ -1, 2, -3 ] } intensity={ .5 }/>
        <directionalLight position={ [ -2, -2, 0 ] } intensity={ .5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ -1 } position-z={ - .3 }  rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color='ivory'/>
        </mesh>

        <Terasa />

    </>
}