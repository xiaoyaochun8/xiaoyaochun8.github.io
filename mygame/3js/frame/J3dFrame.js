import * as THREE from 'three';
import { ArcballControls } from 'three/addons/controls/ArcballControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { Sky } from 'three/addons/objects/Sky.js';

class J3dFrame{
    //fn: constructor
    constructor() {
        this.clock = null;
        this.scene = null;
        this.camera = null;
        this.cameraGroup = null;
        this.renderer = null;
        this.light = null;
		this.THREE = THREE;
    }
    //fn: outputVersion
    outputVersion(){
        console.log('r100')
    }
    //fn: degToRad
    degToRad(deg){
        return THREE.MathUtils.degToRad( deg );
    }
    getOptions(curOptions, newOptions){
        if(newOptions){
            for(var i in newOptions){
                curOptions[i] = newOptions[i];
            }
        }
        return curOptions;
    }
    //fn: init
    init(options){
        var curOptions = {
            fov : 75,
            aspect : window.innerWidth / window.innerHeight,
            near : 0.1,
            far : 10,
        };
        curOptions = this.getOptions(curOptions, options);
        console.log('Threejs-Version: '+THREE.REVISION);
        console.log('support-3js: v0.162.0 ~ v0.178.0');
        this.clock = new THREE.Clock();
        //scene
        this.scene = new THREE.Scene();
        //camera
        this.camera = new THREE.PerspectiveCamera( curOptions.fov, curOptions.aspect, curOptions.near, curOptions.far );
        this.cameraGroup = new THREE.Group();
        this.cameraGroup.add(this.camera);
        this.cameraGroup.position.y = 1;
        this.cameraGroup.position.z = 5;
        this.scene.add(this.cameraGroup);
        //renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
    }
    //fn: render
    render(){
        this.renderer.render( this.scene, this.camera );
    }
    //fn: setAnimationLoop
    setAnimationLoop(animate){
        this.renderer.setAnimationLoop(animate);
    }
    //fn: update
    update(){
        if(this.flyControls){
            const delta = this.clock.getDelta();
            this.flyControls.update( delta );
        }
    }
    //fn: addLight
    addLight(){
        //light
        this.light = new THREE.AmbientLight( 0xffff00 ); // soft white light
        this.scene.add( this.light );
    }
    //fn: addHelpers
    addHelpers(options){
        var curOptions = {
            size : 100,
        };
        if(options){
            if(options.size){
                curOptions.size = options.size;
            }
        }
        //helpers
        const axesHelper = new THREE.AxesHelper( curOptions.size );
        this.scene.add( axesHelper );
        //const helper = new THREE.CameraHelper( camera );
        //this.scene.add( helper );
        const gridHelper = new THREE.GridHelper( curOptions.size, 10 );
        this.scene.add( gridHelper );
        const radius = 10;
        const sectors = 16;
        const rings = 8;
        const divisions = 64;
        const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
        this.scene.add( helper );
    }
    //fn: addFlyControls
    addFlyControls(options, newFlyCtrl){
        var curOptions = {
            movementSpeed : 20,
            rollSpeed : 24,
        };
        if(options){
            if(options.movementSpeed){
                curOptions.movementSpeed = options.movementSpeed;
            }
            if(options.rollSpeed){
                curOptions.rollSpeed = options.rollSpeed;
            }
        }
        this.flyControls = new FlyControls( this.cameraGroup, this.renderer.domElement );
        if(newFlyCtrl){
            this.flyControls = new newFlyCtrl( this.cameraGroup, this.renderer.domElement );
        }
        this.flyControls.movementSpeed = curOptions.movementSpeed;
        this.flyControls.domElement = this.renderer.domElement;
        this.flyControls.rollSpeed = Math.PI / curOptions.rollSpeed;
        this.flyControls.autoForward = false;
        this.flyControls.dragToLook = true;
    }
    //fn: addArcballControls
    addArcballControls(){
        ////一拉就黑
        //var arcballControls = new ArcballControls( this.camera, this.renderer.domElement, this.scene );
        //arcballControls.addEventListener( 'change', function () {
        //    this.renderer.render( this.scene, this.camera );
        //} );
        //arcballControls.update();
    }
    addJoyStick(App){
        // 设置选项
        const optionsLeft = {
          zone: document.getElementById('joystickLeft'),
          mode: 'static',  // 固定模式
          position: {top: '70%', left: '20%'},  // 初始位置
          color: 'red',
        };
        // 初始化摇杆
        const managerLeft = nipplejs.create(optionsLeft);
        // 添加事件监听器
        managerLeft.on('start', function(evt, data){
            console.log(evt, data);
        });
        managerLeft.on('move', function(evt, data){
            console.log(evt, data);
            if('angle' in data.direction){
                if(data.direction.angle == 'left'){
                    App.flyControls.moveState.left = 1;
                }else if(data.direction.angle == 'right'){
                    App.flyControls.moveState.right = 1;
                }else if(data.direction.angle == 'up'){
                    App.flyControls.moveState.forward = 1;
                }else if(data.direction.angle == 'down'){
                    App.flyControls.moveState.back = 1;
                }
                App.flyControls.updateMovementVector();
                App.flyControls.updateRotationVector();
            }
        });
        managerLeft.on('end', function(evt, data){
            console.log(evt, data);
            App.flyControls.moveState.left = 0;
            App.flyControls.moveState.right = 0;
            App.flyControls.moveState.forward = 0;
            App.flyControls.moveState.back = 0;
            App.flyControls.updateMovementVector();
            App.flyControls.updateRotationVector();
        });
        // 设置选项
        const optionsRight = {
          zone: document.getElementById('joystickRight'),
          mode: 'static',  // 固定模式
          position: {top: '70%', left: '80%'},  // 初始位置
          color: 'red',
        };
        // 初始化摇杆
        const managerRight = nipplejs.create(optionsRight);
        // 添加事件监听器
        managerRight.on('start', function(evt, data){
            console.log(evt, data);
        });
        managerRight.on('move', function(evt, data){
            console.log(evt, data);
            if('angle' in data.direction){
                if(data.direction.angle == 'left'){
                    //_moveState.left = 1;
                    App.flyControls.moveState.yawLeft = 1;
                }else if(data.direction.angle == 'right'){
                    App.flyControls.moveState.yawRight = 1;
                }else if(data.direction.angle == 'up'){
                    App.flyControls.moveState.pitchUp = 1;
                }else if(data.direction.angle == 'down'){
                    App.flyControls.moveState.pitchDown = 1;
                }
                App.flyControls.updateMovementVector();
                App.flyControls.updateRotationVector();
            }
        });
        managerRight.on('end', function(evt, data){
            console.log(evt, data);
            App.flyControls.moveState.yawLeft = 0;
            App.flyControls.moveState.yawRight = 0;
            App.flyControls.moveState.pitchUp = 0;
            App.flyControls.moveState.pitchDown = 0;
            App.flyControls.updateMovementVector();
            App.flyControls.updateRotationVector();
        });
    }
    //fn: addSky
    addSky(){
        const sky = new Sky();
        sky.scale.setScalar( 450000 );
        const phi = THREE.MathUtils.degToRad( 90 );
        const theta = THREE.MathUtils.degToRad( 180 );
        const sunPosition = new THREE.Vector3().setFromSphericalCoords( 1, phi, theta );
        sky.material.uniforms.sunPosition.value = sunPosition;
        this.scene.add( sky );
    }
    //fn: addLand
    addLand(){
        var geometry = new THREE.BoxGeometry( 200, 2, 200);
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh( geometry, material );
        this.scene.add( mesh );
        mesh.position.y = -1;
    }
    //fn: addModelToScene
    addModelToScene(model){
        this.scene.add(model);
    }
    //fn: makeModelOfWheel
    makeModelOfWheel(posX, posY, posZ, rotX, rotY, rotZ, options){
        const geometry = new THREE.TorusGeometry( 10, 1, 16, 100 ); 
        const material = new THREE.MeshNormalMaterial(); 
        const torus = new THREE.Mesh( geometry, material );
        torus.position.x = posX;
        torus.position.y = posY;
        torus.position.z = posZ;
        torus.rotation.x = rotX;
        torus.rotation.y = rotY;
        torus.rotation.z = rotZ;
        this.scene.add( torus );
        return torus;
    }
    //fn: makeModelOfCube
    makeModelOfCube(){
        //const material = new THREE.MeshBasicMaterial({
        //  color: 0xFF8844,
        //  map: this.loadColorTexture('./../Texture/newTexture.png'),
        //});
        const materials = [
            new THREE.MeshBasicMaterial({map: this.loadColorTexture('./../Texture/newTexture.png')}),
            new THREE.MeshBasicMaterial({map: this.loadColorTexture('./../Texture/Ice002_1K-JPG_Color.jpg')}),
            new THREE.MeshBasicMaterial({map: this.loadColorTexture('./../Texture/Ice002_1K-JPG_Displacement.jpg')}),
            new THREE.MeshBasicMaterial({map: this.loadColorTexture('./../Texture/Ice002_1K-JPG_NormalGL.jpg')}),
            new THREE.MeshBasicMaterial({map: this.loadColorTexture('./../Texture/Ice002_1K-JPG_Roughness.jpg')}),
            new THREE.MeshBasicMaterial({map: this.loadColorTexture('./../Texture/Ice003_1K-JPG_Color.jpg')}),
        ];
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const cube = new THREE.Mesh(geometry, materials);
        this.scene.add( cube );
        return cube;
    }
    //fn: loadColorTexture
    loadColorTexture( path ) {
        const loader = new THREE.TextureLoader();
        const texture = loader.load( path );
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
    }
    //fn: loadAudio
    loadAudio(filePath, isLoop){
        // create an AudioListener and add it to the camera
        const listener = new THREE.AudioListener();
        this.camera.add( listener );

        // create a global audio source
        const sound = new THREE.Audio( listener );

        // load a sound and set it as the Audio object's buffer
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load( filePath, function( buffer ) {
            sound.setBuffer( buffer );
            sound.setLoop( isLoop );
            sound.setVolume( 0.5 );
            sound.play();
        });
    }
    //fn: loadModel
    loadModel(filePath, scene, scale, posX, posY, posZ, callBack){
        var arr = filePath.split('.');
        var len = arr.length;
        var fileType = arr[len-1];
        if(fileType == 'gltf'){
            this.loadModelGltf(filePath, scene, scale, posX, posY, posZ, callBack);
        }else if(fileType == 'obj'){
            this.loadModelObj(filePath, scene, scale, posX, posY, posZ, callBack);
        }else if(fileType == 'fbx'){
            this.loadModelFbx(filePath, scene, scale, posX, posY, posZ, callBack);
        }else{
            console.log('file type error');
        }
    }
    //fn: loadModelGltf
    loadModelGltf(filePath, scene, scale, posX, posY, posZ, callBack){
        var model;
        // Instantiate a loader
        const loader = new GLTFLoader();
        // Optional: Provide a DRACOLoader instance to decode compressed mesh data
        // const dracoLoader = new DRACOLoader();
        // dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
        // loader.setDRACOLoader( dracoLoader );
        // Load a glTF resource
        loader.load(
            // resource URL
            filePath,
            // called when the resource is loaded
            function ( gltf ) {
                model = gltf;
                gltf.scene.scale.x = scale;
                gltf.scene.scale.y = scale;
                gltf.scene.scale.z = scale;
                gltf.scene.position.x = posX;
                gltf.scene.position.y = posY;
                gltf.scene.position.z = posZ;
                // gltf.animations; // Array<THREE.AnimationClip>
                // gltf.scene; // THREE.Group
                // gltf.scenes; // Array<THREE.Group>
                // gltf.cameras; // Array<THREE.Camera>
                // gltf.asset; // Object
                gltf.scene.traverse((child) => {
                    if(child.isMesh){
                        //console.log(child)
                        const newMaterial = new THREE.MeshNormalMaterial();
                        newMaterial.side = THREE.DoubleSide;
                        child.material = newMaterial;
                    }
                });
                if(callBack){
                    callBack( gltf.scene );
                }else{
                    scene.add( gltf.scene );
                }
            },
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
        return model;
    }
    //fn: loadModelFbx
    loadModelFbx(filePath, scene, scale, posX, posY, posZ, callBack){
        var model;
        // Instantiate a loader
        const loader = new FBXLoader();
        loader.load( 
            filePath, 
            function ( fbx ) {
                model = fbx;
                fbx.scale.x = scale;
                fbx.scale.y = scale;
                fbx.scale.z = scale;
                fbx.position.x = posX;
                fbx.position.y = posY;
                fbx.position.z = posZ;
                fbx.traverse( function ( child ) {
                    if ( child.isMesh ) {
                        const newMaterial = new THREE.MeshNormalMaterial();
                        newMaterial.side = THREE.DoubleSide;
                        child.material = newMaterial;
                    }
                });
                if(callBack){
                    callBack( fbx );
                }else{
                    scene.add( fbx );
                }
            },
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
        return model;
    }
    //fn: loadModelObj
    loadModelObj(filePath, scene, scale, posX, posY, posZ, callBack){
        var model;
        // instantiate a loader
        const loader = new OBJLoader();
        // load a resource
        loader.load(
            // resource URL
            filePath,
            // called when resource is loaded
            function ( obj ) {
                model = obj;
                obj.scale.x = scale;
                obj.scale.y = scale;
                obj.scale.z = scale;
                obj.position.x = posX;
                obj.position.y = posY;
                obj.position.z = posZ;
                obj.traverse( function ( child ) {
                    if ( child.isMesh ) {
                        const newMaterial = new THREE.MeshNormalMaterial();
                        newMaterial.side = THREE.DoubleSide;
                        child.material = newMaterial;
                    }
                });
                if(callBack){
                    callBack( obj );
                }else{
                    scene.add( obj );
                }
            },
            // called when loading is in progress
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
        return model;
    }
    //fn: addText3D
    addText3D(text, fontPath, scene, scale, posX, posY, posZ){
        var loader = new FontLoader();
        loader.load( fontPath, function ( font ) {
            var textGeo = new TextGeometry( text, {
                font: font,
                size: 100,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5
            } );
            textGeo.computeBoundingBox();
            const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
            var materials = [
                new THREE.MeshNormalMaterial( { color: 0xffffff, flatShading: true } ), // front
                new THREE.MeshNormalMaterial( { color: 0xffffff } ) // side
            ];
            var textMesh1 = new THREE.Mesh( textGeo, materials );
            scene.add( textMesh1 );
            textMesh1.scale.set( scale, scale, scale );
            textMesh1.position.set( posX, posY, posZ );
        } );
    }
    //fn: addVideo
    addVideo(videoElement, options){
        var curOptions = {
            width : 5,
            height : 3,
        };
        curOptions = this.getOptions(curOptions, options);
        var texture = new THREE.VideoTexture( videoElement );
        var material = new THREE.MeshBasicMaterial({map:texture});
        material.side = THREE.DoubleSide;
        var geometry = new THREE.PlaneGeometry(curOptions.width, curOptions.height);
        var mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
        return mesh;
    }
}

export { J3dFrame };