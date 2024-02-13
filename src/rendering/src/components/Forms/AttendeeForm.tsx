import React, { FormEvent, useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
import { identifyVisitor } from '../../services/IdentificationService';
import { getUserData } from '../../helpers/GuestDataHelper';
import { logAttendeeFormCompleted } from 'src/services/CdpService';
import { logAttendeeFormCompleted as logAttendeeFormCompletedCloudSDK } from 'src/services/CloudSDKService';

const AttendeeForm = (props: ComponentProps): JSX.Element => {
  const ticketId =
    typeof window === 'undefined' ? '0' : new URLSearchParams(window.location.search).get('ticket');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const sxaStyles = `${props.params?.styles || ''}`;

  useEffect(() => {
    const setUserData = async () => {
      const userData = await getUserData();

      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
    };

    setUserData();
  }, []);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      alert('All form fields must be filled.');
      return;
    }

    await identifyVisitor(email, firstName, lastName);
    await logAttendeeFormCompleted();

    // Log the 'ATTENDEE_FORM_COMPLETED' custom event to CDP using the Cloud SDK
    try {
      await logAttendeeFormCompletedCloudSDK();
    } catch (e) {
      console.error(e);
    }

    Router.push(`/tickets/payment?ticket=${ticketId}`);
  };

  return (
    <form className={`form attendee-registration-form ${sxaStyles}`} onSubmit={handleFormSubmit}>
      <h2>Attendee Registration</h2>
      <div className="floating-label-wrap">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          autoComplete="given-name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="floating-label-wrap">
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          autoComplete="family-name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
      <div className="floating-label-wrap">
        <input
          type="text"
          placeholder="Email"
          id="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      {/* TODO: Implement later when registration is setup
      <div className="floating-label-wrap">
        <input type="password" placeholder="Password" id="password" />
        <label htmlFor="password">Password</label>
      </div> */}
      <label className="checkbox-label">
        <input type="checkbox" defaultChecked={false} />
        <span className="label-text">I wish to receive updates on the expo</span>
      </label>
      <label className="checkbox-label">
        <input type="checkbox" defaultChecked={false} />
        <span className="label-text">
          I wish to receive updates from third party vendors and promotions
        </span>
      </label>
      <div className="button-area">
        <button className="btn-main" type="submit">
          Next
        </button>
      </div>
      <div className="footnote">
        <p>
          Already have an account? <Link href="#">Log in.</Link>
        </p>
        <p>
          To find out more about how we are using this information you are giving up, please review
          our <Link href="/privacy">privacy statement</Link>
        </p>
      </div>
    </form>
  );
};

export const Default = AttendeeForm;
