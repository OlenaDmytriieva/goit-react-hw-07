import { Rings } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Rings
      visible={true}
      height="80"
      width="80"
      color="rgb(52, 52, 63)"
      ariaLabel="rings-loading"
      wrapperStyle={{
        display: "block",
        marginLeft: "auto",
      }}
      wrapperClass=""
    />
  );
};

// import { useState, useEffect } from "react";
// import css from "./Loader.module.css";

// export default function Loader({ children }) {
//   const [dots, setDots] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((dots) => (dots.length < 3 ? dots + "." : ""));
//     }, 250);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <p className={css.text}>
//       <b>
//         {children}
//         {dots}
//       </b>
//     </p>
//   );
// }