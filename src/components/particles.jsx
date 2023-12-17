import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
//import { curvesPathName } from "tsparticles-path-curves";
import { loadBasic } from "tsparticles-basic";
//import { loadCurvesPath } from "tsparticles-path-curves";
//import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
class ParticlesContainer extends React.Component {
  // this customizes the component tsParticles installation

  render() {
    const customInit = async (engine) => {
        await loadBasic(engine, false);
        //await loadEmittersPlugin(engine, false);
        //await loadCurvesPath(engine, false);
    }
    return (
      <Particles
      id="tsparticles"
      init={customInit}
      options={{
        fullScreen: { enable: true, zIndex: -5 },
        background: {
            color: "#000",
        },
        particles: {
            number: {
                value: 100,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 0.1,
                straight: false,
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                },
                value: { min: 0, max: 1 },
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
    }}/>
    )
  }
}
/*        particles: {
            color: {
                value: "#FF0000",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "destroy",
                },
                path: {
                    clamp: false,
                    enable: true,
                    delay: {
                        value: 0,
                    },
                    generator: curvesPathName,
                },
                random: false,
                speed: 2,
                straight: false,
                trail: {
                    fillColor: "#000",
                    length: 30,
                    enable: true,
                },
            },
            number: {
                value: 0,
                limit: 300,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 10 },
                animation: {
                    count: 1,
                    startValue: "min",
                    enable: true,
                    speed: 10,
                    sync: true,
                },
            },
        },
        background: {
            color: "#000",
        },
        detectRetina: true,
        emitters: {
            direction: "none",
            rate: {
                quantity: 10,
                delay: 0.3,
            },
            size: {
                width: 0,
                height: 0,
                mode: "precise",
            },
            spawnColor: {
                value: "#ff0000",
                animation: {
                    h: {
                        enable: true,
                        offset: {
                            min: -1.4,
                            max: 1.4,
                        },
                        speed: 5,
                        sync: false,
                    },
                    l: {
                        enable: true,
                        offset: {
                            min: 20,
                            max: 80,
                        },
                        speed: 0,
                        sync: false,
                    },
                },
            },
            position: {
                x: 50,
                y: 50,
            }}}}
            */

export default ParticlesContainer