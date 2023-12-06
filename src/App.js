import './App.css';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {loadPolygonMaskPlugin} from "tsparticles-plugin-polygon-mask";
import test from "./imgs/test.svg"


function App() {
  const particlesInit = useCallback(async engine => {
    await loadPolygonMaskPlugin(engine);

    await loadFull(engine);
  })
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
        options={{fullScreen: { enable: true, zIndex: 0 },
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
              distance: 100,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3
            }
          }
        },
        particles: {
          color: {
            value: ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"]
          },
          links: {
            color: "random",
            distance: 25,
            enable: true,
            opacity: 1,
            width: 2
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            speed: 1
          },
          number: {
            value: 500
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
            enable: false,
            lineColor: "rgba(255,255,255,.05)",
            lineWidth: 1
          },
          enable: true,
          move: {
            radius: 3
          },
          position: {
            x: 50.5,
            y: 45
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 3,
          type: "inline",
          url: test,
        },
        background: {
          color: "#000000",
          opacity: "100",
          image: "",
        }
    }}
 />
      </header>
    </div>
  );
}

export default App;
