import { EVStyle } from "./entryView.styles";
import { TweenLite } from 'gsap';
import { useRef } from 'react';

const EntryView = () => {
    let imgRef = useRef(null);
    

    function handleMouse(e) {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;

        const xPos = (offsetX/clientWidth) - 0.5;
        const yPos = (offsetY/clientHeight) - 0.5;

        console.log(xPos, yPos)

        TweenLite.to(imgRef, {
            duration: 1.5,
            x: xPos*100,
            y: yPos*100,
            rotationY: xPos*10,
            rotationX: yPos*5
        })
    }

    return (
        <EVStyle onMouseMove={handleMouse}>
            <img src="/map.jpg" alt="map" height={500} width={700} ref={el => imgRef = el} />
        </EVStyle>
    )
}

export default EntryView