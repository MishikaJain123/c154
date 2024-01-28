//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});


AFRAME.registerComponent("plain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRotation = this.el.getAttribute("rotation")
      this.data.speedOfAscent = this.el.getAttribute("position")
      var r = this.data.speedOfRotation;
      var p = this.data.speedOfAscent;
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 10) {
          this.data.speedOfRotation += 0.5;
          this.el.setAttribute("rotation", this.data.speedOfRotation)
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -10) {
          this.data.speedOfRotation -= 0.5;
          this.el.setAttribute("rotation", this.data.speedOfRotation)
        }
      }

      if (e.key === "ArrowUp") {
        if (s.z > -10) {
          s.z -= 0.5;
          this.el.setAttribute("rotation", s.z)
        }
        if (p.y > -2) {
          p.y -= 0.01;
          this.el.setAttribute("position", p.y)
        }
      }
    });
  }
});


