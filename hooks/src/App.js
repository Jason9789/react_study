import React, { useState } from "react";
import "./App.css";

// import Counter from "./Counter";
// import Info from "./Info";
import Average from "./Average";

function App() {
  // ========== useEffect 사용 ===============
  // const [visible, setVisible] = useState(false);
  // // return <Counter />;
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     {visible && <Info />}
  //   </div>
  // );
  // return <Counter />;
  // return <Info />;
  return <Average />;
}

export default App;
