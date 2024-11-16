import { forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { tv } from "tailwind-variants";
import { Paragraph } from "./paragraph";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const baseContentButton = tv({
  base: "max-w-64 max-h-44 grid grid-cols-2 shrink-0 p-6 relative gap-y-6 select-none rounded-2xl font-button font-medium text-center whitespace-nowrap outline-none border border-black enabled:hover:shadow-button top-0 left-0 enabled:hover:top-[-4px] enabled:hover:left-1",
  variants: {
    color: {
      red: "bg-red",
      blue: "bg-blue",
    },
    disabled: {
      true: "cursor-not-allowed bg-gray300 border border-gray700 text-white",
    },
  },
});

interface ContentButtonOptions {
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
   * The color of the content button
   * @default 'red'
   */
  color?: "red" | "blue";
  /**
   * Label to display on the content button
   */
  label: string;
}

type PolymorphicContentButton = ForwardRefComponent<
  "button",
  ContentButtonOptions
>;
export type ContentButtonProps = PropsOf<PolymorphicContentButton>;

export const ContentButton = forwardRef(
  (
    {
      children,
      type = "button",
      color = "red",
      isDisabled = false,
      disabled: hasHtmlDisabledProp,
      label,
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
        className={baseContentButton({ disabled: shouldBeDisabled, color })}
        {...rest}
      >
        <div className="col-span-1">
          <Paragraph size="xl" weight="bold">
            {label}
          </Paragraph>
        </div>
        <div className="col-span-2 flex justify-self-end border border-black rounded-lg p-3">
          <ArrowRightIcon className="w-4 h-4 text-black" />
        </div>
      </button>
    );
  }
) as PolymorphicContentButton;
