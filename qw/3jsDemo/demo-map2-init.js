var renderer;
var stats;
var camera;
var scene;
var light;
var mesh;
var flag;

var stop = true;
var lookAt = {x:0, y:0, z:0};
var currObj = mesh;
var currType = 'left';

function initThree() {
    //initThree()
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
    
    //initCamera()
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
    
    //initScene()
    scene = new THREE.Scene();
    
    //initLight()
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
    
    var light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(0, 1.5, 2);
    scene.add(light);
    
    //initGrid()
    var helper = new THREE.GridHelper( 1000, 50 );
    //helper.setColors( 0x0000ff, 0x808080 );
    scene.add( helper );
    
    //var axesHelper = new THREE.AxesHelper( 1 );
    //scene.add( axesHelper );
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

function animation()
{
    if(!stop){
        doMoveObj();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animation);

    //stats.update();
}

function threeStart() {
    initThree();
    initPOSLine();
    animation();
    initCube();
}

/***************************************************************************************************************/




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
function setView(type){
    if(type == 'top'){
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
    }else if(type == 'bottom'){
        camera.position.x = 0;
        camera.position.y = -2000;
        camera.position.z = 0;
        camera.up.x = 0;
        camera.up.y = -100;
        camera.up.z = 0;//1;
        camera.lookAt({
            x : 0,
            y : 0,
            z : 0
        });
    }else if(type == 'front'){
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
    }else if(type == 'back'){
        camera.position.x = -100;
        camera.position.y = 500;
        camera.position.z = -1300;
        
        camera.rotation.x = -46.9;
        camera.rotation.y = 0;
        camera.rotation.z = 3.15;
        
        camera.up.x = 0;
        camera.up.y = 0;
        camera.up.z = 0;//1;
        
        //camera.lookAt({
        //    x : 0,
        //    y : 0,
        //    z : 0
        //});
    }else if(type == 'backTurnAround'){
        camera.position.x = 0;
        camera.position.y = 500;
        camera.position.z = -1300;
        
        camera.rotation.x = -46.9;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
        
        camera.up.x = 0;
        camera.up.y = 0;
        camera.up.z = 0;//1;
        
        //camera.lookAt({
        //    x : 0,
        //    y : 0,
        //    z : 0
        //});
    }
}

/***************************************************************************************************************/

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
        camera.position.z -= 0.1
        camera.rotation.z -= 0.001
        flag.position.z -= 0.1
        flag.rotation.z -= 0.03
    },5)
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
        camera.position.z -= 0.2
        flag.position.z -= 0.2
    },5)
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
        camera.position.x += 0.2
    },5)
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
        camera.rotation.z += 0.001
    },5)
}

/***************************************************************************************************************/

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
    mesh.position = new THREE.Vector3(0,0,0);
    scene.add(mesh);

    mesh.position.x = px
    mesh.position.y = py
    mesh.position.z = pz

    mesh.rotation.x = rx
    mesh.rotation.y = ry
    mesh.rotation.z = rz

    return mesh
}
