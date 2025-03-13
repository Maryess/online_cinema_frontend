import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement>;
type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface IButton extends TypeButtonProps {}
export interface IField extends TypeInputPropsField {}