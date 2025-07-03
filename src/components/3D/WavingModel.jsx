import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const WavingModel = () => {
	const [model, setModel] = useState(null);
	const [mixer, setMixer] = useState(null);
	const [action, setAction] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const loader = new FBXLoader();
		loader.load(
			'models/Waving.fbx',
			(fbx) => {
				fbx.scale.set(0.025, 0.025, 0.025);
				fbx.position.set(0, -2.5, 0);
				setModel(fbx);

				if (fbx.animations.length > 0) {
					const animationMixer = new THREE.AnimationMixer(fbx);
					setMixer(animationMixer);

					const animationAction = animationMixer.clipAction(
						fbx.animations[0]
					);
					animationAction.setLoop(THREE.LoopOnce);
					animationAction.clampWhenFinished = true;
					animationAction.enabled = true;

					const lastFrame = fbx.animations[0].duration;
					animationAction.time = lastFrame;
					animationAction.play();
					animationAction.paused = true;

					setAction(animationAction);
				}
			},
			(xhr) => {
				console.log(
					`Loading FBX: ${(xhr.loaded / xhr.total) * 100}% loaded`
				);
			},
			(error) => {
				console.error('Error loading FBX:', error);
			}
		);
	}, []);

	useFrame((_, delta) => {
		if (mixer) {
			mixer.update(delta);
			if (action && action.time >= action.getClip().duration) {
				setIsPlaying(false);
			}
		}
	});

	const handlePointerOver = () => {
		if (action && !isPlaying) {
			action.reset();
			action.play();
			setIsPlaying(true);
		}
	};

	return model ? (
		<primitive object={model} onPointerOver={handlePointerOver} />
	) : null;
};

export default WavingModel;
