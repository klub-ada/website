import { forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { tv } from "tailwind-variants";
import { Paragraph } from "./paragraph";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import NextLink from "next/link";

const baseCtaLink = tv({
  base: "flex flex-row grow p-6 gap-6 min-h-40 select-none rounded-2xl font-button font-medium outline-none border border-black hover:shadow-button top-0 left-0 hover:top-[-4px] hover:left-1 text-start",
  variants: {
    color: {
      red: "bg-red",
      blue: "bg-blue",
    },
  },
});

interface CtaLinkOptions {
  /**
   * The color of the cta link
   * @default 'red'
   */
  color?: "red" | "blue";
  /**
   * Label to display on the cta link
   */
  label: string;
  /**
   * The URL to link to.
   */
  href: string;
  /**
   * If `true`, the link will open in new tab
   */
  isExternal?: boolean;
}

type CtaLinkComponent = ForwardRefComponent<"a", CtaLinkOptions>;
export type CtaLinkProps = PropsOf<CtaLinkComponent>;

export const CtaLink = forwardRef(
  (
    { color = "red", label, href, isExternal = false, ...rest },
    forwardedRef
  ) => {
    const externalProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <NextLink
        ref={forwardedRef}
        href={href}
        {...externalProps}
        className={baseCtaLink({ color })}
        {...rest}
      >
        <div className="max-w-[50%]">
          <Paragraph size="xl" weight="bold">
            {label}
          </Paragraph>
        </div>
        <div className="grow self-end">
          <div className="justify-self-end border border-black rounded-lg p-3">
            <ArrowRightIcon className="w-4 h-4 text-black" />
          </div>
        </div>
      </NextLink>
    );
  }
) as CtaLinkComponent;
