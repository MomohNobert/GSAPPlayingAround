import { EVStyle } from "./entryView.styles";
import gsap, { TimelineMax } from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const EntryView = () => {
    let imgRef = useRef(null);

    // let tl = new TimelineMax({
    //     paused: true,
    //     scrollTrigger: {
    //         trigger: imgRef,
    //         markers: true,
    //         start: 'top center+=100',
    //     }
    // })

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger); 
        }
        // tl.to(imgRef, {
        //     duration: 1.5,
        //     x: 100,
        //     y: 100,
        // })

        ScrollTrigger.create({
            trigger: imgRef.current,
            start: "100px",
            end: "700px",
            markers: true,
            onToggle: self => console.log("toggled, isActive:", self.isActive),
            onUpdate: self => {
                console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
            }
            });
    }, [])

    // function handleMouse(e) {
    //     const { offsetX, offsetY, target } = e.nativeEvent;
    //     const { clientWidth, clientHeight } = target;

    //     const xPos = (offsetX/clientWidth) - 0.5;
    //     const yPos = (offsetY/clientHeight) - 0.5;

    //     TweenLite.to(imgRef, {
    //         duration: 1.5,
    //         x: xPos*100,
    //         y: yPos*100,
    //         rotationY: xPos*10,
    //         rotationX: yPos*5
    //     })

    // }

    return (
        <EVStyle>
            <img src="/map.jpg" alt="map" height={500} width={700} ref={el => imgRef = el} />
        </EVStyle>
    )
}

export default EntryView