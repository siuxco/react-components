import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    state: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (_arguments) => <Alert {..._arguments} />;

export const Info = Template.bind({});
Info.args = {
  state: 'info',
  children: 'Informational note',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
  children: 'Informational note',
};

export const Warning = Template.bind({});
Warning.args = {
  state: 'warning',
  children: 'Informational note',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  children: 'Informational note',
};
