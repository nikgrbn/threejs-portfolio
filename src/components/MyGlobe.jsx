import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Globe from 'react-globe.gl'

function MyGlobe () {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.05;
    globe.pointOfView({ lat: 20, lng: 20, altitude: 2 });

    // Add clouds sphere
    const CLOUDS_IMG_URL = '/assets/clouds.png'; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.015; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);


  return (
    <Globe

    ref={globeEl}
    animateIn={false}
    height={326}
    width={326}
    backgroundColor="rgba(0,0,0,0)"
    showAtmosphere
    showGraticules
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    pointsData={[{
      lat: 31.0461,
      lng: 34.8516,
    }]}
    pointAltitude={0.25}
    pointRadius={0.5}
    pointColor={() => 'rgb(255,60,60)'}

    ringsData={[{
      lat: 31.0461,
      lng: 34.8516,
    }]}

    ringColor={() => 'black'}
    ringMaxRadius={4}
    ringRepeatPeriod={1000}
    ringPropagationSpeed={1}

    labelsData={[{
      lat: 31.0461,
      lng: 34.8516,
      text: "",
      size: 20,
    }]}
    labelDotRadius={1}
    labelSize={4}
    labelColor={() => 'rgba(255,60,60,0.44)'}
  />
  )
}

export default MyGlobe
