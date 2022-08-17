/*
布局：
房子、墙壁、楼梯、山岳、河流、人物、植物、动物、
照相机：
顶部旋转拍、横移拍、飞越拍、穿越拍、围绕物体转圈拍、向左看、向右看、向上看、向下看、
物体：
旋转、移动、缩放
3d模型、贴图：
*/


function initCube() {
  var geometry = new THREE.BoxGeometry( 100, 100, 100 );
  for ( var i = 0; i < geometry.faces.length; i += 2 ) {
      var hex = Math.random() * 0xffffff;
      geometry.faces[ i ].color.setHex( hex );
      geometry.faces[ i + 1 ].color.setHex( hex );

  }
  var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
  mesh = new THREE.Mesh( geometry,material);
  mesh.position = new THREE.Vector3(0,0,0);
  scene.add(mesh);
	
	mesh.position.x = 0
	mesh.position.y = 0
	mesh.position.z = 0
	
	mesh.rotation.x = 0
	mesh.rotation.y = 0
	mesh.rotation.z = 0
}
function initCube2() {
	
	/////////////////////////////////
	camera.position.x = -100;
  camera.position.y = 600;
  camera.position.z = 1700;
	
	camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 0;//1;
  camera.lookAt({
      x : 0,
      y : 0,
      z : 0
  });
	
	//新建材质
  var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
    
	//新建几何体
	//使用几何体和材质创建网格对象
	createMesh(createBox(550, 120, 60), material, 0, 10, 300, 0, 0, 0)
	createMesh(createBox(550, 120, 60), material, 0, 10, -320, 0, 0, 0)
	createMesh(createBox(700, 120, 60), material, -300, 10, -50, 0, 300, 0)
	createMesh(createBox(700, 120, 60), material, 300, 10, -50, 0, 300, 0)
	
	
	//墙
	createMesh(createBox(1000, 120, 10), material, 0, 10, 0, 0, 0, 0)
	createMesh(createBox(10, 120, 1000), material, 0, 10, 0, 0, 0, 0)
	//山
	createMesh(createBox(200, 100, 30), material, 550, 0, 0, 0, 0, 0)
	createMesh(createBox(150, 70, 30), material, 550, 0, 30, 0, 0, 0)
	createMesh(createBox(100, 50, 30), material, 550, 0, 60, 0, 0, 0)
	createMesh(createBox(50, 20, 30), material, 550, 0, 90, 0, 0, 0)
	
	//标记
	flag = createMesh(createBox(10, 10, 100), material, -50, 500, 1300, 0, 120, 0)
	
	var material = new THREE.MeshBasicMaterial( { map:new THREE.TextureLoader().load("res/caodi.jpeg") } );
	//地板
	createMesh(createBox(1600, 1, 1600), material, 0, 0, 0, 0, 0, 0)

	//移动cube
	//setInterval(function(){
	//	mesh.position.x += 1
	//},50)
	
	//var modelUrl = 'res/GroundVehicle.glb';     //定义所使用模型路径
	//var loader = new THREE.GLTFLoader()
	//loader.load( modelUrl, function ( gltf ) {
    //    gltf.scene.name = '3dmodel';
    //    this.setContent(gltf.scene);
    //    
    //    scene.add( gltf.scene );
    //}, undefined, function ( e ) {
    //    console.error( e );
    //} );
	
	//var mtlLoader = new THREE.MTLLoader();//mtl材质加载器 
	//mtlLoader.load( 'box.mtl', mtl);//加载.mtl文件，执行mtl函数 
	//function mtl( material ) { 
	//	var objLoader = new THREE.OBJLoader();//obj模型加载器 
	//	objLoader.setMaterials( material );//mtl材质赋值给obj模型 
	//	objLoader.load( 'box.obj',obj );//加载.obj文件，执行obj函数 
	//} 
	//function obj( object3D ) { 
	//	object3D.scale.set(100,100,100);//放大object3D对象 
	//	scene.add( object3D );//object3D对象插入场景对象 
	//}

}





function moveToBack2(){
	//调整照相机
	camera.position.x = 0//-100;
  camera.position.y = 150//600;
  camera.position.z = 1300//1700;
	flag.position.x = 0//-100;
	flag.position.y = 150//600;
  flag.position.z = 1000//1700;
	camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 0;//1;
  camera.lookAt({
      x : 0,
      y : 0,
      z : 0
  });
	//飞越地图
	setInterval(function(){
		camera.position.z -= 1//2
		camera.rotation.z -= 0.01
		flag.position.z -= 1//2
		flag.rotation.z -= 0.3
	},50)
}
function moveToBack(){
	//调整照相机
	camera.position.x = -100;
  camera.position.y = 600;
  camera.position.z = 1700;
	camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 0;//1;
  camera.lookAt({
      x : 0,
      y : 0,
      z : 0
  });
	//飞越地图
	setInterval(function(){
		camera.position.z -= 2
		flag.position.z -= 2
	},50)
}
function moveToRight(){
	//调整照相机
	camera.position.x = -100;
  camera.position.y = 600;
  camera.position.z = 1700;
	camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 0;//1;
  camera.lookAt({
      x : 0,
      y : 0,
      z : 0
  });
	//平移地图
	setInterval(function(){
		camera.position.x += 2
	},50)
}
function roundEarth(){
	//调整照相机
	camera.position.x = 0;
  camera.position.y = 2000;
  camera.position.z = 0;
	camera.up.x = 0;
  camera.up.y = 100;
  camera.up.z = 0;//1;
  camera.lookAt({
      x : 0,
      y : 0,
      z : 0
  });
	//旋转地图
	setInterval(function(){
		camera.rotation.z += 0.01
	},50)
}
function createBox(lenth, width, height, color){
  var geometry = new THREE.BoxGeometry( lenth, width, height );//长宽高
  for ( var i = 0; i < geometry.faces.length; i += 2 ) {
      var hex = (i+3)/10 * 0xffffff;
  if(color){
    hex = color
  }
      geometry.faces[ i ].color.setHex( hex );
      geometry.faces[ i + 1 ].color.setHex( hex );

  }
  return geometry
}
function createMesh(geometry, material, px, py, pz, rx, ry, rz){
	var mesh = new THREE.Mesh(geometry, material);
  mesh.position = new THREE.Vector3(0,0,0);//
	console.log(mesh)
  scene.add(mesh);
	
	mesh.position.x = px
	mesh.position.y = py
	mesh.position.z = pz
	
	mesh.rotation.x = rx
	mesh.rotation.y = ry
	mesh.rotation.z = rz
	
	return mesh
}
