import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <Head>
        <title>Contact page</title>
        <meta name='description' content='Contact me' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.contactContainer}>
        <div className={styles.heading}>
          <h1>Contact me</h1>
        </div>
        <form>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={name}
            placeholder='Enter your name'
            onChange={handleChange}
            name='name'
          />
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            value={email}
            placeholder='Enter your email'
            name='email'
            onChange={handleChange}
          />
          <label htmlFor='message'></label>
          <textarea
            name='message'
            id='message'
            placeholder='Enter your message'
            value={message}
            onChange={handleChange}
          ></textarea>
        </form>
        <p>{name}</p>
        <p>{email}</p>
        <p>{message}</p>
      </main>
    </>
  );
}
