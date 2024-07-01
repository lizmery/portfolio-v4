'use client'

import { FormEvent, useState } from 'react';
import shapeOne from '../../assets/shape-1.png';
import styles from './contact.module.css'
import Image from 'next/image';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

  };

  return (
    <section className={`${styles.contact} section`} id='contact'>
      <h2 className='section__title uppercase'>
        Contact<span className='dot'>.</span>
      </h2>
      <p className='section__subtitle'>
        Get In Touch
      </p>

      <div className={`${styles.contact__container} container grid`}>
        {/* <div className='contact__content'>
          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegMap />
            </span>

            <h3 className='contact__card-title'>Address</h3>
            <p className='contact__card-data'>North Tower, Toronto, Canada</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegUser />
            </span>

            <h3 className='contact__card-title'>Freelance</h3>
            <p className='contact__card-data'>Available Right Now</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegEnvelope />
            </span>

            <h3 className='contact__card-title'>Email</h3>
            <p className='contact__card-data'>zoe.miller@gmail.com</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegAddressBook />
            </span>

            <h3 className='contact__card-title'>Phone</h3>
            <p className='contact__card-data'>+1 900 - 900 - 9000</p>
          </div>
        </div> */}

        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <div className={`${styles.contact__formGroup} grid`}>
            <div className={styles.contact__formDiv}>
              <label className={`${styles.contact__formTag} text-cs`}>
                Your Full Name <b className='font-bold text-lg leading-3'>*</b>
              </label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                value={form.name}
                className={styles.contact__formInput}
              />
            </div>

            <div className={styles.contact__formDiv}>
              <label className={`${styles.contact__formTag} text-cs`}>
                Your Email Address <b className='font-bold text-lg leading-3'>*</b>
              </label>
              <input
                type='text'
                name='email'
                onChange={handleChange}
                value={form.email}
                className={styles.contact__formInput}
              />
            </div>
          </div>
          <div className={styles.contact__formDiv}>
            <label className={`${styles.contact__formTag} text-cs`}>
              Your Subject <b className='font-bold text-lg leading-3'>*</b>
            </label>
            <input
              type='text'
              name='subject'
              onChange={handleChange}
              value={form.subject}
              className={styles.contact__formInput}
            />
          </div>
          <div className={`${styles.contact__formDiv} ${styles.contact__formArea}`}>
            <label className={`${styles.contact__formTag} text-cs`}>
              Your Message <b className='font-bold text-lg leading-3'>*</b>
            </label>
            <textarea
              name='message'
              onChange={handleChange}
              value={form.message}
              className={styles.contact__formInput}
            ></textarea>
          </div>

          <div className={styles.contact__submit}>
            
            <button type='submit' className={`btn ${styles.contact__btn} text-cs`}>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className='section__deco deco__right'>
        <Image src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title dark'>Contact</span>
      </div>
    </section>
  )
}
