import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {loadPolygonMaskPlugin} from "tsparticles-plugin-polygon-mask";
import React from "react";
import svg from "../img/name.svg"

class NameParticles extends React.Component {
  // this customizes the component tsParticles installation


  render() {
    const customInit = async (engine) => {
      // this adds the preset to tsParticles, you can safely use the
      await loadPolygonMaskPlugin(engine);
      await loadFull(engine);
    }
    return (
      <Particles
      id="tsparticlesname"
      init={customInit}
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        pauseOnBlur: false,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3
            }
          }
        },
        particles: {
          color: {
            value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
          },
          links: {
            color: "random",
            distance: 30,
            enable: true,
            opacity: 1,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            speed: 1
          },
          number: {
            value: 300
          },
          opacity: {
            animation: {
              enable: true,
              speed: 2,
              sync: false
            },
            value: { min: 0.3, max: 0.8 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 1
          }
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0)",
            lineWidth: 2
          },
          enable: true,
          move: {
            radius: 5
          },
          position: {
            x: 30,
            y: 10
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 1,
          type: "inline",
          url: svg,
        },
        background: {
          color: "#000000",
          opacity: "0",
          image: "",
        }
    }}
  />
    )
  }
}
export default NameParticles