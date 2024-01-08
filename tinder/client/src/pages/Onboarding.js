import { useState } from 'react';
import Nav from '../components/Nav';
import { useFormik } from 'formik';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Onboarding() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            user_id: cookies.UserId,
            first_name: '',
            dob_day: undefined,
            dob_month: undefined,
            dob_year: undefined,
            gender_identity: undefined,
            show_gender: false,
            gender_interest: undefined,
            // email: cookies.email,
            url: '',
            about: '',
            matches: []
        },
        onSubmit: async (values) => {

            console.log(values);
            
            try {
                const response = await axios.put('http://localhost:8000/user', { values } )

                console.log(response);

                const success = response.status === 200;

                console.log(success);
                
                if (success) {
                    navigate('/dashboard');
                }
            } catch (error) {
                console.log(error);
            }
            
        },
    });

    return (
        <>
           <Nav 
             minimal={true}
             authToken={false}
             setShowModal={() => {}}
             showModal={false}
             setSignUp={false}
           />  
          <div className='onboarding'>
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={formik.handleSubmit}>
                <section>
                    <label htmlFor='first_name'>First Name</label>
                    <input 
                        id='first_name'
                        type='text'
                        name='first_name'
                        placeholder='First Name'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <label htmlFor='dob_day'>Birthday</label> 
                    <div className='multiple-input-container'>                   
                        <input 
                            id='dob_day'
                            type='number'
                            name='dob_day'
                            placeholder='DD'
                            required={true}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob_day}
                            onChange={formik.handleChange}
                        />                  
                        <input 
                            id='dob_month'
                            type='number'
                            name='dob_month'
                            placeholder='MM'
                            onBlur={formik.handleBlur}
                            value={formik.values.dob_month}
                            onChange={formik.handleChange}
                        />                   
                        <input 
                            id='dob_year'
                            type='number'
                            name='dob_year'
                            placeholder='YYYY'
                            onBlur={formik.handleBlur}
                            value={formik.values.dob_year}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <label>Gender</label>
                    <div className='multiple-input-container'>
                        <input
                            id='man-gender-identity'
                            type='radio'
                            name='gender_identity'
                            value='man'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_identity === 'man'}
                        />
                        <label htmlFor='man-gender-identity'>Man</label>

                        <input
                            id='woman-gender-identity'
                            type='radio'
                            name='gender_identity'
                            value='woman'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_identity === 'woman'}
                        />
                        <label htmlFor='woman-gender-identity'>Woman</label>

                        <input
                            id='more-gender-identity'
                            type='radio'
                            name='gender_identity'
                            value='more'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_identity === 'more'}
                        />
                        <label htmlFor='more-gender-identity'>More</label>
                    </div>

                    <label htmlFor='show-gender'>Show gender on my profile</label>
                    <input
                            id='show-gender'
                            type='checkbox'
                            name='show_gender'
                            value={false}
                            onChange={formik.handleChange}
                            checked={formik.values.show_gender === true}
                    />

                    <label>Show me</label>
                    <div className='multiple-input-container'>
                        <input
                            id='man-gender-interest'
                            type='radio'
                            name='gender_interest'
                            value='man'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_interest === 'man'}
                        />
                        <label htmlFor='man-gender-interest'>Man</label>

                        <input
                            id='woman-gender-interest'
                            type='radio'
                            name='gender_interest'
                            value='woman'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_interest === 'woman'}
                        />
                        <label htmlFor='woman-gender-interest'>Woman</label>                        
                        
                        <input
                            id='everyone-gender-interest'
                            type='radio'
                            name='gender_interest'
                            value='everyone'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_interest === 'everyone'}
                        />
                        <label htmlFor='everyone-gender-interest'>Everyone</label>
                    </div>

                    <label htmlFor='about'>About me</label>
                    <input 
                        id='about'
                        type='text'
                        name='about'
                        placeholder='I like long walks'
                        values={formik.values.about}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <button type='submit' className='secondary-button'>Submit</button>

                </section>

                <section>

                    <label htmlFor='photo'>Profile Photo</label>
                        <input 
                            type='url'
                            name='url'
                            id='url'
                            onChange={formik.handleChange}
                        />
                        <div className='photo-container'>
                            {formik.values.url && <img src={formik.values.url} alt='your profile pic'/>}
                        </div>

                </section>

            </form>
          </div>
        </>
    );
}
