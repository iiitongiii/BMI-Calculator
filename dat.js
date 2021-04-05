const gui = new dat.GUI()


var folder1 = gui.addFolder('Flow Field');
gui.add(camera.position, 'y' , -5, 5).name('try');
gui.add(controls, 'enabled').name('Orbit Control')