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
};
export function Card({ children, bgColor = "bg-beige" }: CardProps) {
  return (
    <article
      className={`p-6 md:p-8 ${bgColor} rounded-2xl border border-black`}
    >
      {children}
    </article>
  );
}
