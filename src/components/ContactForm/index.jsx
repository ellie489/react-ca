import React, { useState } from 'react';
import styles from "./index.module.css";

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            console.log('Form submitted:', { fullName, subject, email, body });
            setSuccess(true);
        }
    };

    return (
        <div>
            {success ? (
                <div className={styles.successMessage}>Thank you! Your form has been submitted, and we will get back to you soon.</div>
            ) : (
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            minLength={3}
                        />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            minLength={3}
                        />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="body">Body:</label>
                        <textarea
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                            minLength={3}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
