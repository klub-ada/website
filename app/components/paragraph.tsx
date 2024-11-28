import { forwardRef } from "react";
import { ForwardRefComponent, PropsOf } from "../utils/polymorphic";
import { tv } from "tailwind-variants";

const baseParagraph = tv({
  base: "font-paragraph m-0 break-words text-wrap",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
      extraBold: "font-extrabold",
    },
    lineHeight: {
      tight: "leading-5",
      none: "leading-6",
      normal: "leading-7",
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
   * @default 'md'
   */
  weight?: "regular" | "medium" | "semiBold" | "bold" | "extraBold";
  /**
   * Sets the color of the paragraph
   * @default 'black'
   */
  lineHeight?: "tight" | "none" | "normal";
  /**
   * Sets the line hight of the paragraph
   * @default 'tight'
   */
  color?: "black" | "white";
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
      lineHeight = "none",
      textAlign = "left",
      weight = "regular",
      shouldTruncate,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <p
        ref={forwardedRef}
        className={baseParagraph({
          size,
          color,
          lineHeight,
          weight,
          textAlign,
          truncate: shouldTruncate,
        })}
        {...rest}
      >
        {children}
      </p>
    );
  }
) as ParagraphComponent;
