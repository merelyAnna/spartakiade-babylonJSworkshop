import {
    Engine,
    Scene
} from "babylonjs";


const initGame = () => {

    // Grabbing the canvas
    const canvas = document.getElementById("babylon-canvas");

    // Initializing engine and scene
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    // Getting the engine running
    engine.runRenderLoop(function () {
        scene.render();
    });
};

initGame();
