import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

export default function ExampleServersideComponent(props: {
  firstName: string;
  lastName: string;
  telephone: string;
}) {
  return (
    <>
      This is a simple serverside component that displays my name and my telephone. My name is{' '}
      {props.firstName} {props.lastName} and my telephone is {props.telephone}
    </>
  );
}

FEAAS.registerComponent(ExampleServersideComponent, {
  name: 'serverside-only',
  description: 'Description of my example component',
  required: ['firstName'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
    },
  },
});
