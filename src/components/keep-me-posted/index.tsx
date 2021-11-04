import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { makeErrorContext, tagButton, tagElement, trackAborted, trackClick, trackCompleted } from "@objectiv/tracker-browser";

function KeepMePosted() {
  const {siteConfig} = useDocusaurusContext();

  const {emailJsUserId} = siteConfig.customFields;
  init(emailJsUserId as string);
  
  const [statusMessage, setStatusMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {
    const form: HTMLFormElement = document.querySelector('#keep-me-posted');

    sendForm('keep_me_posted', 'template_keep_me_posted', '#keep-me-posted')
      .then(function() {
        const successMessage = "Thanks for subscribing, we'll notify you when we release!";
        trackCompleted({ element: form });
        setFormSent(true);
        setStatusMessage(successMessage);
        form.reset();
      }, function() {
        const failedMessage = "Whoops, we could not register your email address. Please try again (later).";
        const errorContext = makeErrorContext({ id: "keep-me-posted", message: failedMessage });
        trackAborted({ globalContexts: [errorContext], element: form });
        setFormSent(false);
        setStatusMessage(failedMessage);
    });
  }

  return (
    <div 
      className={styles.wrapper}
      {...tagElement({id: 'keep-me-posted-form'})}
    >
      <form id="keep-me-posted" onSubmit={handleSubmit(onSubmit)}>
        <input 
          placeholder="Your email address" 
          type="email" 
          name="email_address" 
          {...register("email_address", { required: true })} 
          className={styles.emailAddress} 
        />
        <input 
          type="submit" 
          value="Keep me posted"
          {...tagButton({ id: 'subscribe', text: "Keep me posted" })}
          onClick={event => trackClick({ element: event.target })}
          className={clsx("button", "button--primary", styles.submitButton)}
        />
        {errors.email_address?.type === 'required' && <div className={styles.alert}>Please enter an email address</div>}
      </form>
      <p className={clsx(styles.statusMessage, (formSent ? styles.success : styles.alert))}>{statusMessage}</p>
    </div>
  );
}

export default KeepMePosted;
