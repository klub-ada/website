
type PageWrapperProps = {
    children: string | JSX.Element | JSX.Element[];
    bgColor?: "bg-white" | "bg-beige" | "bg-red" | "bg-blue";
  };
  
  export function PageWrapper({
    children,
    bgColor = "bg-beige",
  }: PageWrapperProps) {
    return (
      <section
        className={`px-5 md:px-20 py-4 md:py-6 ${bgColor} box-border max-w-full`}
      >
        {children}
      </section>
    );
  }