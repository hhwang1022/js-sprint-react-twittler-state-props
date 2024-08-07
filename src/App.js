import React from 'react';
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Routes, Route 컴포넌트를 불러옵니다.
import {BrowserRouter, Routes, Route, useState} from "react-router-dom";

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
// TODO : MyPage, About 컴포넌트를 import 합니다.
import About from './Pages/About';
import Mypage from './Pages/MyPage';
import dummyTweets from '../static/dummyData';

import './App.css';
import './global-style.css';

const [tweets, setTweets] = useState(dummyTweets);

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            {/* TODO : 유어클래스를 참고해서, 테스트 케이스를 통과하세요.
              TODO : React Router DOM 설치 후 BrowserRouter, Routes, Route의 주석을 해제하고 Routes, Route 컴포넌트를 적절하게 작성합니다. */}
            <Routes>
            {/*<Route path="/" element={<Tweets props={tweets} />} />
              <Route path="/" render={(props) => <Tweets {...props} tweets={tweets}/>} /> */}
              <Route path="/" element={<TweetWarp tweets={tweets} />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/about" element={<About />} />
            </Routes>
            {/* Route 예시: <Route path="/" element={<Tweets />}></Route> */}
          </section>
        </main>
      </div>
      </BrowserRouter>
    </div>
  );
};

const TweetWarp = ({tweets}) => {
  return <Tweets tweets={tweets}/>
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
