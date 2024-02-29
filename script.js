const overlayImg = document.getElementById('overlayImage');
const xPosition = document.getElementById('xPosition');
const yPosition = document.getElementById('yPosition');
const scale = document.getElementById('scale');
const rotation = document.getElementById('rotation');
const pitch = document.getElementById('pitch');
const yaw = document.getElementById('yaw');

function updateOverlay() {
    overlayImg.style.transform = `translate(${xPosition.value}px, ${yPosition.value}px) 
                                  scale(${scale.value}) 
                                  rotate(${rotation.value}deg) 
                                  rotateX(${pitch.value}deg) 
                                  rotateY(${yaw.value}deg)`;

    // Update values displayed
    document.getElementById('xPositionValue').textContent = xPosition.value;
    document.getElementById('yPositionValue').textContent = yPosition.value;
    document.getElementById('scaleValue').textContent = scale.value;
    document.getElementById('rotationValue').textContent = rotation.value;
    document.getElementById('pitchValue').textContent = pitch.value;
    document.getElementById('yawValue').textContent = yaw.value;
}

// Initial update for values display
updateOverlay();

xPosition.addEventListener('input', updateOverlay);
yPosition.addEventListener('input', updateOverlay);
scale.addEventListener('input', updateOverlay);
rotation.addEventListener('input', updateOverlay);
pitch.addEventListener('input', updateOverlay);
yaw.addEventListener('input', updateOverlay);