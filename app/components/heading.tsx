import { forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { tv } from "tailwind-variants";

const baseHeading = tv({
  base: "font-heading m-0 break-words",
  variants: {
    size: {
      xl: "text-[36px] md:text-[56px] leading-[120%] font-bold",
      lg: "text-3xl md:text-5xl leading-[120%] font-bold",
      md: "text-text-2xl md:text-4xl leading-[120%] font-bold",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
    truncate: {
      true: "truncate",
    },
  },
});

interface HeadingOptions {
  /**
   * Sets the visual size of the heading.
   *
   * @default 'lg'
   */
  size?: "xl" | "lg" | "md";
  /**
   * Sets the color of the heading
   * @default 'black'
   */
  color?: "black" | "white";
  /**
   * Truncates the heading if true
   */
  shouldTruncate?: boolean;
  /**
   * Alignment of the heading
   * @default 'left'
   */
  textAlign?: "left" | "center" | "right";
}

type HeadingComponent = ForwardRefComponent<"h2", HeadingOptions>;
export type HeadingProps = PropsOf<HeadingComponent>;

export const Heading = forwardRef(
  (
    {
      as,
      children,
      size = "lg",
      color = "black",
      textAlign = "left",
      shouldTruncate,
      ...rest
    },
    forwardedRef
  ) => {
    const HeadingElement = size === "xl" ? "h1" : size === "lg" ? "h2" : "h3";
    return (
      <HeadingElement
        ref={forwardedRef}
        className={baseHeading({
          size,
          color,
          textAlign,
          truncate: shouldTruncate,
        })}
        {...rest}
      >
        {children}
      </HeadingElement>
    );
  }
) as HeadingComponent;
