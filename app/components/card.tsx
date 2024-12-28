type CardProps = {
  children: string | JSX.Element | JSX.Element[];
  bgColor?:
    | "bg-white"
    | "bg-beige"
    | "bg-red"
    | "bg-blue"
    | "bg-pink"
    | "bg-red100"
    | "bg-blue100"
    | "bg-blue200";
  hasBorder?: boolean;
  contentAlignment?: "center" | "left"; // New prop for alignment
};
export function Card({
  children,
  bgColor = "bg-beige",
  hasBorder = true,
  contentAlignment = "left", // Default alignment
}: CardProps) {
  const alignmentClass =
    contentAlignment === "center"
      ? "items-center justify-center text-center"
      : "items-start text-left";
  return (
    <article
      className={`p-6 md:p-8 ${bgColor} grow rounded-2xl ${
        hasBorder ? "border border-black" : ""
      } flex flex-col ${alignmentClass}`}
    >
      {children}
    </article>
  );
}
