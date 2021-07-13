import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import {
  makeButtonContext,
  makeErrorContext,
  makeInputChangeEvent,
  makeInputContext,
  makeNonInteractiveEvent,
  ReactTracker,
  trackButtonClick,
  useTracker,
  useTrackOnChange,
} from '@objectiv/tracker-react';

function KeepMePosted({children, name}) {
  const {siteConfig} = useDocusaurusContext();

  const tracker = useTracker();
  const inputTracker = new ReactTracker(tracker, {
    location_stack: [makeInputContext({ id: 'keep-me-posted-input' })],
  });

  const {emailJsUserId} = siteConfig.customFields;
  init(emailJsUserId);
  
  const [emailString, setEmailString] = React.useState('');
  const [blurredEmailString, setBlurredEmailString] = React.useState('');
  useTrackOnChange(blurredEmailString, makeInputChangeEvent(), inputTracker); // TBD: fire only on blur?

  const [statusMessage, setStatusMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const form = document.querySelector('#keep-me-posted');

    sendForm('keep_me_posted', 'template_keep_me_posted', '#keep-me-posted')
      .then(function(response) {
        // TODO
        // tracker.trackEvent(makeFormSubmitEvent())
        console.log('SUCCESS!', response.status, response.text);
        setFormSent(true);
        setStatusMessage("Thanks for subscribing, we'll notify you when we release!");
        form.reset();
      }, function(error) {
        tracker.trackEvent(makeNonInteractiveEvent({global_contexts: [makeErrorContext({id: "keep-me-posted", message: "failed to send"})]}))
        setFormSent(false);
        console.error('Failed to send form: ', error);
        setStatusMessage("Whoops, we could not register your email address. Please try again (later).");
    });
  }

  return (
      <div className={styles.wrapper}>
        <form id="keep-me-posted" onSubmit={handleSubmit(onSubmit)}>
          <input 
            id={'email'}
            placeholder="Your email address" 
            type="email" 
            name="email_address" 
            {...register("email_address", { required: true })} 
            onChange={(event) => {
              setEmailString(event.currentTarget.value);
            }}
            onBlur={() => setBlurredEmailString(emailString)}
            className={styles.emailAddress} 
          />
          <input 
            id="subscribe"
            type="submit" 
            value="Keep me posted" 
            onClick={() => trackButtonClick(  // TODO: should handle this in the sendForm function instead
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
