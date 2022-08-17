var renderer;
var stats;
function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);

    //stats = new Stats();
    //stats.domElement.style.position = 'absolute';
    //stats.domElement.style.left = '0px';
    //stats.domElement.style.top = '0px';
    //document.getElementById('canvas-frame').appendChild(stats.domElement);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 100;
    camera.position.y = 450;
    camera.position.z = 1000;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 0;//1;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
}

var scene;
function initScene() {
    scene = new THREE.Scene();
}

var light;
function initLight() {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
}

function initPOSLine() {

    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( { vertexColors: true } );
    var color1 = new THREE.Color( 0x000000 ), color2 = new THREE.Color( 0x000000 );

    //x
    var p1 = new THREE.Vector3( 0, 0, 0 );
    var p2 = new THREE.Vector3(  300, 0, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //x arrow up
    var p1 = new THREE.Vector3( 280, 20, 0 );
    var p2 = new THREE.Vector3(  300, 0, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //x arrow down
    var p1 = new THREE.Vector3( 280, -20, 0 );
    var p2 = new THREE.Vector3(  300, 0, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //y
    var p1 = new THREE.Vector3( 0, 0, 0 );
    var p2 = new THREE.Vector3(  0, 250, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //y arrow left
    var p1 = new THREE.Vector3( -20, 230, 0 );
    var p2 = new THREE.Vector3(  0, 250, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //y arrow right
    var p1 = new THREE.Vector3( 20, 230, 0 );
    var p2 = new THREE.Vector3(  0, 250, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //z
    var p1 = new THREE.Vector3( 0, 0, 0 );
    var p2 = new THREE.Vector3(  0, 0, 600 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //z arrow left
    var p1 = new THREE.Vector3( -20, 0, 580 );
    var p2 = new THREE.Vector3(  0, 0, 600 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );
    //z arrow right
    var p1 = new THREE.Vector3( 20, 0, 580 );
    var p2 = new THREE.Vector3(  0, 0, 600 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );

    var line = new THREE.Line( geometry, material, THREE.LinePieces );
    scene.add(line);
}

function initGrid(){
    var helper = new THREE.GridHelper( 1000, 50 );
    //helper.setColors( 0x0000ff, 0x808080 );
    scene.add( helper );
}
function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initCube();
	initCube2();
    initGrid();
    initPOSLine();
    animation();
    //renderer.clear();
    //renderer.render(scene, camera);

}

/***************************************************************************************************************/

var stop = true;
function animation()
{
    //renderer.clear();
    //camera.position.x =camera.position.x +1;
    //mesh.position.x-=1;
    //camera.position.x+=1;
    if(!stop){
        doMoveObj();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animation);

    //stats.update();
}
var currObj = mesh;
var currType = 'left';
function moveObj(obj,type){
    stop = false;
    currObj = obj;
    currType = type;
}
function stopMoveObj(){
    stop = true;
}
function resetObjs(){
    stop = true;
    mesh.rotation.x=0;
    mesh.rotation.y=0;
    mesh.rotation.z=0;
    camera.rotation.x = 0;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
    lookAt = {x:0, y:0, z:0};
}
var lookAt = {x:0, y:0, z:0};
function doMoveObj(){
    var obj = currObj;
    var type = currType;
    //i()
    if(obj == 'mesh'){
        if(type == 'a'){
            mesh.rotation.x+=0.01;
        }else if(type == 'b'){
            mesh.rotation.x-=0.01;
        }else if(type == 'c'){
            mesh.rotation.y+=0.01;
        }else if(type == 'd'){
            mesh.rotation.y-=0.01;
        }else if(type == 'e'){
            mesh.rotation.z+=0.01;
        }else if(type == 'f'){
            mesh.rotation.z-=0.01;
        }
    }else if(obj == 'camera'){
        if(type == 'up'){
          camera.lookAt({
              x : lookAt.x,
              y : lookAt.y++,
              z : lookAt.z
          });
        }else if(type == 'down'){
          camera.lookAt({
              x : lookAt.x,
              y : lookAt.y--,
              z : lookAt.z
          });
        }else if(type == 'right'){
          camera.lookAt({
              x : lookAt.x++,
              y : lookAt.y,
              z : lookAt.z
          });
        }else if(type == 'left'){
          camera.lookAt({
              x : lookAt.x--,
              y : lookAt.y,
              z : lookAt.z
          });
        }else if(type == 'forward'){
          camera.lookAt({
              x : lookAt.x,
              y : lookAt.y,
              z : lookAt.z+=3
          });
        }else if(type == 'backward'){
          camera.lookAt({
              x : lookAt.x,
              y : lookAt.y,
              z : lookAt.z-=3
          });
        }
    }
}



/***************************************************************************************************************/


/*
布局：
房子、墙壁、楼梯、山岳、河流、人物、植物、动物、
照相机：
顶部旋转拍、横移拍、飞越拍、穿越拍、围绕物体转圈拍、向左看、向右看、向上看、向下看、
物体：
旋转、移动、缩放
3d模型、贴图：
*/


var cube;
var mesh;
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
	camera.position.x = 0;
    camera.position.y = 500;
    camera.position.z = 1300;
	
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
	
	//地板
	createMesh(createBox(1300, 1, 1300, 0xfaa800), material, 0, 0, 0, 0, 0, 0)
	//墙
	createMesh(createBox(1000, 120, 10), material, 0, 10, 0, 0, 0, 0)
	createMesh(createBox(10, 120, 1000), material, 0, 10, 0, 0, 0, 0)
	//山
	createMesh(createBox(200, 100, 30), material, 550, 0, 0, 0, 0, 0)
	createMesh(createBox(150, 70, 30), material, 550, 0, 30, 0, 0, 0)
	createMesh(createBox(100, 50, 30), material, 550, 0, 60, 0, 0, 0)
	createMesh(createBox(50, 20, 30), material, 550, 0, 90, 0, 0, 0)
	

	//移动cube
	//setInterval(function(){
	//	mesh.position.x += 1
	//},50)
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
		console.log(i)
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
}