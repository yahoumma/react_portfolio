import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Login() {
  const initVal = {
    userid: '',
    pwd1: ''
  }
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  }

  //submit이벤트 발생하면 실행되는 함수
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
    setErr(check(val));
    console.log(val);
  }

  //에러 객체를 반환하는 함수
  const check = val => {
    let errs = {};
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;

    if (!val.userid || val.userid.length < 5) {
      errs.userid = '아이디 5글자 이상입력';
    }
    if (!val.pwd1 || val.pwd1.length < 5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)) {
      errs.pwd1 = '비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함';
    }
    return errs;
  }

  useEffect(() => {
    console.log(err);
    const len = Object.keys(err).length;
    if (len === 0 && isSubmit) {
      console.log('인증 성공');
      setSuccess(true);
    } else {
      console.log('인증 실패');
      setSuccess(false);
    }
  }, [err]);

  return (
    <main className='content login'>
      <div className="inner">
        <div className="LoginImg">

        </div>

        <div className="loginBox">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal information by ID and Passwoed</p>
          <div className="loginForm">
            {success ? <div>로그인 되었습니다.</div> : null}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend className='h'>로그인 입력 폼 양식</legend>

                <table>
                  <caption className='h'>로그인 아이디 패스워드 입력</caption>
                  <tbody>
                    {/* userid */}
                    <tr>
                      <th colSpan='2'>
                        <input
                          type="text"
                          id='userid'
                          name='userid'
                          placeholder='User ID'
                          onChange={handleChange}
                        />
                        <span className='err'>{err.userid}</span>
                      </th>
                    </tr>

                    {/* password */}
                    <tr>
                      <th>
                        <input
                          type="password"
                          id='pwd1'
                          name='pwd1'
                          placeholder='Password'
                          onChange={handleChange}
                        />
                        <span className='err'>{err.pwd1}</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="ckBox">
                        <input type="checkbox" id="ck" /><label for="ck">Remember Me</label>
                      </th>

                    </tr>
                    {/* btn set */}
                    <tr>
                      <th className="btnSet">
                        <input type="submit" value='LOGIN' />
                        <Link className="joinBtn" to="/join">Create Account</Link>
                      </th>
                    </tr>
                    <tr>
                      <th className="joinSet">
                        <span> Or you can join with </span>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fab fa-facebook-f"></i>
                            </a>
                          </li>

                        </ul>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login;