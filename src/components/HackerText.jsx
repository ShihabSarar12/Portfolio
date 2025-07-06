// // src/components/HackerText.jsx
// import { useEffect, useState } from "react";

// const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

// const scrambleText = (target, progress) => {
//   const length = target.length;
//   return Array.from({ length }, (_, i) =>
//     i < progress ? target[i] : getRandomChar()
//   ).join("");
// };

// const HackerText = ({ text, speed = 50, delay = 500 }) => {
//   const [display, setDisplay] = useState("");
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const interval = setInterval(() => {
//         setProgress((prev) => {
//           if (prev >= text.length) {
//             clearInterval(interval);
//             return prev;
//           }
//           return prev + 1;
//         });
//       }, speed);
//     }, delay);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [text, speed, delay]);

//   useEffect(() => {
//     setDisplay(scrambleText(text, progress));
//   }, [progress, text]);

//   return (
//     <span className="font-mono tracking-widest text-green-400">{display}</span>
//   );
// };

// export default HackerText;
