type CardProps = {
    children: string | JSX.Element | JSX.Element[];
    bgColor?:
      | "bg-white"
      | "bg-beige"
      | "bg-red"
      | "bg-blue"
      | "bg-pink"
      | "bg-red100"
      | "bg-blue100";
    hasBorder?: boolean;
  };
  export function Card({ children, bgColor = "bg-beige", hasBorder = true }: CardProps) {
    return (
        <article
          className={`p-6 md:p-8 ${bgColor} rounded-2xl ${
        hasBorder ? "border border-black" : "" }`}
        >
          {children}
        </article>
      );
    }