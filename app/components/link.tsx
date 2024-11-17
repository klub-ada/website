import NextLink from "next/link";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { forwardRef } from "react";

export interface LinkOptions {
  /**
   * The URL to link to.
   */
  href: string;
  /**
   * If `true`, the link will open in new tab
   */
  isExternal?: boolean;
}

type LinkComponent = ForwardRefComponent<"a", LinkOptions>;
export type LinkProps = PropsOf<LinkComponent>;

export const Link = forwardRef(
  ({ children, href, isExternal = false, ...restProps }, forwardedRef) => {
    const externalProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <NextLink
        ref={forwardedRef}
        href={href}
        className="text-lg font-medium font-paragraph text-black hover:text-red select-none outline-none whitespace-nowrap"
        {...externalProps}
        {...restProps}
      >
        {children}
      </NextLink>
    );
  }
) as LinkComponent;
