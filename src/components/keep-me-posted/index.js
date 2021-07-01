import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

function KeepMePosted({children, name}) {
  const {siteConfig} = useDocusaurusContext();
  const {emailJsUserId} = siteConfig.customFields;
  init(emailJsUserId);

  const [statusMessage, setStatusMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const form = document.querySelector('#keep-me-posted');

    sendForm('keep_me_posted', 'template_keep_me_posted', '#keep-me-posted')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setFormSent(true);
        setStatusMessage("Thanks for subscribing, we'll notify you when we release!");
        form.reset();
      }, function(error) {
        setFormSent(false);
        console.error('Failed to send form: ', error);
        setStatusMessage("Whoops, we could not register your email address. Please try again (later).");
    });
  }

  return (
      <div className={styles.wrapper}>
        <form id="keep-me-posted" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" name="user_email" {...register("user_email", { required: true })} 
            placeholder="Your email address" className={styles.emailAddress} />
          <input type="submit" value="Keep me posted" className={clsx("button", "button--primary", styles.submitButton)} />
          {errors.user_email?.type === 'required' && <div className={styles.alert}>Please enter an email address</div>}
        </form>
        <p className={clsx(styles.statusMessage, (formSent ? styles.success : styles.alert))}>{statusMessage}</p>
        {children}
      </div>
  );
}

export default KeepMePosted;
