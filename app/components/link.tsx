import NextLink from "next/link";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const linkBase = tv({
  variants: {
    variant: {
      sm: "text-sm font-medium text-black hover:text-red select-none outline-none whitespace-nowrap",
      md: "text-md font-medium text-black hover:text-red select-none outline-none whitespace-nowrap",
    },
  },
});

export interface LinkOptions {
  /**
   * The URL to link to.
   */
  href: string;
  /**
   * If `true`, the link will open in new tab
   */
  isExternal?: boolean;
  /**
   * Sets the style variant of the link element
   * @default 'md'
   */
  variant: "sm" | "md";
}

type LinkComponent = ForwardRefComponent<"a", LinkOptions>;
export type LinkProps = PropsOf<LinkComponent>;

export const Link = forwardRef(
  (
    { children, href, isExternal = false, variant = "md", ...restProps },
    forwardedRef
  ) => {
    const externalProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <NextLink
        ref={forwardedRef}
        href={href}
        className={linkBase({ variant })}
        {...externalProps}
        {...restProps}
      >
        {children}
      </NextLink>
    );
  }
) as LinkComponent;
