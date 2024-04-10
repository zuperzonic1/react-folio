// import { useEffect } from 'react';
// // import svg localy
// import Color1  from '../assets/images/LogoExplain/Color1'
// import Color2  from '../assets/images/LogoExplain/Color2'
// import Color3  from '../assets/images/LogoExplain/Color3';

// const LogoExplain = () => {
//   useEffect(() => {
//     const logo = document.getElementById("logo");
//     const images = logo.querySelectorAll("img");

//     const getActive = () => document.body.dataset.active === "true",
//           setActiveTo = (active) => document.body.dataset.active = active.toString();

//     const shift = (image, index, rangeX, rangeY) => {
//       const active = getActive();
//       const translationIntensity = active ? 24 : 4,
//             maxTranslation = translationIntensity * (index + 1),
//             currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
//       const scale = active ? 1 + (index * 0.4) : 1;

//       image.animate({
//         translate: currentTranslation,
//         scale
//       }, { duration: 750, fill: "forwards", easing: "ease" });
//     }

//     const shiftAll = (images, rangeX, rangeY) => 
//       images.forEach((image, index) => shift(image, index, rangeX, rangeY));

//     const shiftLogo = (e) => {
//       const rect = logo.getBoundingClientRect(),
//             radius = 1000;
//       const centerX = rect.left + (rect.width / 2),
//             centerY = rect.top + (rect.height / 2);
//       const rangeX = (e.clientX - centerX) / radius,
//             rangeY = (e.clientY - centerY) / radius;

//       shiftAll(images, rangeX, rangeY);
//     }

//     const resetLogo = () => {
//       setActiveTo(false);
//       shiftAll(images, 0.4, -0.7);
//     }

//     window.addEventListener('mousemove', shiftLogo);
//     document.body.addEventListener('mouseleave', resetLogo);
//     window.addEventListener('mousedown', () => setActiveTo(true));
//     window.addEventListener('mouseup', resetLogo);

//     // Initialize logo position
//     resetLogo();

//     // Cleanup function to remove event listeners
//     return () => {
//       window.removeEventListener('mousemove', shiftLogo);
//       document.body.removeEventListener('mouseleave', resetLogo);
//       window.removeEventListener('mousedown', () => setActiveTo(true));
//       window.removeEventListener('mouseup', resetLogo);
//     };
//   }, []);

//   return (
//     <div id="logo">
//       <Color1  />
//       <Color2  />
//       <Color1  />
//       <Color2  />
//       <Color1  />
//       <Color2  />
//     </div>
//   );  
// };

// export default LogoExplain;

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import Color1 from '../assets/images/LogoExplain/Color1';
// import Color2 from '../assets/images/LogoExplain/Color2';
// import Color3 from '../assets/images/LogoExplain/Color3';

// const LogoExplain = () => {
//   // Refs for each SVG component
//   const color1Ref = useRef(null);
//   const color2Ref = useRef(null);
//   const color3Ref = useRef(null);

//   useEffect(() => {
//     // GSAP animations and event listeners
//     const shiftLogo = (e) => {
//       const logoRect = color1Ref.current.parentElement.getBoundingClientRect();
//       const centerX = logoRect.left + (logoRect.width / 2);
//       const centerY = logoRect.top + (logoRect.height / 2);
//       const rangeX = (e.clientX - centerX) / 10; // Adjust divisor for sensitivity
//       const rangeY = (e.clientY - centerY) / 10;
//       const active = document.body.dataset.active === "true";

//       // Apply a GSAP animation to each referenced component
//       const refs = [color1Ref, color2Ref, color3Ref];
//       refs.forEach((ref, index) => {
//         const intensity = active ? 24 : 4;
//         const depth = index + 1;
//         gsap.to(ref.current, {
//           x: rangeX * intensity * depth,
//           y: rangeY * intensity * depth,
//           scale: active ? 1 + depth * 0.1 : 1,
//           ease: "power1.out",
//           duration: 0.5,
//         });
//       });
//     };

//     // Add event listeners
//     window.addEventListener('mousemove', shiftLogo);
//     window.addEventListener('mousedown', () => document.body.dataset.active = "true");
//     window.addEventListener('mouseup', () => {
//       document.body.dataset.active = "false";
//       shiftLogo({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 }); // reset position
//     });

//     // Initial position reset
//     shiftLogo({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

//     // Clean-up function to remove event listeners
//     return () => {
//       window.removeEventListener('mousemove', shiftLogo);
//       window.removeEventListener('mousedown', () => document.body.dataset.active = "true");
//       window.removeEventListener('mouseup', () => {
//         document.body.dataset.active = "false";
//         shiftLogo({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 }); // reset position
//       });
//     };
//   }, []);

//   return (
//     <div id="logo">
//       <Color1 ref={color1Ref} />
//       <Color2 ref={color2Ref} />
//       <Color3 ref={color3Ref} />
//       {/* Repeat the pattern for other Color components, making sure to define and use their refs */}
//     </div>
//   );
// };

// export default LogoExplain;

