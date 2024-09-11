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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n            console.log('Threejs-Version: '+three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\r\n            console.log('appVer:1.001');\r\n            //开关\r\n            const Config = {\r\n                fog: false,\r\n                shadow: true,\r\n                viewFrom: 'front', //front,back,top,botton,left,right\r\n                isDev: false,\r\n            };\r\n            //场景\r\n            const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n            if(Config.fog){\r\n                //scene.fog = new THREE.Fog(0xffffff, 0.1, 100);\r\n                scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__.FogExp2(0xffffff, 0.01);\r\n            }\r\n            //相机\r\n            const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\r\n            if(Config.viewFrom == 'front'){\r\n                camera.position.z = 150;\r\n                camera.position.y = 45;//0.1;\r\n            }else if(Config.viewFrom == 'back'){\r\n                camera.position.z = -170;\r\n                camera.position.y = 25;//0.1;\r\n            }else if(Config.viewFrom == 'top'){\r\n                camera.position.z = 0;\r\n                camera.position.y = 170;//0.1;\r\n            }else if(Config.viewFrom == 'botton'){\r\n                camera.position.z = 0;\r\n                camera.position.y = -170;//0.1;\r\n            }else if(Config.viewFrom == 'left'){\r\n                camera.position.x = -170;\r\n                camera.position.y = 25;//0.1;\r\n            }else if(Config.viewFrom == 'right'){\r\n                camera.position.x = 170;\r\n                camera.position.y = 25;//0.1;\r\n            }else{\r\n                camera.position.z = 170;\r\n                camera.position.y = 1;//0.1;\r\n            }\r\n            camera.lookAt(scene.position);\r\n            //const helper = new THREE.CameraHelper( light.shadow.camera );\r\n            //scene.add( helper );\r\n            \r\n            //渲染器\r\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\n            if(Config.shadow){\r\n                renderer.shadowMap.enabled = true;//shadowA\r\n            }\r\n            renderer.setSize( window.innerWidth, window.innerHeight );\r\n            document.body.appendChild( renderer.domElement );\r\n\r\n            //灯光========================================\r\n\r\n            //不要光\r\n            var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();\r\n            if(Config.isDev){\r\n            \tscene.overrideMaterial = material;\r\n            }\r\n            \r\n            \r\n            //内容========================================\r\n            //太阳光月亮光\r\n\r\n            makeLand();\r\n            for(var i=50;i>-50;i-=10){\r\n                for(var j=50;j>-50;j-=10){\r\n                    makeTree(j, i);\r\n                }\r\n            }\r\n            \r\n            \r\n            const light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( 0x404040, 1 ); // soft white light\r\n            scene.add( light );\r\n                        \r\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 20, 20, 20);\r\n            var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xccff00});//shadowA\r\n            var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n            cube.castShadow = true;//shadowA\r\n            scene.add( cube );\r\n            cube.position.set( 50, -20, 65 );\r\n            var spotLight = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight( 0xff0000, 1, 10000, three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(10) );\r\n            spotLight.position.set( 50, 60, 20 );\r\n            spotLight.castShadow = true;\r\n            spotLight.target = cube;\r\n            scene.add( spotLight );\r\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 5, 5, 10, 32 );\r\n            var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( { color: 0xff0000 } );\r\n            var moon = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n            moon.position.set( 50, 30, 20 );\r\n            scene.add(moon);\r\n\r\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 20, 20, 20);\r\n            var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xccff00});//shadowA\r\n            var cube2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n            cube2.castShadow = true;//shadowA\r\n            scene.add( cube2 );\r\n            cube2.position.set( 100, -20, 65 );\r\n            var spotLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight( 0xffffff, 1, 10000, three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(10) );\r\n            spotLight2.position.set( 100, 100, 20 );\r\n            spotLight2.castShadow = true;\r\n            spotLight2.target = cube2;\r\n            scene.add( spotLight2 );\r\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 5, 5, 10, 32 );\r\n            var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( { color: 0xffffff } );\r\n            var moon2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n            moon2.position.set( 100, 40, 20 );\r\n            scene.add(moon2);\r\n\r\n            \r\n            var cnt = 0;\r\n            function animate() {\r\n                requestAnimationFrame( animate );\r\n                if(!Config.isDev){\r\n                    if(isPlay){\r\n                        if(spotLight.position.x < -60){\r\n                            spotLight.position.x = 60;\r\n                        }\r\n                        if(spotLight2.position.x < -60){\r\n                            spotLight2.position.x = 60;\r\n                        }\r\n                        spotLight.position.x -= speed;\r\n                        moon.position.x = spotLight.position.x;\r\n                        cube.position.x = spotLight.position.x;\r\n                        spotLight2.position.x -= speed2;\r\n                        moon2.position.x = spotLight2.position.x;\r\n                        cube2.position.x = spotLight2.position.x;\r\n                    }\r\n                }\r\n                renderer.render( scene, camera );\r\n            };\r\n            animate();\r\n            \r\n            function makeTree(x, z, y){\r\n                var group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\r\n                var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.ConeGeometry( 7, 10, 4);\r\n                var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xcccc00});//shadowA\r\n                var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n                if(Config.shadow){\r\n                    cube.castShadow = true; //shadowA\r\n                }\r\n                cube.position.y = 12;\r\n                group.add(cube);\r\n                cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n                if(Config.shadow){\r\n                    cube.castShadow = true; //shadowA\r\n                }\r\n                cube.position.y = 6;\r\n                cube.rotation.y = 20;\r\n                group.add(cube);\r\n                cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n                if(Config.shadow){\r\n                    cube.castShadow = true; //shadowA\r\n                }\r\n                cube.position.y = 0;\r\n                cube.rotation.y = -20;\r\n                group.add(cube);\r\n                geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry( 0.5, 1, 20, 4);\r\n                material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0x8f4b38});//shadowA\r\n                cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n                if(Config.shadow){\r\n                    cube.castShadow = true; //shadowA\r\n                }\r\n                cube.position.y = 0;\r\n                group.add(cube);\r\n                scene.add( group );\r\n                group.position.y = y ? y : 5;\r\n                group.position.x = x;\r\n                group.position.z = z;\r\n                //todo 如何计算group高度\r\n                group.scale.x = 0.5;\r\n                group.scale.y = 0.5;\r\n                group.scale.z = 0.5;\r\n            }\r\n            function makeLand(){\r\n                var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 500, 10, 200);\r\n                var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({color:0xccff00});//shadowA\r\n                //material.wireframe = true;\r\n                var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n                if(Config.shadow){\r\n                    cube.castShadow = true; //shadowA\r\n                    cube.receiveShadow = true;//shadowA\r\n                }\r\n                scene.add( cube );\r\n                cube.position.y = -5;\r\n            }\n\n//# sourceURL=webpack://proj2/./src/index.js?");

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