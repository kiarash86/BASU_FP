import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import FooterSocialIcon from "./FooterSocialIcon"; 

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} <a href="https://github.com/Reza-namvaran">Reza Namvaran</a>. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
                <FooterSocialIcon item={item} /> 
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;