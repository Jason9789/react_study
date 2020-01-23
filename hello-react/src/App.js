import React from "react";
import MyComponent from "./MyComponent";
import "./App.css";

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={5}>
      리액트
    </MyComponent>
  );
};

export default App;

// 클래스형 컴포넌트
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// function App() {
//   // class 대신 className -> App.css 수정함
//   const name = "리액트";
//   return <div className="react">{name}</div>;

//   // 인라인 스타일링 ==========================

//   // const name = "리액트";
//   // const style = {
//   //   // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
//   //   backgroundColor: "black",
//   //   color: "aqua",
//   //   fontSize: "48px", // font-size -> fontSize
//   //   fontWeight: "blod", // font-weight -> fontWeight
//   //   padding: 16 // 단위를 생략하면 px로 지정된다.
//   // };
//   // return <div style={style}>{name}</div>;

//   // 다음과 같이 자바스크립트 표현식을 사용할 수도 있음. =======================

//   // const name = "react";
//   // return (
//   //   <>
//   //     <h1> {name} 안녕? 4</h1>
//   //   </>
//   // );

//   // 조건부 연산자 : 삼항 연산자 ==========================

//   // const name = "react";
//   // return (
//   //   <div>
//   //     {name === "react" ? <h1>리액트 입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
//   //   </div>
//   // );

//   // AND 연산자(&&)를 사용한 조건부 렌더링
//   // const name = "리액트";
//   // return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;

//   // undefined를 렌더링하지 않기
//   // const name = undefined;
//   // // return name || "값이 undefined 입니다.";
//   // return <div>{name || "undefinded"}</div>;

//   // 기본 ====================

//   // return (
//   // <div>
//   //   <h1>리액트 안녕!</h1>
//   //   <h2>잘 작동하니?</h2>
//   // </div>

//   // div가 아니면 Fragment를 사용할 수 있다.
//   // <Fragment>
//   //   <h1>리액트 안녕2</h1>
//   //   <h2>잘 작동하니?2</h2>
//   // </Fragment>

//   // Fragment를 다음과 같이도 사용할 수 있다.
//   // <>
//   //   <h1>리액트 안녕3</h1>
//   //   <h2>잘 작동하니?3</h2>
//   // </>
//   // );
// }

// export default App;
