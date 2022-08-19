var renderer;
function _initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;
function _initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 300;
    camera.position.z = 1000;
    camera.rotation.x = 0;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
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
function _initScene() {
    scene = new THREE.Scene();
}

var light;
function _initLight() {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
}

var grid;
function _initGrid(){
    var grid = new THREE.GridHelper( 1000, 50 );
    //grid.setColors( 0x0000ff, 0x808080 );
    scene.add( grid );
}

var stats;
function _initStats() {
    //stats = new Stats();
    //stats.domElement.style.position = 'absolute';
    //stats.domElement.style.left = '0px';
    //stats.domElement.style.top = '0px';
    //document.getElementById('canvas-frame').appendChild(stats.domElement);
}

function threeStart() {
    _initThree();
    _initCamera();
    _initScene();
    _initLight();
    //_initGrid();
    //_initStats();
    //----------
    initWorldObjects();
    _animation();
}

function _animation(){
    changeWorldObjs();
    renderer.render(scene, camera);
    requestAnimationFrame(_animation);
    //stats.update();
}

//--------------------------------------------------------------------------------------------------------
var mesh;
function initWorldObjects() {
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
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    mesh.rotation.x = 0;
    mesh.rotation.y = 0;
    mesh.rotation.z = 0;
}

var speed = 0.005;
function changeWorldObjs(){
    mesh.rotation.y -= speed;
}

function changeSpeed(){
    var text = '慢速'
    if(speed == 0.005){
        speed = 0.1
        text = '快速';
    }else{
        speed = 0.005
    }
    document.getElementById('text').innerHTML = text;
}
