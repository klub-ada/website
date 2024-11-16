import { ElementType, forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export interface ButtonOptions {
  /**
   * Sets the size of the button
   * @default 'md'
   */
  size?: "md";
  /**
   * Sets the style variant of the button
   * @default 'secondary'
   */
  variant?: "primary" | "secondary";
  /**
   * If `true` the button will be disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The HTML `type` attribute
   * @default 'button'
   */
  type?: "button" | "submit" | "reset";
  /**
   * Icon to display after the button label
   */
  iconRight?: ElementType;
  /**
   * Icon to display before the button label
   */
  iconLeft?: ElementType;
}

type PolymorphicButton = ForwardRefComponent<"button", ButtonOptions>;
export type ButtonProps = PropsOf<PolymorphicButton>;

export const Button = forwardRef(
  (
    {
      children,
      type = "button",
      size = "md",
      variant = "secondary",
      isDisabled = false,
      disabled: hasHtmlDisabledProp,
      iconRight: IconRight,
      iconLeft: IconLeft,
      ...rest
    },
    forwardedRef
  ) => {
    const shouldBeDisabled = isDisabled || hasHtmlDisabledProp;

    return (
      <button
        ref={forwardedRef}
        type={type}
        disabled={shouldBeDisabled}
        className="h-11 py-2 px-5 flex shrink-0 relative justify-center items-center gap-1.5 select-none rounded-lg border border-dark text-light hover:text-dark bg-red font-button font-medium"
        {...rest}
      >
        {IconLeft && <IconLeft className="w-4 h-4" />}
        {children}
        {IconRight && <IconRight className="w-4 h-4" />}
      </button>
    );
  }
) as PolymorphicButton;
