import { useState } from "react";
// {useState} import해 온 내용이 여기에서만 영향을 끼침
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//firebase - 회원가입, 로그인 , 구글로 로그인하기 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // 로그인 후 페이지를 이동하기 위한 navigate();
  const navigate = useNavigate();

  // 이메일과 비밀번호를 가져올 state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // 이메일로 회원가입 하기 위한 함수
  const emailCreate = () => {
    //getAuth는 파이어베이스 앱에서 인증 부분을 받아오는 함수
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 회원가입 성공!
        const user = userCredential.user;
        console.log(user);
        // 성공하면 home으로 이동
        alert("회원가입성공!");
        navigate('/');

      })
      // 오류 났을 때 콘솔에 확인 
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // alert창을 통해 오류 알려주기 
        if ( errorCode == "auth/email-already-in-use") {
          alert("이미 사용하고 있는 이메일입니다")
        }
        else if ( errorCode=="auth/weak-password") {
          alert("비밀번호를 6자리 이상으로 작성하세요");
        }
      });
  };

  // 이메일과 비밀번호로 로그인 하기
  const emailLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 로그인 성공
    const user = userCredential.user;
    console.log(user);
    // 로그인에 성공했을 때 홈화면으로 이동
    navigate('/')
    })

    // 오류났을 때
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // 오류났을 때 alert창으로 알려주기 
    if( errorCode == "auth/wrong-password" ) {
      alert("잘못된 비밀번호 입니다");
    } 
    else if (  errorCode == "auth/user-not-found" ) {
      alert("없는 이메일입니다");
    }
    });
  }

  // form의 onSubmit에 연결할 함수 
  // form의 경우에는 새로고침 없이 값이 사라질 수 있어
  // preventDefault()를 통해서 막아주어야 한다
  const onsubmit = (e) => {
    e.preventDefault();
    emailLogin()
  }


  // 구글로 로그인하기 (팝업)
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // 성공했을 때 콘솔에 나타내기
        console.log(user)

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        // 오류났을 때 콘솔에 나타내기
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <div>
      {/** form은 항상 새로고침이 되기 때문에 주의해야함 */}
      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button onClick={emailCreate}>회원가입</Button>
      <Button onClick={googleLogin}>Google Login</Button>
    </div>
  );
};

export default LoginForm;
