/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\nconsole.log('Threejs-Version: '+three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\r\n//开关\r\nconst Config = {\r\n    fog: true,\r\n    shadow: true,\r\n    viewFrom: 'front', //front,back,top,botton,left,right\r\n    isDev: false,\r\n};\r\n//场景\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\nif(Config.fog){\r\n    scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__.Fog(0xffffff, 1, 100);\r\n    //scene.fog = new THREE.FogExp2(0xffffff, 0.01);\r\n}\r\n//相机\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\r\nif(Config.viewFrom == 'front'){\r\n    camera.position.z = 130;\r\n    camera.position.y = 25;//0.1;\r\n    camera.position.x = 28;\r\n}else if(Config.viewFrom == 'back'){\r\n    camera.position.z = -170;\r\n    camera.position.y = 25;//0.1;\r\n}else if(Config.viewFrom == 'top'){\r\n    camera.position.z = 0;\r\n    camera.position.y = 270;//0.1;\r\n}else if(Config.viewFrom == 'botton'){\r\n    camera.position.z = 0;\r\n    camera.position.y = -170;//0.1;\r\n}else if(Config.viewFrom == 'left'){\r\n    camera.position.x = -170;\r\n    camera.position.y = 25;//0.1;\r\n}else if(Config.viewFrom == 'right'){\r\n    camera.position.x = 170;\r\n    camera.position.y = 25;//0.1;\r\n}else{\r\n    camera.position.z = 170;\r\n    camera.position.y = 1;//0.1;\r\n}\r\n// camera.lookAt(scene.position);\r\n//const helper = new THREE.CameraHelper( light.shadow.camera );\r\n//scene.add( helper );\r\n\r\n//渲染器\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\nif(Config.shadow){\r\n    renderer.shadowMap.enabled = true;//shadowA\r\n}\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\n//灯光========================================\r\n\r\n//不要光\r\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();\r\n// var texture = new THREE.TextureLoader().load( \"./300.jpeg\" );\r\n// var material = new THREE.MeshStandardMaterial({map:texture});\r\nif(Config.isDev){\r\n    scene.overrideMaterial = material;\r\n}\r\n\r\n//内容========================================\r\n//太阳光月亮光\r\nvar sunMoonGroup = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\r\nvar lightGroup = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\r\n\r\nmakeLand();\r\nmakeTree(10, 40);\r\nmakeTree(25, 0);\r\nmakeTree(35, 40);\r\nmakeTree(35, -50);\r\nmakeTree(45, -50);\r\nmakeTree(0, 50);\r\nmakeTree(-40, 50);\r\nmakeTree(-30, 50);\r\nmakeTree(0, 90);\r\nmakeTree(45, -90);\r\nmakeTree(35, -80);\r\nmakeTree(35, -110);\r\nmakeSun();\r\nmakeMotian();\r\n\r\nvar cnt = 0;\r\nfunction animate() {\r\n    requestAnimationFrame( animate );\r\n    if(!Config.isDev){\r\n    }\r\n    if(camera.position.z < -100){\r\n        camera.position.z = 130;\r\n    }\r\n    if(isPlay){\r\n        camera.position.z -= 0.1;\r\n    }\r\n    renderer.render( scene, camera );\r\n};\r\n\r\nanimate();\r\n\r\nfunction makeMotian(){\r\n    var group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 18, 50, 50, 10 );\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xffcc99});//shadowA\r\n    var cylinder = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cylinder.castShadow = true; //shadowA\r\n    }\r\n    group.add( cylinder );\r\n    cylinder.position.z = 0;\r\n    geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 7, 20, 30, 10 );\r\n    cylinder = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cylinder.castShadow = true; //shadowA\r\n    }\r\n    group.add( cylinder );\r\n    cylinder.position.x = -30;\r\n    geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 7, 20, 30, 6 );\r\n    cylinder = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cylinder.castShadow = true; //shadowA\r\n    }\r\n    group.add( cylinder );\r\n    cylinder.position.x = 30;\r\n    geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 2, 15, 15, 6 );\r\n    material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xffffff});//shadowA\r\n    cylinder = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cylinder.castShadow = true; //shadowA\r\n    }\r\n    group.add( cylinder );\r\n    cylinder.position.x = 2.5;\r\n    cylinder.position.y = 30;\r\n    cylinder.position.z = -1.5;\r\n    scene.add(group);\r\n    group.position.x = -25;\r\n    group.position.z = -25;\r\n    group.rotation.y = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(30);\r\n}\r\nfunction makeSun(){\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry( 3, 32, 32 );\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( { color: 0xFF5151 } );\r\n    var sun = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    sun.position.x = -120;\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry( 2.3, 32, 32 );\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( { color: 0xffffff } );\r\n    var moon = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    moon.position.x = 120;\r\n    sunMoonGroup.add(sun);\r\n    sunMoonGroup.add(moon);\r\n    sunMoonGroup.rotation.z = 4;\r\n    scene.add(sunMoonGroup);\r\n    var lightSun = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( 0xffffff, 1, 10000 );\r\n    lightSun.position.set( -120, 0, 0 );\r\n    if(Config.shadow){\r\n        lightSun.castShadow = true;//shadowA\r\n    }\r\n    var lightMoon = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( 0xffffff, 1, 160 );\r\n    lightMoon.position.set( 120, 0, 0 );\r\n    if(Config.shadow){\r\n        lightMoon.castShadow = true;//shadowA\r\n    }\r\n    lightGroup.add(lightSun);\r\n    lightGroup.add(lightMoon);\r\n    lightGroup.rotation.z = 4;\r\n    scene.add( lightGroup );\r\n    if(Config.isDev){\r\n        lightGroup.visible = false;\r\n    }\r\n}\r\nfunction makeTree(x, z, y){\r\n    var group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.ConeGeometry( 7, 10, 4);\r\n    //var material = new THREE.MeshNormalMaterial();\r\n    //var material = new THREE.MeshBasicMaterial({color:0x007d65});\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xcccc00});//shadowA\r\n    var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cube.castShadow = true; //shadowA\r\n    }\r\n    cube.visible = true;\r\n    cube.position.y = 12;\r\n    group.add(cube);\r\n    \r\n    cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cube.castShadow = true; //shadowA\r\n    }\r\n    cube.visible = true;\r\n    cube.position.y = 6;\r\n    cube.rotation.y = 20;\r\n    group.add(cube);\r\n    \r\n    cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cube.castShadow = true; //shadowA\r\n    }\r\n    cube.visible = true;\r\n    cube.position.y = 0;\r\n    cube.rotation.y = -20;\r\n    group.add(cube);\r\n    \r\n    geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 0.5, 1, 20, 4);\r\n    //material = new THREE.MeshNormalMaterial();\r\n    //material = new THREE.MeshBasicMaterial({color:0x8f4b38});\r\n    material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0x8f4b38});//shadowA\r\n    cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cube.castShadow = true; //shadowA\r\n    }\r\n    cube.visible = true;\r\n    cube.position.y = 0;\r\n    group.add(cube);\r\n    \r\n    scene.add( group );\r\n    group.position.y = y ? y : 5;\r\n    group.position.x = x;\r\n    group.position.z = z;\r\n    //todo 如何计算group高度\r\n    \r\n    group.scale.x = 0.5;\r\n    group.scale.y = 0.5;\r\n    group.scale.z = 0.5;\r\n}\r\nfunction makeLand(){\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 200, 50, 10000);\r\n    //var material = new THREE.MeshNormalMaterial();\r\n    //var material = new THREE.MeshBasicMaterial({color:0xba8448});\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xccff00});//shadowA\r\n    //material.wireframe = true;\r\n    var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n    if(Config.shadow){\r\n        cube.receiveShadow = true;//shadowA\r\n    }\r\n    scene.add( cube );\r\n    cube.position.y = -25;\r\n    //cube.visible = false;\r\n}\n\n//# sourceURL=webpack://proj2/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;