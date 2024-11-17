import NextLink from "next/link";
import { forwardRef } from "react";
import { LinkOptions } from "./link";
import { baseButton, ButtonOptions } from "./button";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { tv } from "tailwind-variants";

const linkButtonBase = tv({
  extend: baseButton,
  variants: {
    variant: {
      primary:
        "border border-black text-white hover:text-black bg-red hover:shadow-button top-0 left-0 hover:top-[-4px] hover:left-1",
      secondary:
        "border border-black text-black bg-white hover:shadow-button top-0 left-0 hover:top-[-4px] hover:left-1",
    },
  },
});

type ButtonLinkComponent = ForwardRefComponent<
  "a",
  LinkOptions & Pick<ButtonOptions, "size" | "variant">
>;
export type ButtonLinkProps = PropsOf<ButtonLinkComponent>;

export const LinkButton = forwardRef(
  (
    {
      children,
      href,
      isExternal = false,
      size = "md",
      variant = "primary",
      ...restProps
    },
    forwardedRef
  ) => {
    const externalProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <NextLink
        ref={forwardedRef}
        href={href}
        className={linkButtonBase({ size, variant, disabled: false })}
        {...externalProps}
        {...restProps}
      >
        {children}
        <ArrowRightIcon className="w-4 h-4" />
      </NextLink>
    );
  }
) as ButtonLinkComponent;
