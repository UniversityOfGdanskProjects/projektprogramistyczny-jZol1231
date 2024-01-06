import { useState } from 'react';
import Nav from '../components/Nav';
import { useFormik } from 'formik';

export default function Onboarding() {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            dob_day: undefined,
            dob_month: undefined,
            dob_year: undefined,
            gender_identity: null,
        },
        onSubmit: (values) => {
            console.log(values);
            
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
                        <label htmlFor='man-gender-identity'>Man</label>
                        <input
                            id='man-gender-identity'
                            type='radio'
                            name='gender_identity'
                            value='man'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_identity === 'man'}
                        />
                        <label htmlFor='woman-gender-identity'>Woman</label>
                        <input
                            id='woman-gender-identity'
                            type='radio'
                            name='gender_identity'
                            value='woman'
                            onChange={formik.handleChange}
                            checked={formik.values.gender_identity === 'woman'}
                        />
                    </div>

                    <label htmlFor='show-gender'>Show gender on my profile</label>
                    <input
                            id='show-gender'
                            type='checkbox'
                            name='show_gender'
                            onChange={formik.handleChange}
                            checked={false}
                        />

                </section>
                <button type='submit' className='secondary-button'>Submit</button>
            </form>
          </div>
        </>
    );
}


// export default function Onboarding() {

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             dob_day: undefined,
//             dob_month: undefined,
//             dob_year: undefined,
//             gender_identity: null,
//         },
//         onSubmit: (values) => {
//             console.log(values);
//         }
//     });

//     return (
//         <>
//           <Nav 
//             minimal={true}
//             authToken={false}
//             setShowModal={() => {}}
//             showModal={false}
//             setSignUp={false}
//           />  
//           <div className='onboarding'>
//             <h2>CREATE ACCOUNT</h2>

//             <form onSubmit={formik.handleSubmit}>
//                 <section>
//                     <label htmlFor='first_name' name='firstName'>First Name</label>
//                     <input 
//                         id='first_name'
//                         type='text'
//                         name='firstName'
//                         placeholder='First Name'
//                         onBlur={formik.handleBlur}
//                         onChange={formik.handleChange}
//                         value={formik.values.firstName}
//                     />
//                     <label htmlFor='dob_day'>Birthday</label> 
//                     <div className='multiple-input-container'>                   
//                         <input 
//                             id='dob_day'
//                             type='number'
//                             name='dob_day'
//                             placeholder='DD'
//                             required={true}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.dob_day}
//                             onChange={formik.handleChange}
//                         />                  
//                         <input 
//                             id='dob_month'
//                             type='number'
//                             name='dob_month'
//                             placeholder='MM'
//                             onBlur={formik.handleBlur}
//                             value={formik.values.dob_month}
//                             onChange={formik.handleChange}
//                         />                   
//                         <input 
//                             id='dob_year'
//                             type='number'
//                             name='dob_year'
//                             placeholder='YYYY'
//                             onBlur={formik.handleBlur}
//                             value={formik.values.dob_year}
//                             onChange={formik.handleChange}
//                         />
//                     </div>
//                     <label>Gender</label>
//                     <div className='multiple-input-container'>
//                             <label htmlFor='man-gender_identity-identity'>Man</label>
//                             <input
//                                 id='man-gender_identity-identity'
//                                 type='radio'
//                                 name='gender_identity'
//                                 value='man'
//                                 onChange={formik.handleChange}
//                                 checked={formik.values.gender_identity === 'man'}
//                             />
//                             <label htmlFor='woman-gender_identity-identity'>Woman</label>
//                             <input
//                                 id='woman-gender_identity-identity'
//                                 type='radio'
//                                 name='gender_identity'
//                                 value='woman'
//                                 onChange={formik.handleChange}
//                                 checked={formik.values.gender_identity === 'woman'}
//                             />
//                         </div>
//                     {/* <div className='multiple-input-container'>
//                         <label htmlFor='man-gender_identity-identity'>Man</label>
//                         <input 
//                             id='man-gender_identity-identity'
//                             type='radio'
//                             name='gender_identity'
//                             value={formik.values.gender_identity}
//                             onChange={formik.handleChange}
//                             checked={false}
//                         />
//                         <label htmlFor='woman-gender_identity-identity'>Woman</label>    
//                         <input 
//                             id='woman-gender_identity-identity'
//                             type='radio'
//                             name='gender_identity'
//                             value={formik.values.gender_identity}
//                             onChange={formik.handleChange}
//                             checked={false}
//                         />                     
//                     </div> */}
//                 </section>
//                 <button type='submit' className='secondary-button'>Submit</button>
//             </form>

//           </div>
//         </>
//     )
// }