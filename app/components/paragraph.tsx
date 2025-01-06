import { forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { tv } from "tailwind-variants";
import clsx from "clsx";

const baseParagraph = tv({
  base: "font-paragraph m-0 break-words text-wrap",
  variants: {
    size: {
      xs: "text-[10px] md:text-xs",
      sm: "text-xs md:text-sm",
      md: "text-sm md:text-base",
      lg: "text-base md:text-lg",
      xl: "text-lg md:text-[22px]",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
      extraBold: "font-extrabold",
    },
    lineHeight: {
      tight: "leading-7",
      none: "leading-8",
      normal: "leading-9",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      black: "text-black",
      white: "text-white",
      gray: "gray300",
      pink: "text-pink",
    },
    truncate: {
      true: "truncate",
    },
  },
});

interface ParagraphOptions {
  /**
   * Sets the visual size of the paragraph.
   *
   * @default 'md'
   */
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  /**
   * Sets the font weight of the paragraph.
   *
   * @default 'medium'
   */
  weight?: "regular" | "medium" | "semiBold" | "bold" | "extraBold";
  /**
   * Sets the line height of the paragraph
   * @default 'none'
   */
  lineHeight?: "tight" | "none" | "normal";
  /**
   * Sets the line hight of the paragraph
   * @default 'black'
   */
  color?: "black" | "white" | "gray" | "pink";
  /**
   * Truncates the paragraph if true
   */
  shouldTruncate?: boolean;
  /**
   * Alignment of the paragraph
   * @default 'left'
   */
  textAlign?: "left" | "center" | "right";
}

type ParagraphComponent = ForwardRefComponent<"p", ParagraphOptions>;
export type ParagraphProps = PropsOf<ParagraphComponent>;

export const Paragraph = forwardRef(
  (
    {
      as,
      children,
      size = "md",
      color = "black",
      lineHeight = "tight",
      textAlign = "left",
      weight = "medium",
      shouldTruncate,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <p
        ref={forwardedRef}
        className={clsx(
          baseParagraph({
            size,
            color,
            lineHeight,
            weight,
            textAlign,
            truncate: shouldTruncate,
          }),
          className
        )}
        {...rest}
      >
        {children}
      </p>
    );
  }
) as ParagraphComponent;
