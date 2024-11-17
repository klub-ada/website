type PageWrapperProps = {
  children: string | JSX.Element | JSX.Element[];
  bgColor?: "white" | "beige" | "red" | "blue";
};

export function PageWrapper({ children, bgColor = "beige" }: PageWrapperProps) {
  return (
    <section
      className={`px-5 md:px-20 py-4 md:py-6 bg-${bgColor} box-border max-w-full`}
    >
      {children}
    </section>
  );
}
