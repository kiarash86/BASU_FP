import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import BenefitCard from "./BenefitCard"; 

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Begin your programming journey here"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div key={item.id} className="md:max-w-[24rem]">
              <BenefitCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <BottomLine /> 
    </Section>
  );
};

export default Benefits;