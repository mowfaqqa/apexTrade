/* eslint-disable require-jsdoc */
import clsx from "clsx";
import React from "react";

export interface ButtonProps {
  variant?: keyof typeof ButtonVariantClass;
  prefix?: import("react").ReactNode;
  suffix?: import("react").ReactNode;
  [x: string]: any;
}

export const Button4 = React.forwardRef(function Button4(
  props: ButtonProps,
  ref: any
) {
  const { className, variant, prefix, suffix, children, ...rest } = props;

  return (
    <button
      ref={ref}
      className={clsx("button", ButtonVariantClass[variant!], className)}
      {...rest}
    >
      {prefix}
      {children}
      {suffix}
    </button>
  );
});

export default Button4;

const ButtonVariantClass: any = {
  danger: "button-danger",
  primary: "button-primary",
  tertiary: "button-tertiary",
  secondary: "button-secondary",
  "danger-tertiary": "button-danger-tertiary",
};

interface IButtonProps {
  text?: string;
  isLoading?: boolean;
  [key: string]: any;
}

export const Button = ({
  text,
  isLoading,
  ...rest
}: IButtonProps): JSX.Element => (
  <button
    {...rest}
    type="submit"
    className={clsx(
      "bg-sky-400 text-white hover:bg-sky-400 active:bg-green-600 block mx-auto py-3 px-4 w-64 md:w-96 rounded-md text-lg",
      {
        ["opacity-75 cursor-not-allowed disabled"]: isLoading,
      }
    )}
  >
    {text}
  </button>
);

export const NeutralButton = ({
  text,
  isLoading,
  ...rest
}: IButtonProps): JSX.Element => (
  <button
    {...rest}
    type="submit"
    className={`bg-sky-400 text-white hover:bg-sky-400 active:bg-sky-400 block mx-auto py-3 px-16 rounded-md text-sm ${
      isLoading === true ? "opacity-75 cursor-not-allowed disabled" : null
    }`}
  >
    {text}
  </button>
);
export const TransparentButton = ({
  text,
  isLoading,
  ...rest
}: IButtonProps): JSX.Element => (
  <button
    {...rest}
    type="submit"
    className={`bg-transparent text-body border border-gray-300 m-2 hover:bg-body hover:text-white block mx-auto py-3 px-16 rounded-md text-sm ${
      isLoading === true ? "opacity-75 cursor-not-allowed disabled" : null
    }`}
  >
    {text}
  </button>
);
export const Button2 = (props: IButtonProps): JSX.Element => (
  <button
    {...props}
    className={clsx(
      props.className,
      "bg-white text-body hover:bg-body hover:text-white border border-gray-300 block mx-3 py-2 px-5 md:px-14 rounded-md   text-base"
    )}
  >
    {props.text}
  </button>
);
export const Button3 = (props: IButtonProps): JSX.Element => (
  <button
    {...props}
    className={clsx(
      props.className,
      "bg-sky-400 text-white hover:bg-sky-400 hover:text-white border border-gray-300 mx-3 block py-2 px-5 md:px-14  rounded-md  text-base"
    )}
  >
    {props.text}
  </button>
);
