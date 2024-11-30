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
      textAlign = "left",
      weight = "regular",
      shouldTruncate,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <p
        ref={forwardedRef}
        className={
          baseParagraph({
            size,
            color,
            weight,
            textAlign,
            truncate: shouldTruncate,
          }) + ` ${className}`
        }
        {...rest}
      >
        {children}
      </p>
    );
  }
) as ParagraphComponent;
