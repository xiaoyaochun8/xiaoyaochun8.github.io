/*
布局：
房子、墙壁、楼梯、山岳、河流、人物、植物、动物、
照相机：
顶部旋转拍、横移拍、飞越拍、穿越拍、围绕物体转圈拍、向左看、向右看、向上看、向下看、
物体：
旋转、移动、缩放
---
3d模型、贴图：
绕轴旋转、粒子系统：
http://t.zoukankan.com/hsprout-p-7880484.html
*/




function initCube() {
    
    camera.position.x = -0;
    camera.position.y = 600;
    camera.position.z = 1500;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 0;//1;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
    
    
    //粒子系统
    var starsGeometry = new THREE.Geometry(); // an empty geometry
    for (var i = 0; i < 2000; i++) {
        // create a new vertex with random coordinates between -1 and 1
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        //vertex.multiplyScalar(67);
    
        starsGeometry.vertices.push(vertex);
    }
    var starsMaterial = new THREE.ParticleBasicMaterial({
        color: Math.random() * 0xffffff,
        size: 3,
        sizeAttenuation: false
    });
    var stars = new THREE.ParticleSystem(starsGeometry, starsMaterial);
    stars.scale.set(300, 300, 300);
    stars.name = 'stars';
    scene.add(stars);
    setInterval(function(){
        scene.getObjectByName('stars').rotation.y += 0.01
    },50)

   
    //创建箭头标记
    var geometry = new THREE.ConeGeometry( 5, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    flag = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
        color: 0xff0000,
        specular: 0xffff00,
        shininess: 100
    }) );
    scene.add( flag );
    flag.position.x = -40
    flag.position.y = 500
    flag.position.z = 1450
    flag.rotation.x = 0
    flag.rotation.y = 150
    flag.rotation.z = -300
    
    //新建材质
    var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
    //地板贴图材质
    var materialFloor = new THREE.MeshBasicMaterial( { map:new THREE.TextureLoader().load("res/caodi.jpeg") } );
    
    //创建中心几何体
    mesh = createMesh(createBox(100, 100, 100), material, 0, 0, 0, 0, 0, 0)
    

    
    //新建几何体
    //使用几何体和材质创建网格对象
    
    //房子
    //地板
    createMesh(createBox(1600, 1, 1600), materialFloor, 0, 0, 0, 0, 0, 0)
    //前
    createMesh(createBox(550, 120, 60), material, 0, 10, 300, 0, 0, 0)
    //后
    createMesh(createBox(550, 120, 60), material, 0, 10, -320, 0, 0, 0)
    //左
    createMesh(createBox(700, 120, 60), material, -300, 10, -50, 0, 300, 0)
    //右
    createMesh(createBox(700, 120, 60), material, 300, 10, -50, 0, 300, 0)
    //墙
    createMesh(createBox(1000, 120, 10), material, 0, 10, 0, 0, 0, 0)
    createMesh(createBox(10, 120, 1000), material, 0, 10, 0, 0, 0, 0)
    
    //山体
    createMesh(createBox(200, 100, 30), material, 550, 0, 0, 0, 0, 0)
    createMesh(createBox(150, 70, 30), material, 550, 0, 30, 0, 0, 0)
    createMesh(createBox(100, 50, 30), material, 550, 0, 60, 0, 0, 0)
    createMesh(createBox(50, 20, 30), material, 550, 0, 90, 0, 0, 0)
    
    
//mesh.translateX(100);

//var axis = new THREE.Vector3(1,1,1);//向量axis
//mesh.translateOnAxis(axis,100);//沿着向量axis方向平移100
//
//mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
//
//var axis = new THREE.Vector3(0,1,0);//向量axis
//mesh.rotateOnAxis(axis,Math.PI/8);//绕axis向量轴旋转π/8
//
//mesh.scale.x = 2.0;//x轴方向放大2倍
//
//mesh.scale.set(0.5,0.5,0.5);//缩小为原来0.5倍
    
}





