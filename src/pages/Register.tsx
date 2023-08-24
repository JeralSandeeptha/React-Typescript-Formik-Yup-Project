import React from 'react'
import '../styles/Register/Register.css';
import axios from 'axios';
import { useFormik } from 'formik';

type RegisterProps = {
    
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    day: number;
    month: string;
    year: string;
    password: string;
    confirmPassword: string;
    isSubscribed: boolean;
}

const Register = (props: RegisterProps) => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phone: 'example',
          gender: 'male',
          day: 0,
          month: '',
          year: '',
          password: '',
          confirmPassword: '',
          isSubscribed: false
        },
        onSubmit: (values: User) => {
            registerUser(values);
        },
    });

    const registerUser = (values: User) => {
        console.log(values);
    }

    console.log(formik.values);

    return (
        <div className='register-outer'>
            <div className="register-inner">
                <form className="form" onSubmit={formik.handleSubmit}>
                    <h1 className='header'>Registration Form</h1>
                    <div className="input">
                        <h5 className='subheader'>First Name<span className='start-mark'>*</span></h5>
                        <input name="firstName" type="text" className='input-field' placeholder='Jhone' value={formik.values.firstName} onChange={formik.handleChange}/>
                    </div>
                    <div className="input">
                        <h5 className='subheader'>Last Name<span className='start-mark'>*</span></h5>
                        <input name='lastName' type="text" className='input-field' placeholder='Piter' value={formik.values.lastName} onChange={formik.handleChange}/>
                    </div>
                    <div className="input">
                        <h5 className='subheader'>Email <span className='start-mark'>*</span></h5>
                        <input name='email' type="email" className='input-field' placeholder='abcd@gmail.com' value={formik.values.email} onChange={formik.handleChange}/>
                    </div>
                    <div className="input">
                        <h5 className='subheader'>Phone<span className='start-mark'>*</span></h5>
                        <input name='phone' type="number" className='input-field' placeholder='example' value={formik.values.phone} onChange={formik.handleChange}/>
                    </div>
                    <div className="input-radio">
                        <div className="radio">
                            <input checked={formik.values.gender === 'male'} name='gender' onChange={formik.handleChange} type="radio" className='radio-btn'/>
                            <h5 className='subheader'>Male</h5>
                        </div>
                        <div className="radio">
                            <input checked={formik.values.gender === 'female'} name='gender' onChange={formik.handleChange} type="radio" className='radio-btn'/>
                            <h5 className='subheader'>Female</h5>
                        </div>
                    </div>
                    <div className="input">
                        <h5 className='subheader'>Birth Day</h5>
                        <div className='elements'>
                            <select onChangeCapture={formik.handleChange} value={formik.values.day} name="day" id="day" className='input-field-two'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <select onChangeCapture={formik.handleChange} value={formik.values.month} name="month" id="month" className='input-field-two'>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <select onChangeCapture={formik.handleChange} value={formik.values.year}  name="year" id="year" className='input-field-two'>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                    <div className="input">
                        <h5 className='subheader'>Password<span className='start-mark'>*</span></h5>
                        <input name='password' type="password" className='input-field' placeholder='#########' value={formik.values.password} onChange={formik.handleChange}/>
                    </div>
                    <div className="input">
                        <h5 className='subheader'>Confirm password<span className='start-mark'>*</span></h5>
                        <input name='confirmPassword' type="password" className='input-field' placeholder='#########' value={formik.values.confirmPassword} onChange={formik.handleChange}/>
                    </div>
                    <div className="input-description">
                        <input checked={formik.values.isSubscribed} onChange={formik.handleChange} name='isSubscribed' type="checkbox" className='check-box'/>
                        <h5 className='checkbox-text'>I'd like to receive marketing promotions special offers updates.</h5>
                    </div>
                    <div className="input">
                        <button type='submit' className='btn'>Sign Up</button>
                    </div>
                    <div className="input">
                        <h5 className='loginText'>Already have an account ? <span>Log in</span></h5>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register