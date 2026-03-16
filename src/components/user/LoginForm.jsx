import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SubmitBtn from '../../helper/SubmitBtn';
import Spacer from '../../helper/Spacer';
import UserStore from '../../store/UserStore';
import ValidationHelper from '../../utility/ValidationHelper';
import { RequiredMSG, SuccessMSG } from '../../utility/MessageHelper';
import { useState } from 'react';
import axios from 'axios';
import { setToken } from '../../utility/Storage';

const LoginForm = () => {

        let navigate = useNavigate();
        const [Text, setText] = useState('Send OTP');
        const [showOTP, setshowOTP] = useState(false);
        const [isDisabled, setisDisabled] = useState(false);
        const [isVerifyStep, setisVerifyStep] = useState(false);
        const {LoginFormData, LoginFormOnChange, UserOTPRequest, OTPVerifyRequest, loginToken} = UserStore();

      const userLogin = async (event) => {
            event.preventDefault();
            if(!ValidationHelper.IsEmail(LoginFormData.email)){
                RequiredMSG('Valid email required!')
            }else{
                let response = await UserOTPRequest(LoginFormData.email);
                if(response === true){
                    setText('Very OTP');
                    setshowOTP(true);
                    setisDisabled(true);
                    setisVerifyStep(true);
                    SuccessMSG('We\'ve sent 5 digit otp');
                }
            }
      };

      const verifyLogin = async (event) => {
        event.preventDefault();
        console.log(LoginFormData.otp)
        if(ValidationHelper.IsEmpty(LoginFormData.otp)){
            RequiredMSG('Valid OTP required!')
        }else{
            let response = await OTPVerifyRequest(LoginFormData.email, LoginFormData.otp);
            if(response === true){
                navigate('/profile')
            }
        }
      }

    

    return (
        <Container className='py-5 my-5'>
            <Row>
                <Col xs={12} className='d-flex justify-content-center align-items-center'>
                    <div className='form-card bg-clr p-4 d-flex flex-column align-items-center justify-content-center'>
                        <h5>Login with OTP</h5>
                        <p className='pb-2'>A verification code will be sent to the email address you provide</p>
                        <form onSubmit={isVerifyStep ? verifyLogin : userLogin}>
                            <input type="email" value={LoginFormData.email} onChange={(e) => {LoginFormOnChange("email", e.target.value)}} placeholder='Enter email' disabled={isDisabled} />
                            <br/>
                            {
                                showOTP && (
                                    <input type="text" value={LoginFormData.otp} onChange={(e) => {LoginFormOnChange("otp", e.target.value)}} placeholder='6 Digit Otp' />
                                )
                            }
                            <br/>
                            <SubmitBtn Text={Text}>Sent OTP</SubmitBtn>
                            <br/>
                        </form>
                        <Spacer size={20} />
                        <p className='pb-2'>I don't have account? <Link to='#'>sign up</Link></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;