import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";


const Hero = () => {
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crossess crossessOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb:[6.25rem]">
                    <h1 className="h1 mb-6">
                        <span className="inline-block relative">
                            Fundamentals of Programming
                            <img src={curve} className="absolute py-2 top-full left-0 w-full xl:-mt-2" width={624} height={28}/>
                        </span>
                    </h1>

                    <p className="body-1 max-w-3xl py-5 mx-auto mb-6 text-n-2 lg:mb-8">A clear path to help you in fundamentals of programming and computer course in Bu-Ali Sina university</p>
                    <Button href="/pricing" white>Fall 2025</Button>
                </div>
            </div>
        </Section>        
    );
};

export default Hero;