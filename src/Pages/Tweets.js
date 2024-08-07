// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
   const [tweets, setTweets] = useState(dummyTweets);
   const [nameValue, setName] = useState('');
   const [contentValue, setContent] = useState('');

   const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

  const handleButtonClick = (event) => {
    if(contentValue !== "" ){
      const tweet = {
        id: tweets.length,
        username: nameValue === "" ? "parkhacker" : nameValue,
        picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
        content:
        contentValue,
        createdAt: new Date().toLocaleDateString('ko-KR'),
        updatedAt: new Date().toLocaleDateString('ko-KR'),
      };
      // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
      // 트윗 전송이 가능하게 작성해야 합니다.
      // dummyTweets.unshift(tweet);

      setTweets([tweet, ...tweets]);
      // dummyTweets.unshift(tweet);

      setContent("");
      document.getElementById("tweetForm__input--message").value = null;
    };
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setContent(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  id="tweetForm__input--username"
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={(e)=>handleChangeUser(e)}
                ></input>
                {/*TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요.*/}
                <textarea
                  id="tweetForm__input--message"
                  type="text"
                  defaultValue=""
                  placeholder="your tweet here.."
                  className="tweetForm__input--message"
                  onChange={(e)=>handleChangeMsg(e)}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button onClick = {(e) =>handleButtonClick(e)} 
                className="tweetForm__submitButton">Tweets</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {tweets.map((temp) => 
         <Tweet tweet={temp}/>
        )}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;