import { useButton, ButtonAria } from '@react-aria/button';
import React, { FC, useRef, RefObject, ButtonHTMLAttributes } from 'react';
import { AriaButtonProps } from '@react-types/button';

interface ButtonProps extends AriaButtonProps {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const ref: RefObject<any> = useRef();
  const {
    buttonProps,
  }: ButtonAria<ButtonHTMLAttributes<HTMLButtonElement>> = useButton(
    props,
    ref,
  );
  return <button {...buttonProps}>{children}</button>;
};

export { Button };
