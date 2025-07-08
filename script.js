var type=new Typed("#typedelement",{
  strings:["JAVA FULL STACK DEVELOPER","FRONTEND DEVELOPER","JAVA BACKEND DEVELOPER","JAVA DEVELOPER","SQL DEVELOPER"],
  typeSpeed:50,
  backSpeed:50,
  loop:true,
  showCursor:false
})

  particlesJS("section-particles", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "polygon"
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
