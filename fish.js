AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 50; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createfish(id, position);
      }
    } ,
  
    createfish: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      
      fishEl.setAttribute("gltf-model","assets/clown_fish/scene.gltf");
      
      fishEl.setAttribute("scale", {x:50 , y:50 , z:50});  
      
      fishEl.setAttribute("animation-mixer",{})
  
      terrainEl.appendChild(fishEl);
    }
  });