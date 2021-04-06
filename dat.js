const gui = new dat.GUI()


var folder1 = gui.addFolder('Flow Field');
gui.add(controls, 'enabled').name('Orbit Control');

gui.add(light.position, 'y' , -5,5).name('light.y');
gui.add(light, 'intensity', 0 ,10 ).name('light.intensity');