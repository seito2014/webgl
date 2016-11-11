let init = () => {

    let windowData = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
        45,windowData.width / windowData.height, 0.1 , 1000
    );

    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(windowData.width, windowData.height);

    let axes = new THREE.AxisHelper(20);
    scene.add(axes);

    let planeGeometry = new THREE.PlaneGeometry(60, 20);
    let planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xcccccc
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    scene.add(plane);

    let cubeGeometry = new THREE.BoxGeometry(5, 20, 5);
    let cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000, wireframe: false
    });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    scene.add(cube);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    let spotlight = new THREE.SpotLight(0xffffff);
    spotlight.position.set(-20, 30, -5);
    scene.add(spotlight);

    document.getElementById('js-WebGL').appendChild(renderer.domElement);

    renderer.render(scene, camera);
};

window.onload = init();