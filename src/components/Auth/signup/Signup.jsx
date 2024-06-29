import { useEffect, useState } from "react";
import "./Signup.css";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../../../redux/action";
export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [exp, setExp] = useState(true);
    const [current, setCurrent] = useState([]);
    const [checkBox, setCheckBox] = useState(false);


    const { loading, message, error } = useSelector(state => state.user)

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const value = e.target.value;
            setCurrent((prevCurrent) => {
                const newCurrent = [...prevCurrent, value];
                return newCurrent;
            });
            e.target.value = "";
        }
    };
    const dispatch = useDispatch();
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword || !gender || current.length === 0) {
            if (!name) {
                return toast.error("Please enter Name field");
            }
            if (!email) {
                return toast.error("Please enter Email field");
            }
            if (!password) {
                return toast.error("Please enter password field");
            }
            if (!confirmPassword) {
                return toast.error("Please enter password field field");
            }
            if (!gender) {
                return toast.error("Please select Gender field");
            }
            if (current.length === 0) {
                return toast.error("Please type Address field and type enter");
            }
        }
        else if (password !== confirmPassword) {
            return toast.error("Password and confirm password not match");
        }
        else {
            dispatch(getRegister(name, email, password, gender, exp, current, checkBox))
        }

    }


    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);

    return (
        <>

            <div className="signup">
                <div className="container">
                    <div className="image-logo">
                        <img src="/utils/logo.png" alt="logo" className="signup-logo" />
                    </div>
                    <div className="form-layout-container">
                        <div className="heading-title">
                            <h3>Create your workex profile</h3>
                        </div>
                        <div className="input-fileds">
                            <input
                                type="text"
                                placeholder="Fullname"
                                className="signup-input"
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <div className="input-fileds">
                            <input
                                type="email"
                                placeholder="Email"
                                className="signup-input"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="input-fileds">
                            <input
                                type="password"
                                placeholder="Password"
                                className="signup-input"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                        <div className="input-fileds">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="signup-input"
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                }}
                            />
                        </div>
                        <div className="radio-button">
                            <input type="radio" name="gender" id="male" value={"male"} onChange={(e) => { setGender(e.target.value) }} />
                            <label htmlFor="male" className="radio-label">
                                Male
                            </label>
                            <input type="radio" name="gender" id="female" value={"female"} onChange={(e) => { setGender(e.target.value) }} />
                            <label htmlFor="female" className={"radio-label"}>
                                Female
                            </label>
                        </div>
                        <div className="sub-heading">
                            <h5>Work Status</h5>
                        </div>
                        <div className="workstatus">
                            <div
                                className={`workstatus-left  ${exp ? "background-gray" : ""}`}
                                onClick={() => {
                                    setExp(true);
                                }}
                            >
                                {exp ? <TiTick className="tickmark" /> : ""}
                                <h4>I'm experienced</h4>
                                <p className="paragragh-font-size">I have work experience</p>
                                <p className="paragragh-font-size">(excluding internship)</p>
                            </div>
                            <div
                                className={`workstatus-right  ${exp ? "" : "background-gray"}`}
                                onClick={() => {
                                    setExp(false);
                                }}
                            >
                                {exp ? "" : <TiTick className="tickmark" />}
                                <h4>I'm a fresher</h4>
                                <p className="paragragh-font-size">
                                    I am a student/Haven't worked after graduation
                                </p>
                            </div>
                        </div>
                        <div className="current-city">
                            <p className="p-title">city name - (max 5)</p>
                            <textarea
                                onKeyDown={handleKeyDown}
                                className="text-area"
                                rows={3}
                                disabled={current.length === 5 ? true : false}
                            ></textarea>
                            {current.map((item, index) => (
                                <span className="show-data" key={index}>
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="checkbox">
                            <div>
                                <input
                                    type="checkbox"
                                    id="chek"
                                    className="send-update"
                                    onChange={(e) => {
                                        setCheckBox(e.target.checked)
                                    }}
                                ></input>
                            </div>
                            <label htmlFor="chek" className="checkbox-caption">
                                Send me important updates & promotions via Sms,email and
                                whatsApp
                            </label>
                        </div>
                        <div className="sub-heading-last">
                            <p className="text-center-wrap">
                                By signing up you confirm that you can read and accepted our{" "}
                                <b className="blue">User Notice</b> and{" "}
                                <b className="blue">Privacy Policy</b>
                            </p>
                        </div>
                        <div className="submit-button">
                            <input
                                type="button"
                                value="Register Now"
                                className="submit-btn"
                                onClick={(e) => handleSubmitClick(e)}
                            />
                        </div>
                        <div className="sub-heading-last">
                            <p className="text-center-wrap">
                                <b className="blue">Already have an Pretelan account?login</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
