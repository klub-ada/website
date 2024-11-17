import { forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { tv } from "tailwind-variants";
import { Paragraph } from "./paragraph";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import NextLink from "next/link";

const baseCtaLink = tv({
  base: "max-w-64 grid grid-cols-2 shrink-0 p-6 relative gap-y-6 select-none rounded-2xl font-button font-medium outline-none border border-black hover:shadow-button top-0 left-0 hover:top-[-4px] hover:left-1 text-start",
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
    { children, color = "red", label, href, isExternal = false, ...rest },
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
        <div className="col-span-1">
          <Paragraph size="xl" weight="bold">
            {label}
          </Paragraph>
        </div>
        <div className="col-span-2 flex justify-between items-center gap-6">
          {children ? (
            <Paragraph
              size="lg"
              className="line-clamp-2"
              weight="medium"
              textAlign="left"
            >
              {children}
            </Paragraph>
          ) : (
            <div />
          )}
          <div className="border border-black rounded-lg p-3">
            <ArrowRightIcon className="w-4 h-4 text-black" />
          </div>
        </div>
      </NextLink>
    );
  }
) as CtaLinkComponent;
