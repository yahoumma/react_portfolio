import { useState } from "react";
import { NavLink } from "react-router-dom";

function Join() {
    const initVal = {
        userid: ''
    }


    const [val, setVal] = useState(initVal);


    const handleChange = e => {
        //console.log(e.target);
        const { name, value } = e.target;
        setVal({ ...val, [name]: value });
        console.log(val);
    }
    const handleSubmit = e => {
        e.prevenrDefault();
    }
    return (
        <section className="content join">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/join">Join</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="h">회원가입 입력 폼 양식</legend>
                        <table>
                            <caption className="h">회원가입 입력</caption>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <lebel htmlFor="userid">USER ID</lebel>
                                    </th>
                                    <td>
                                        <input type="text" id="userid" name="userid" placeholder="아이디를 입력하세요."
                                            value={val.userid}
                                            onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <lebel htmlFor="pwd1">PASSWORD</lebel>
                                    </th>
                                    <td>
                                        <input type="text" id="pwd1" name="pwd1" />
                                    </td>
                                </tr>
                                <tr>
                                    <th colspan="2">
                                        <input type="reset" value="CANCEL" />
                                        <input type="submit" value="SEND" />
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Join;