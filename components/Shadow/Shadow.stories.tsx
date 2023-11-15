import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return <div className={`${arguments_['shadow']} padding-xxl border-radius-m margin-l`} />;
};

export default {
  title: 'Design Tokens/Shadow',
  component: Siux,
  argTypes: {
    shadow: {
      options: [
        'box-shadow-xs',
        'box-shadow-s',
        'box-shadow-m',
        'box-shadow-l',
        'box-shadow-xl',
        'hover:box-shadow-xs',
        'hover:box-shadow-s',
        'hover:box-shadow-m',
        'hover:box-shadow-l',
        'hover:box-shadow-xl',
        'width-xxl height-xxl',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

export const General = {
  parameters: {
    docs: {
      source: {
        code: `
        <div className="display-flex flex-wrap">
          <div className="margin-xxs">
            <div className="box-shadow-xs padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-xs</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-s padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-s</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-m padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-m</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-l padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-l</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-xl padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-xl</div>
          </div>
        </div>
        <div className="display-flex flex-wrap">
          <div className="margin-xxs">
            <div className="hover:box-shadow-xs transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-xs</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-xs hover:box-shadow-s transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-s</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-s hover:box-shadow-m transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-m</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-m hover:box-shadow-l transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-l</div>
          </div>
          <div className="margin-xxs">
            <div className="box-shadow-l hover:box-shadow-xl transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-xl</div>
          </div>
        </div>
      </>
        `,
      },
    },
  },
  render: () => (
    <>
      <div className="margin-s font-size-s font-weight-600 text-align-left">Shadow</div>
      <div className="display-flex flex-wrap">
        <div className="margin-xxs">
          <div className="box-shadow-xs padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-xs</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-s padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-s</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-m padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-m</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-l padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-l</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-xl padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-xl</div>
        </div>
      </div>
      <div className="margin-s margin-top-xxl font-size-s font-weight-600 text-align-left">Shadow hover</div>
      <div className="display-flex flex-wrap">
        <div className="margin-xxs">
          <div className="hover:box-shadow-xs transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            hover:box-shadow-xs
          </div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-xs hover:box-shadow-s transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-s</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-s hover:box-shadow-m transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-m</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-m hover:box-shadow-l transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-l</div>
        </div>
        <div className="margin-xxs">
          <div className="box-shadow-l hover:box-shadow-xl transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            hover:box-shadow-xl
          </div>
        </div>
      </div>
    </>
  ),
};

export const ExtraSmall = {
  render: Template,

  args: {
    shadow: 'box-shadow-xs',
  },
};

export const Small = {
  render: Template,

  args: {
    shadow: 'box-shadow-s',
  },
};

export const Medium = {
  render: Template,

  args: {
    shadow: 'box-shadow-m',
  },
};

export const Large = {
  render: Template,

  args: {
    shadow: 'box-shadow-l',
  },
};

export const ExtraLarge = {
  render: Template,

  args: {
    shadow: 'box-shadow-xl ',
  },
};

export const HoverShadow = {
  render: Template,

  args: {
    shadow: 'box-shadow-m hover:box-shadow-xl',
  },
};
