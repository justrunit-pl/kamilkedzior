import {type AriaButtonProps, useButton} from "react-aria";
import {type HTMLAttributes, useRef} from "react";

export type ButtonProps = AriaButtonProps & Exclude<HTMLAttributes<HTMLButtonElement>, keyof AriaButtonProps>

export const Button = (props: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null)
    const { buttonProps } = useButton(props, ref)
    return <button {...buttonProps} {...props} />
}