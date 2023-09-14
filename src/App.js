import React, { useState } from "react";
import "./App.css";

function App() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(trackRef.current.dataset.percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const imageElements = trackRef.current.getElementsByClassName("image");
    for (const image of imageElements) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  const trackRef = React.createRef();

  window.onmousedown = (e) => handleOnDown(e);
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.onmouseup = (e) => handleOnUp(e);
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = (e) => handleOnMove(e);
  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  return (
    <div className="App">
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        ref={trackRef}
      >
        <img
          class="image"
          src="https://images.unsplash.com/photo-1465979150986-c8b0fb12d861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1529311054783-ce4271fdd304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1554587728-3996a89f1ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1630177404678-2baa8aec61d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://plus.unsplash.com/premium_photo-1669984811433-a194847ee78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1538898780761-268f71f67675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1532517308734-0565178471d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          draggable="false"
        />
        <img
          class="image"
          src="https://images.unsplash.com/photo-1591542508399-3efb2ab12345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default App;
