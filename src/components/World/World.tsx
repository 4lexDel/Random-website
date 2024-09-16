
import Sketch from 'react-p5';

function World() {
    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(500, 400).parent(canvasParentRef);
    }

    const draw = (p5: any) => {
        p5.background(255, 120, 20);
        p5.ellipse(100, 100, 100);
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default World;
        