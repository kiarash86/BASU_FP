import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className = "",
  id,
  crosses = false,
  crossesOffset = "",
  customPadding,
  children,
}) => {
  const basePadding = customPadding || "py-10 lg:py-16 xl:py-20";
  const extraPadding = crosses ? " lg:py-32 xl:py-40" : "";

  return (
    <section
      id={id}
      className={`relative ${basePadding}${extraPadding} ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden w-px bg-stroke-1 md:block lg:right-7.5 xl:right-10" />

      {children}

      {crosses && (
        <>
          <div
            className={`pointer-events-none absolute top-0 left-7.5 right-7.5 hidden h-px bg-stroke-1 lg:block xl:left-10 xl:right-10 ${crossesOffset}`}
          />
          <SectionSvg />
        </>
      )}
    </section>
  );
};

export default Section;
