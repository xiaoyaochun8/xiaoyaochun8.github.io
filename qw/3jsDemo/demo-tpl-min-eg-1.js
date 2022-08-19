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
var mesh2;
var group;
var stars;
function initWorldObjects() {
    add_Cube_Obj();
    add_Group_Obj();
    add_Particle_Obj();
}

//--刷新世界物体
var speed = 0.005;
function changeWorldObjs(){
    set_Cube_Anim();
    set_Group_Anim();
    set_Particle_Anim();
}

function add_Cube_Obj() {
    /************************ 正方体 ******************************/
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
function add_Group_Obj() {
    /************************ 分组和绕物体旋转 ******************************/
    var geometry = new THREE.BoxGeometry( 30, 30, 30 );
    for ( var i = 0; i < geometry.faces.length; i += 2 ) {
        var hex = Math.random() * 0xffffff;
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );

    }
    var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
    mesh2 = new THREE.Mesh( geometry,material);
    mesh2.position = new THREE.Vector3(0,0,0);
    //scene.add(mesh2);
    mesh2.position.x = 200;
    mesh2.position.y = 0;
    mesh2.position.z = 0;
    
    group = new THREE.Group()
    group.add(mesh2)
    scene.add(group)
}
function add_Particle_Obj() {
    /************************ 粒子系统 ******************************/
    var starsGeometry = new THREE.Geometry(); // an empty geometry
    for (var i = 0; i < 1000; i++) {
        // create a new vertex with random coordinates between -1 and 1
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        //vertex.multiplyScalar(67);
    
        starsGeometry.vertices.push(vertex);
    }
    var starsMaterial = new THREE.ParticleBasicMaterial({
        color: 0xf94fd4,
        size: 3,
        sizeAttenuation: false
    });
    stars = new THREE.ParticleSystem(starsGeometry, starsMaterial);
    stars.scale.set(100, 100, 100);
    stars.name = 'stars';
    scene.add(stars);
}
function set_Cube_Anim(){
    mesh.rotation.y -= speed;
}
function set_Group_Anim(){
    mesh2.rotation.y -= speed*7;
    group.rotation.y -= speed;
}
function set_Particle_Anim(){
    stars.rotation.y += 0.01
}

//--加速减速
function cube_changeSpeed(){
    var text = '慢'
    if(speed == 0.005){
        speed = 0.1
        text = '快';
    }else{
        speed = 0.005
    }
    document.getElementById('text').innerHTML = text;
}

//--------------------------按钮事件---------------------------//
//--爆炸
var scale = 100;
function particle_pong(){
    var it = setInterval(function(){
        if(scale > 300){
            clearInterval(it)
        }
        scale = scale + 6;
        stars.scale.set(scale, scale, scale);
    },1)
}
//--隐藏/显示
var particleShow = true;
function particle_show(){
    if(particleShow){
        scene.remove(stars);
    }else{
        scene.add(stars);
    }
    particleShow = !particleShow;
}

