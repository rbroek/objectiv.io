import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import {
  makeButtonContext,
  makeErrorContext,
  makeActionContext,
  makeInputContext,
  makeNonInteractiveEvent,
  ReactTracker,
  trackButtonClick,
  useTracker,
} from '@objectiv/tracker-react';

function KeepMePosted({children, name}) {
  const {siteConfig} = useDocusaurusContext();

  const tracker = useTracker();
  const inputTracker = new ReactTracker(tracker, {
    location_stack: [makeInputContext({ id: 'keep-me-posted-input' })],
  });

  const {emailJsUserId} = siteConfig.customFields;
  init(emailJsUserId);
  
  const [statusMessage, setStatusMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const form = document.querySelector('#keep-me-posted');

    sendForm('keep_me_posted', 'template_keep_me_posted', '#keep-me-posted')
      .then(function(response) {
        // TODO: needs its own event, e.g. tracker.trackEvent(makeFormSubmitEvent())
        var successMessage = "Thanks for subscribing, we'll notify you when we release!";
        tracker.trackEvent(makeNonInteractiveEvent({global_contexts: [makeActionContext({id: "keep-me-posted", text: successMessage})]}))
        setFormSent(true);
        setStatusMessage(successMessage);
        form.reset();
      }, function(error) {
        var failedMessage = "Whoops, we could not register your email address. Please try again (later).";
        tracker.trackEvent(makeNonInteractiveEvent({global_contexts: [makeErrorContext({id: "keep-me-posted", message: failedMessage})]}))
        setFormSent(false);
        setStatusMessage(failedMessage);
    });
  }

  return (
      <div className={styles.wrapper}>
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
            onClick={() => trackButtonClick(
              makeButtonContext({ 
                id: 'subscribe', 
                text: 'Keep me posted',
              }),
              inputTracker)}
            className={clsx("button", "button--primary", styles.submitButton)} 
          />
          {errors.email_address?.type === 'required' && <div className={styles.alert}>Please enter an email address</div>}
        </form>
        <p className={clsx(styles.statusMessage, (formSent ? styles.success : styles.alert))}>{statusMessage}</p>
        {children}
      </div>
  );
}

export default KeepMePosted;
