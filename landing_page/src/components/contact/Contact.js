import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect, useRef } from 'react';
 
export default function Contact() {

    const [msgSent, setMsgSent] = useState(false);

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: (values, { resetForm }) => {
            // alert(`Thank you for contacting us, ${values.name}! We will get back to you soon.`);
            resetForm();
            setMsgSent(prev => !prev);
        }
    });


    return (
        <section className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            {msgSent ? 
            <>
               <p className="text-2xl mt-2">Thanks for sharing your thoughts!</p> 
               <button onClick={ () => setMsgSent(prev => !prev) } className="px-6 py-3 bg-blue-500 p-5 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                        Send Another Message
                </button>
            </> 
            : 
            <>
                <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto flex flex-col space-y-4">
                    <input ref={ nameInputRef } type="text" name="name" placeholder="Your Name" {...formik.getFieldProps('name')} className="p-2 bg-gray-800 text-white rounded" />
                    {formik.touched.name && formik.errors.name ? <p className="text-red-500">{formik.errors.name}</p> : null}
                    
                    <input type="email" name="email" placeholder="Your Email" {...formik.getFieldProps('email')} className="p-2 bg-gray-800 text-white rounded" />
                    {formik.touched.email && formik.errors.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
                    
                    <textarea name="message" placeholder="Your Message" {...formik.getFieldProps('message')} className="p-2 bg-gray-800 text-white rounded h-32"></textarea>
                    {formik.touched.message && formik.errors.message ? <p className="text-red-500">{formik.errors.message}</p> : null}
                    
                    <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                        Send Message
                    </button>
                </form>
                <p className="mt-2 text-gray-600">Reach out to us anytime!</p>
            </>}
        </section>
    );
}