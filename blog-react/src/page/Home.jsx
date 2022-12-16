import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import '../css/Home.css'

const Home = () => {
  // 시계 출력
  const [time, setTime] = useState(new Date());
  // new Date()라는 객체가 들어감 => 값을 안넣어주면 현재 시간이 들어감

  // 시계 내용을 출력하는 함수 : return으로 시간을 돌려줌 - 문자열
  const printClock = () => {
    // 숫자를 문자로 바꿔서, 문자 객체에 있는 0을 채우는 메소드 사용
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    // 강제로 문자열 만들어서 .padStart()을 이용해서 최대길이를 어떻게 맞춰줄지 정해줌
    return `${hour} : ${minute} : ${second}`;
  };

  // 현재 페이지가 실행되었을 때, (마운트 되었을 때)
  // setInterval을 이용하여 시간값을 1초마다 바꿔서 출력
  // setInterval은 한번만 작성해주면 된다
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // 글귀 또는 명언 출력 : 배열안에 여러개의 문구 넣어서 출력
  // 그 중에 랜덤으로 하나의 값을 정해서 화면에 출력
  const [words, serWords] = useState([
    // 여러개를 넣어줄 때는 배열 사용!!
    { text: "명언 또는 글귀", author: "사람 또는 책 이름" },
    {
      text: "Force is all-conquering, but its victories are short-lived.",
      author: "Abraham Lincoln",
    },
    {
      text: "There is only one success - to be able to spend your life in your own way.",
      author: "Christopher Morley",
    },
    {
      text: "Dream as if you'll live forever. Live as if you'll die today.",
      author: "James Dean",
    },
    {
      text: "Life is something that happens when you can't get to sleep.",
      author: "Fran Lebowitz",
    },
    {
      text: "It's not that I'm so smart , it's just that I stay with problems longer.",
      author: "Albert Einstein",
    },
    {
      text: "Nothing of me is original. I am the combined effort of everybody I've ever known.",
      author: "Chuck Palahniuk",
    },
    {
      text: "Genius is nothing but a great capacity for patience.",
      author: "Buffon",
    },
  ]);

  // 글귀를 랜덤하게 출력하는 함수 작성
  // >문제: printWord를 실행 할 때마다 random값이 바뀐다
  // >> 왜 바뀌는 가? : update를 할 때 마다 printWord 실행
  // >> PrintWord가 return의 html안에 있기 때문에 계속해서 실행
  // 이 함수를 고정할 수 있는 방법: useCallback, useMemo
  // return값을 고정 : useMemo - return값 고정
  // useMemo를 사용했을 때, 변수 안에 들어가는 것 return값
  const printWord = useMemo(() => {
    // js형태 사용 가능 -> Math.random() 사용
    // random은 소수점까지 가져올 수 있는데 정수값만 보이게
    // *words.length으로 고정 값보다 변수를 이용해서 길이가 달라도 다 보일 수 있게함
    const randomnum = Math.floor(Math.random() * words.length);
    return words[randomnum];
    //  이렇게 되면 함수형태가 아니라 return값이 들어가기 때문에 아래 return값 바꿔야함
  }, []);

  // 슬릭 화면 사용
  // 슬릭과 같은 라이브러리를 사용할 때, 관련 내용을 확인
  const settings = {
    arrows: false,
    //dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 슬릭에 출력할 배경이미지 배열
  const [imageList, setImageList] = useState([
    "background_1.jpg",
    "background_2.jpg",
    "background_3.jpg",
    "background_4.jpg",
  ]);

  return (
    <div>
      {/** 슬릭화면  출력*/}
      <div>
        <Slider {...settings}>
          <div>
            {/** slider는 내용이 커지면 다음 페이지에 넘어간다
             * 크기를 조절해서 사용
             * 이미지를 주소로 바로 접근할 수 없기 때문에 require로 접근
             */}
            <img
              style={{ width: "100%" }}
              src={require(`../img/background_1.jpg`)}
              alt=""
            />
          </div>

          {/** map을 사용해서 출력 - 배열 */}
          {imageList.map((image) => (
            <div>
              <img
                style={{ width: "100%" }}
                src={require(`../img/${image}`)}
                alt=""
              />
            </div>
          ))}

          {imageList.map((image) => (
            <div>
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: "url(" + require("../img/" + image) + ")",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
          <div>
          <img
              style={{ width: "100%" }}
              src={require(`../img/background_4.jpg`)}
              alt=""
            />
          </div>
        </Slider>

        <div className="Home_main">
          {/** 현재 시간 출력
           * 1. {time.getHours()} 을 사용해서 시간을 나올 수 있게 함
           * => 시간은 초단위로 바뀌기 때문에 1초 마다 내용반복을 위해
           * setInterval 함수 사용
           * 2. 화면이 실행 됐을 때 setInterval 1번 사용
           * => 반복할 함수와, 초 적어줌
           * 마지막에 반복x -> 빈 배열 넣어줌
           *
           *  결과값에 변수가 아니라 함수가 들어가도 됨
           * setTime을 실행될 때 마다 업데이트가 되기 때문에
           *
           * 시간 자리 수 00:00:00 만들어주기!
           *  =>string과 .padStart() 써 주기
           *
           * 결과 보여줄 때 괄호까지 써서 작성하기
           */}
          <h1>{printClock()}</h1>

          {/** 배열 안에 있는 명언 중 하나 출력
           *
           * {words[0].text},{words[0].author} 하나의 내용 출력되는지 확인
           * 안에 인덱스를 변경해서 랜덤중에 하나 출력 할 수있게 함수 이용
           * {printWord().text} {printWord().author} 이렇게 넣으면 1초 마다 바뀌고
           * 다른 명언과 작가 들어가게 됨
           *
           * uaeMemo를 사용했을 경우, 그 함수의 return값이
           * 변수 안에 들어가게 된다. 사용할때, 변수이름으로만 사용
           */}
          <h4>{printWord.text}</h4>
          <p>{printWord.author}</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
