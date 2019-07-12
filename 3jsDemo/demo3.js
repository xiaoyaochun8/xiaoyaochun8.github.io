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
    camera.position.x = 0;
    camera.position.y = 1200;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = -1;
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
}
var cube2;
var mesh2;
function initCube2() {
    var geometry = new THREE.BoxGeometry( 20, 100, 100 );
    for ( var i = 0; i < geometry.faces.length; i += 2 ) {
        var hex = Math.random() * 0xffffff;
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );

    }
    var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
    mesh2 = new THREE.Mesh( geometry,material);
    //mesh2.position = new THREE.Vector3(300,300,300);
    mesh2.position.x = 300;
    mesh2.position.y = 0;
    mesh2.position.z = 0;
    console.log(mesh2)
    scene.add(mesh2);
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

//     if(mesh2.position.x <= 300 && mesh2.position.x >= 0 && mesh2.position.z >= 0 && mesh2.position.z <= 300){
//       mesh2.position.x-=1;
//       mesh2.position.z+=1;
//     }else if(mesh2.position.x <= 0 && mesh2.position.x > -300 && mesh2.position.z >= 0 && mesh2.position.z <= 300){
//       mesh2.position.x-=1;
//       mesh2.position.z-=1;
//     }else if(mesh2.position.x <= 0 && mesh2.position.x > -300 && mesh2.position.z <= 2 && mesh2.position.z >= -300){
//       mesh2.position.x+=1;
//       mesh2.position.z-=1;
//     }else if(mesh2.position.x >= 0 && mesh2.position.z <= 0){
//       mesh2.position.x+=1;
//       mesh2.position.z+=1;
//     }
// console.log(mesh2.position)
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