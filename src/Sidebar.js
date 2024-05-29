import React from 'react';
// TODO : React Router DOM의 Link 컴포넌트를 import 합니다.
import {Link, useNavigate} from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <section className="sidebar">
      {/* TODO : Link 컴포넌트를 작성하고, to 속성을 이용하여 경로(path)를 연결합니다. */}
      <button onClick={() => { navigate(-1); }}>
         <i className="fa-solid fa-arrow-left"></i> 
      </button>
      <Link to = "/"> 
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to = "/about"> 
          <i className="far fa-question-circle"></i>
      </Link>
      <Link to = "/mypage">
          <i className="far fa-user"></i> 
      </Link>
    </section>
  );
};

export default Sidebar;
