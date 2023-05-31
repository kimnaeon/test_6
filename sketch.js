let alpha, beta, gamma; // Variables to store orientation data
let accelerationX, accelerationY, accelerationZ; // Variables to store motion data

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Check if DeviceOrientationEvent is supported
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    // Request permission to access device orientation
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          // If permission is granted, listen for device orientation change
          window.addEventListener('deviceorientation', handleOrientation);
        }
      })
      .catch(console.error);
  } else {
    // DeviceOrientationEvent is not supported
    console.log('Device Orientation is not supported');
  }
  
  // Check if DeviceMotionEvent is supported
  if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
    // Request permission to access device motion
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          // If permission is granted, listen for device motion change
          window.addEventListener('devicemotion', handleMotion);
        }
      })
      .catch(console.error);
  } else {
    // DeviceMotionEvent is not supported
    console.log('Device Motion is not supported');
  }
}

function handleOrientation(event) {
  // Extract orientation data (alpha, beta, gamma)
  alpha = event.alpha;
  beta = event.beta;
  gamma = event.gamma;
}

function handleMotion(event) {
  // Extract motion data (accelerationX, accelerationY, accelerationZ)
  accelerationX = event.acceleration.x;
  accelerationY = event.acceleration.y;
  accelerationZ = event.acceleration.z;
}

function draw() {
  background(220);
  
  // Display motion and orientation data
  textSize(20);
  textAlign(LEFT);
  fill(0);
  text(`Orientation Data:
    alpha: ${alpha}
    beta: ${beta}
    gamma: ${gamma}`, 20, 40);
  
  text(`Motion Data:
    accelerationX: ${accelerationX}
    accelerationY: ${accelerationY}
    accelerationZ: ${accelerationZ}`, 20, 200);
}
