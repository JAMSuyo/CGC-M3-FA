import * as THREE from './three.module.js';
import { OrbitControls } from "./OrbitControls.js";
import {BoxGeometry, SphereGeometry} from "./three.module.js";
import {GLTFLoader} from "./GLTFLoader.js";
import { FlyControls } from "./FlyControls.js";
import { FBXLoader } from "./FBXLoader.js";
import { Lensflare, LensflareElement} from "./Lensflare.js";

const scene = new THREE.Scene();
{
    const color = 0xefd293;
    const near = 20;
    const far = 200;
    scene.fog = new THREE.Fog( color, near, far );
}


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 1000 );

const renderer = new THREE.WebGLRenderer( {antialias: true});
renderer.shadowMap.enabled = true;
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xF3C17A );
document.body.appendChild( renderer.domElement );

// const controls = new OrbitControls( camera, renderer.domElement );
const controls = new FlyControls( camera, renderer.domElement );
controls.dragToLook = true;
controls.movementSpeed = 1;



const gridHelper = new THREE.GridHelper(500);
scene.add(gridHelper);

/*const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);*/

camera.position.set(0,30,35);


const clock = new THREE.Clock();


//ground
const groundGeometry = new THREE.PlaneGeometry( 200, 200, 32, 32 );
groundGeometry.rotateX( -Math.PI / 2 );
const groundTexture = new THREE.TextureLoader().load('../assets/textures/dirt.jpg');
const groundMaterial = new THREE.MeshBasicMaterial({map: groundTexture, side: THREE.DoubleSide} );
const groundMesh = new THREE.Mesh( groundGeometry, groundMaterial );
groundMesh.receiveShadow = true;
scene.add( groundMesh );

function bridge() {

    //textures
    const metalTexture = new THREE.TextureLoader().load( '../assets/textures/metal4.jpg' );
    const woodTexture = new THREE.TextureLoader().load( '../assets/textures/woodpanel.jpg')

    //bottom horizontal beams
    const baseRailGeometry = new THREE.BoxGeometry( 120, 2, 2 );
    const baseRailMaterial = new THREE.MeshLambertMaterial( {map: metalTexture, color: 0xa94c4c} );

    const baseRailMesh = new THREE.Mesh( baseRailGeometry, baseRailMaterial );
    baseRailMesh.position.set( 0, 20, 8 );
    scene.add( baseRailMesh );

    const baseRail2Mesh = new THREE.Mesh( baseRailGeometry, baseRailMaterial );
    baseRail2Mesh.position.set( 0, 20, -8 );
    scene.add( baseRail2Mesh );


    //bridge base
    const basePlatformGeometry = new THREE.BoxGeometry( 120, 1.5, 14 );
    const basePlatformMaterial = new THREE.MeshPhongMaterial( {map: woodTexture, color: 0x8f6243} );
    const basePlatformMesh = new THREE.Mesh( basePlatformGeometry, basePlatformMaterial );

    basePlatformMesh.position.set( 0, 20, 0 );
    scene.add( basePlatformMesh );


    const bottomRailGeometry = new THREE.BoxGeometry( 50, 3, 5 );
    const bottomRailMaterial = new THREE.MeshLambertMaterial( {map: metalTexture, color: 0x923030} );

    const bottomRail1Mesh = new THREE.Mesh( bottomRailGeometry, bottomRailMaterial );
    bottomRail1Mesh.position.set( -32, 18, 0 );
    scene.add( bottomRail1Mesh );

    const bottomRail2Mesh = new THREE.Mesh( bottomRailGeometry, bottomRailMaterial );
    bottomRail2Mesh.position.set( 32, 18, 0 );
    scene.add( bottomRail2Mesh );



    //top horizontal beams
    const topRailGeometry = new THREE.BoxGeometry( 120, 2, 2 );
    const topRailMaterial = new THREE.MeshLambertMaterial( {map: metalTexture, color: 0xa94c4c} );

    const topRailMesh = new THREE.Mesh( topRailGeometry, topRailMaterial );
    topRailMesh.position.set( 0, 40, 8 );
    scene.add( topRailMesh );

    const topRail2Mesh = new THREE.Mesh( topRailGeometry, topRailMaterial );
    topRail2Mesh.position.set( 0, 40, -8 );
    scene.add( topRail2Mesh );


    //diagonal beams
    const diagonalGeometry = new THREE.BoxGeometry( 2, 28, 2 );
    const diagonalMaterial = new THREE.MeshLambertMaterial( {map: metalTexture, color: 0xa94c4c} );

    const diagonal1Mesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal1Mesh.rotation.z = 43.2;
    diagonal1Mesh.position.set( -50, 30, 8 );
    scene.add( diagonal1Mesh );

    const diagonal2Mesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal2Mesh.rotation.z = -43.2;
    diagonal2Mesh.position.set( -30, 30, 8 );
    scene.add( diagonal2Mesh );

    const diagonal3Mesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal3Mesh.rotation.z = 43.2;
    diagonal3Mesh.position.set( -10, 30, 8 );
    scene.add( diagonal3Mesh );

    const diagonal4Mesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal4Mesh.rotation.z = -43.2;
    diagonal4Mesh.position.set( 10, 30, 8 );
    scene.add( diagonal4Mesh );

    const diagonal5Mesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal5Mesh.rotation.z = 43.2;
    diagonal5Mesh.position.set( 30, 30, 8 );
    scene.add( diagonal5Mesh );

    const diagonal6Mesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal6Mesh.rotation.z = -43.2;
    diagonal6Mesh.position.set( 50, 30, 8 );
    scene.add( diagonal6Mesh );


    const diagonal1BackMesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal1BackMesh.rotation.z = 43.2;
    diagonal1BackMesh.position.set( -50, 30, -8 );
    scene.add( diagonal1BackMesh );

    const diagonal2BackMesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal2BackMesh.rotation.z = -43.2;
    diagonal2BackMesh.position.set( -30, 30, -8 );
    scene.add( diagonal2BackMesh );

    const diagonal3BackMesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal3BackMesh.rotation.z = 43.2;
    diagonal3BackMesh.position.set( -10, 30, -8 );
    scene.add( diagonal3BackMesh );

    const diagonal4BackMesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal4BackMesh.rotation.z = -43.2;
    diagonal4BackMesh.position.set( 10, 30, -8 );
    scene.add( diagonal4BackMesh );

    const diagonal5BackMesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal5BackMesh.rotation.z = 43.2;
    diagonal5BackMesh.position.set( 30, 30, -8 );
    scene.add( diagonal5BackMesh );

    const diagonal6BackMesh = new THREE.Mesh( diagonalGeometry, diagonalMaterial );
    diagonal6BackMesh.rotation.z = -43.2;
    diagonal6BackMesh.position.set( 50, 30, -8 );
    scene.add( diagonal6BackMesh );



    // pillars
    const pillarGeometry = new THREE.BoxGeometry( 4, 17, 4 );
    const pillarTexture = new THREE.TextureLoader().load( '../assets/textures/brick1.jpg' );
    const pillarMaterial = new THREE.MeshLambertMaterial( {map: pillarTexture, color: 0x583535} );

    const pillar1 = new THREE.Mesh( pillarGeometry, pillarMaterial );
    pillar1.position.set( -45, 8.5, 0 );
    scene.add( pillar1 );

    const pillar2 = new THREE.Mesh( pillarGeometry, pillarMaterial );
    pillar2.position.set( -20, 8.5, 0 );
    scene.add( pillar2 );

    const pillar3 = new THREE.Mesh( pillarGeometry, pillarMaterial );
    pillar3.position.set( 20, 8.5, 0 );
    scene.add( pillar3 );

    const pillar4 = new THREE.Mesh( pillarGeometry, pillarMaterial );
    pillar4.position.set( 45, 8.5, 0 );
    scene.add( pillar4 );




    // vertical beams

    const verticalGeometry = new THREE.BoxGeometry( 1, 20, 1 );
    const verticalMaterial = new THREE.MeshLambertMaterial( {map: metalTexture, color: 0xa94c4c} );

    const vertical1Front = new THREE.Mesh( verticalGeometry, verticalMaterial );
    vertical1Front.position.set( -20, 30, 8 );
    scene.add( vertical1Front );

    const vertical2Front = new THREE.Mesh( verticalGeometry, verticalMaterial );
    vertical2Front.position.set( 20, 30, 8 );
    scene.add( vertical2Front );

    const vertical1Back = new THREE.Mesh( verticalGeometry, verticalMaterial );
    vertical1Back.position.set( -20, 30, -8 );
    scene.add( vertical1Back );

    const vertical2Back = new THREE.Mesh( verticalGeometry, verticalMaterial );
    vertical2Back.position.set( 20, 30, -8 );
    scene.add( vertical2Back );


    // railing

    const railingGeometry = new THREE.CylinderGeometry( 0.4, 0.4, 120 );
    const railingMaterial = new THREE.MeshLambertMaterial( {color: 0x616668} );

    const railingFront = new THREE.Mesh( railingGeometry, railingMaterial );
    railingFront.rotateZ( -Math.PI / 2 );
    railingFront.position.set( 0, 25, 6.5 );
    scene.add( railingFront );

    const railingBack = new THREE.Mesh( railingGeometry, railingMaterial );
    railingBack.rotateZ( -Math.PI / 2 );
    railingBack.position.set( 0, 25, -6.5 );
    scene.add( railingBack );


    const railingBarGeometry = new THREE.CylinderGeometry( 0.2, 0.2, 5 );
    const railingBarMaterial = new THREE.MeshLambertMaterial( {color: 0x616668} );

    const railingBar1Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar1Front.position.set( -60, 22.5, 6.5 );
    scene.add( railingBar1Front );

    const railingBar2Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar2Front.position.set( -55, 22.5, 6.5 );
    scene.add( railingBar2Front );

    const railingBar3Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar3Front.position.set( -50, 22.5, 6.5 );
    scene.add( railingBar3Front );

    const railingBar4Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar4Front.position.set( -45, 22.5, 6.5 );
    scene.add( railingBar4Front );

    const railingBar5Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar5Front.position.set( -40, 22.5, 6.5 );
    scene.add( railingBar5Front );

    const railingBar6Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar6Front.position.set( -35, 22.5, 6.5 );
    scene.add( railingBar6Front );

    const railingBar7Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar7Front.position.set( -30, 22.5, 6.5 );
    scene.add( railingBar7Front );

    const railingBar8Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar8Front.position.set( -25, 22.5, 6.5 );
    scene.add( railingBar8Front );

    const railingBar9Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar9Front.position.set( -20, 22.5, 6.5 );
    scene.add( railingBar9Front );

    const railingBar10Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar10Front.position.set( -15, 22.5, 6.5 );
    scene.add( railingBar10Front );

    const railingBar11Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar11Front.position.set( -10, 22.5, 6.5 );
    scene.add( railingBar11Front );

    const railingBar12Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar12Front.position.set( -5, 22.5, 6.5 );
    scene.add( railingBar12Front );

    const railingBar13Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar13Front.position.set( 0, 22.5, 6.5 );
    scene.add( railingBar13Front );

    const railingBar14Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar14Front.position.set( 5, 22.5, 6.5 );
    scene.add( railingBar14Front );

    const railingBar15Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar15Front.position.set( 10, 22.5, 6.5 );
    scene.add( railingBar15Front );

    const railingBar16Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar16Front.position.set( 15, 22.5, 6.5 );
    scene.add( railingBar16Front );

    const railingBar17Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar17Front.position.set( 20, 22.5, 6.5 );
    scene.add( railingBar17Front );

    const railingBar18Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar18Front.position.set( 25, 22.5, 6.5 );
    scene.add( railingBar18Front );

    const railingBar19Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar19Front.position.set( 30, 22.5, 6.5 );
    scene.add( railingBar19Front );

    const railingBar20Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar20Front.position.set( 35, 22.5, 6.5 );
    scene.add( railingBar20Front );

    const railingBar21Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar21Front.position.set( 40, 22.5, 6.5 );
    scene.add( railingBar21Front );

    const railingBar22Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar22Front.position.set( 45, 22.5, 6.5 );
    scene.add( railingBar22Front );

    const railingBar23Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar23Front.position.set( 50, 22.5, 6.5 );
    scene.add( railingBar23Front );

    const railingBar24Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar24Front.position.set( 55, 22.5, 6.5 );
    scene.add( railingBar24Front );

    const railingBar25Front = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar25Front.position.set( 60, 22.5, 6.5 );
    scene.add( railingBar25Front );


    const railingBar1Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar1Back.position.set( -60, 22.5, -6.5 );
    scene.add( railingBar1Back );

    const railingBar2Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar2Back.position.set( -55, 22.5, -6.5 );
    scene.add( railingBar2Back );

    const railingBar3Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar3Back.position.set( -50, 22.5, -6.5 );
    scene.add( railingBar3Back );

    const railingBar4Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar4Back.position.set( -45, 22.5, -6.5 );
    scene.add( railingBar4Back );

    const railingBar5Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar5Back.position.set( -40, 22.5, -6.5 );
    scene.add( railingBar5Back );

    const railingBar6Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar6Back.position.set( -35, 22.5, -6.5 );
    scene.add( railingBar6Back );

    const railingBar7Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar7Back.position.set( -30, 22.5, -6.5 );
    scene.add( railingBar7Back );

    const railingBar8Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar8Back.position.set( -25, 22.5, -6.5 );
    scene.add( railingBar8Back );

    const railingBar9Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar9Back.position.set( -20, 22.5, -6.5 );
    scene.add( railingBar9Back );

    const railingBar10Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar10Back.position.set( -15, 22.5, -6.5 );
    scene.add( railingBar10Back );

    const railingBar11Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar11Back.position.set( -10, 22.5, -6.5 );
    scene.add( railingBar11Back );

    const railingBar12Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar12Back.position.set( -5, 22.5, -6.5 );
    scene.add( railingBar12Back );

    const railingBar13Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar13Back.position.set( 0, 22.5, -6.5 );
    scene.add( railingBar13Back );

    const railingBar14Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar14Back.position.set( 5, 22.5, -6.5 );
    scene.add( railingBar14Back );

    const railingBar15Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar15Back.position.set( 10, 22.5, -6.5 );
    scene.add( railingBar15Back );

    const railingBar16Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar16Back.position.set( 15, 22.5, -6.5 );
    scene.add( railingBar16Back );

    const railingBar17Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar17Back.position.set( 20, 22.5, -6.5 );
    scene.add( railingBar17Back );

    const railingBar18Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar18Back.position.set( 25, 22.5, -6.5 );
    scene.add( railingBar18Back );

    const railingBar19Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar19Back.position.set( 30, 22.5, -6.5 );
    scene.add( railingBar19Back );

    const railingBar20Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar20Back.position.set( 35, 22.5, -6.5 );
    scene.add( railingBar20Back );

    const railingBar21Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar21Back.position.set( 40, 22.5, -6.5 );
    scene.add( railingBar21Back );

    const railingBar22Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar22Back.position.set( 45, 22.5, -6.5 );
    scene.add( railingBar22Back );

    const railingBar23Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar23Back.position.set( 50, 22.5, -6.5 );
    scene.add( railingBar23Back );

    const railingBar24Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar24Back.position.set( 55, 22.5, -6.5 );
    scene.add( railingBar24Back );

    const railingBar25Back = new THREE.Mesh( railingBarGeometry, railingBarMaterial );
    railingBar25Back.position.set( 60, 22.5, -6.5 );
    scene.add( railingBar25Back );


}

bridge();


function trees(){

    const trunkGeometry = new THREE.CylinderGeometry( 1, 2, 40 );
    const trunkMaterial = new THREE.MeshLambertMaterial( {color: 0x616668} );

    const treeAGeometry = new THREE.SphereGeometry( 12 );
    const treeBGeometry = new THREE.SphereGeometry( 7 );
    const treeTexture = new THREE.TextureLoader().load( '../assets/textures/gradient.jpg' );
    const treeMaterial = new THREE.MeshPhysicalMaterial( {map: treeTexture} );
    treeMaterial.transparent = true;
    treeMaterial.opacity = 0.75;


    const trunk1Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk1Mesh.position.set( -40, 20, -50 );
    scene.add( trunk1Mesh );
    const tree1Mesh = new THREE.Mesh( treeAGeometry, treeMaterial );
    tree1Mesh.position.set( -40, 45, -50 );
    scene.add( tree1Mesh );
    const treeBranch1 = new THREE.Mesh( treeBGeometry, treeMaterial );
    treeBranch1.position.set( -48, 30, -50 );
    scene.add( treeBranch1 );

    trunk1Mesh.castShadow = true;



    const trunk2Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk2Mesh.position.set( -25, 10, -48 );
    scene.add( trunk2Mesh );
    const tree2Mesh = new THREE.Mesh( treeAGeometry, treeMaterial );
    tree2Mesh.position.set( -25, 30, -48 );
    scene.add( tree2Mesh );

    const trunk3Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk3Mesh.position.set( -15, 4, -60 );
    scene.add( trunk3Mesh );
    const tree3Mesh = new THREE.Mesh( treeAGeometry, treeMaterial );
    tree3Mesh.position.set( -15, 24, -60 );
    scene.add( tree3Mesh );

    const trunk4Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk4Mesh.position.set( -5, 0, -50);
    scene.add( trunk4Mesh );
    const tree4Mesh = new THREE.Mesh( treeBGeometry, treeMaterial );
    tree4Mesh.position.set( -5, 20, -50 );
    scene.add( tree4Mesh );

    const trunk5Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk5Mesh.position.set( 15, 15, -40 );
    scene.add( trunk5Mesh );
    const tree5Mesh = new THREE.Mesh( treeAGeometry, treeMaterial );
    tree5Mesh.position.set( 15, 35, -40);
    scene.add( tree5Mesh );

    const trunk6Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk6Mesh.position.set( 35, 20, -50 );
    scene.add( trunk6Mesh );
    const tree6Mesh = new THREE.Mesh( treeAGeometry, treeMaterial );
    tree6Mesh.position.set( 35, 40, -50 );
    scene.add( tree6Mesh );

    const trunk7Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk7Mesh.position.set( 50, 10, -45 );
    scene.add( trunk7Mesh );
    const tree7Mesh = new THREE.Mesh( treeAGeometry, treeMaterial );
    tree7Mesh.position.set( 50, 30, -45 );
    scene.add( tree7Mesh );

    const trunk8Mesh = new THREE.Mesh( trunkGeometry, trunkMaterial );
    trunk8Mesh.position.set( 65, -1, -50 );
    scene.add( trunk8Mesh );
    const tree8Mesh = new THREE.Mesh( treeBGeometry, treeMaterial );
    tree8Mesh.position.set( 65, 19, -50);
    scene.add( tree8Mesh );



}

trees();


//cat model
const gltfLoader = new GLTFLoader();
gltfLoader.load( '../assets/models/cat/scene.gltf', (cat) => {
    const catMesh = cat.scene;
    catMesh.position.set( 0, 21, 0 );
    catMesh.scale.set( 20, 20, 20 );
    catMesh.rotateY( -Math.PI / 2 );
    scene.add( catMesh );
});

//sun
const sunGeometry = new SphereGeometry( 15 );
const sunMaterial = new THREE.MeshBasicMaterial( {color: 0xF5F5F5} );
const sun = new THREE.Mesh( sunGeometry, sunMaterial );

sun.position.set( -25, 55, -80 );
scene.add( sun );


//birds
let mixer;

const loader = new FBXLoader();
loader.load( '../assets/models/birds/source/bird.fbx', function ( object ) {
    mixer = new THREE.AnimationMixer( object );

    const action = mixer.clipAction( object.animations[ 0 ] );
    action.play();

    object.traverse( function ( child ){
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    object.rotateY( -Math.PI / 2 );
    object.scale.set( 0.2, 0.2, 0.2 );
    object.position.set( -30, 50, 0 );
    scene.add( object );

});


// fireflies
let fireflies, firefliesGeometry;
function firefly() {
    const points = [];

    for ( let i = 0; i < 600; i++ ) {
        let fireflies = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        points.push(fireflies);
    }

    firefliesGeometry = new THREE.BufferGeometry().setFromPoints(points);

    let sprite = new THREE.TextureLoader().load("assets/images/star.png");
    let fireflyMaterial = new THREE.PointsMaterial( {color: 0xfefbf3, size: 1, map: sprite } );

    fireflies = new THREE.Points( firefliesGeometry, fireflyMaterial );
    scene.add( fireflies );

}

firefly();


function animateFireflies() {
    firefliesGeometry.verticesNeedUpdate = true;
    fireflies.rotation.y += 0.005;

    if (fireflies.rotation.x < - 400 ) {
        fireflies.rotation.x = 0;
    }

}


function lighting() {

    const pointLight = new THREE.PointLight( 0xfdeec6, 100000, 1000 );
    pointLight.position.set( -25, 55, -80 );
    pointLight.castShadow = true;
    scene.add( pointLight );

    const textureLoader = new THREE.TextureLoader();
    const textureFlare0 = textureLoader.load( '../assets/textures/lensflare.png' );
    const lensflare = new Lensflare();
    lensflare.addElement( new LensflareElement( textureFlare0, 512, 0.1, 0xf9e8cd ) );
    pointLight.add( lensflare );


    const sphereSize = 5;
    const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
    scene.add( pointLightHelper );

    const ambiLight = new THREE.AmbientLight( 0x9a9182 );
    scene.add( ambiLight );

}

lighting();



function animate() {
    requestAnimationFrame( animate );

    const delta = clock.getDelta();

    if ( mixer ) mixer.update( delta );

    animateFireflies();
    controls.update( 2 );
    renderer.render( scene, camera );
}



animate();