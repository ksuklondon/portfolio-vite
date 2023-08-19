/* eslint-disable react/prop-types */
const Section = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <h3 className="py-3 text-2xl lg:text-3xl text-stone-100">{title}</h3>
      <p className="max-w-xl font-light text-stone-50 mb-10 text-sm md:text-base">
        {subtitle}
      </p>
      {children}
    </section>
  );
};

export default Section;
