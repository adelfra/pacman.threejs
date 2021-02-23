		var THREEx	= THREE

THREEx.Pacman	= function(x){

	x.shape	= 'pacman'






	var container	= new THREE.Object3D;

	if( x.shape === 'pacman' ){
		var geometry	= new THREE.SphereGeometry(0.5, 32, 32)
		var material	= new THREE.MeshPhongMaterial({

		})
		var mesh	= new THREE.Mesh(geometry, material)
		mesh.position.y += 0.5
		container.add(mesh)
	}


	return container;
}
