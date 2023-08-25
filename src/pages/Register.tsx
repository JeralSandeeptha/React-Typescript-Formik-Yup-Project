import React from 'react'
import '../styles/Register/Register.css';
import axios from 'axios';
import { months, dates, years } from '../constants/data';
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

    const setDefaultValues = () => {
        formik.handleReset(formik.values);
    }

    const registerUser = (values: User) => {
        const user = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            gender: values.gender,
            birthday: values.day + " " + values.month + " " + values.year,
            isSubscribed: values.isSubscribed
        }

        try {
            if (values.password === values.confirmPassword) {
                axios.post('http://localhost:5000/users', user)
                .then( (res) => {
                    if (res.status === 201) {
                        alert('User registration successfull');
                        setDefaultValues();
                    }                
                })
                .catch( (error) => {
                    console.log(error);
                })
            } else {
                alert('Both passwords should be match');
            }
        } catch (error) {
            console.log('Server error, Please try again later.');
        }
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
                                {
                                    dates.map( (date, index) => {
                                        return (
                                            <option key={index} value={date.value}>{date.title}</option>
                                        )
                                    })
                                }
                            </select>
                            <select onChangeCapture={formik.handleChange} value={formik.values.month} name="month" id="month" className='input-field-two'>
                                {
                                    months.map( (month, index) => {
                                        return (
                                            <option key={index} value={month.value}>{month.title}</option>
                                        )
                                    })
                                }
                            </select>
                            <select onChangeCapture={formik.handleChange} value={formik.values.year}  name="year" id="year" className='input-field-two'>
                                {
                                    years.map( (year, index) => {
                                        return (
                                            <option key={index} value={year.value}>{year.title}</option>
                                        )
                                    })
                                }
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