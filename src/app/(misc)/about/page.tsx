import Accordion from "@/components/accordion/accordion";
import WesternFlourish from "@/components/icons/western-flourish";
import TeamMember from "@/components/team-member/team-member";
import { Metadata } from "next";
import { attributes as AboutAttributes } from "../../../content/misc-pages/about.md";

export const metadata: Metadata = {
  title: "About Us",
};

interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  return (
    <>
      {/* Meet the Team */}
      <div className="topography-pattern flex w-full flex-col items-center justify-center gap-8 p-8">
        {/* TODO: consider making into reusable section title component */}
        <div className="flex flex-row items-center justify-center text-coffee">
          {/* Star Symbol */}
          <span className="pb-3 text-5xl">&#9733;</span>

          <span className="px-4 font-gomarice-nandaka-western text-7xl uppercase">
            Meet the Team
          </span>

          {/* Star Symbol */}
          <span className="pb-3 text-5xl">&#9733;</span>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4">
          {AboutAttributes.people.map((person: any) => {
            return <TeamMember person={person} key={person.name} />;
          })}
        </div>

        <WesternFlourish
          className="max-w-2xl fill-coffee"
          width={"80%"}
          height={"auto"}
        />
      </div>

      {/* FAQ */}
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-coffee p-8">
        {/* TODO: consider making into reusable section title component */}
        <div className="flex flex-row items-center justify-center text-cowboyHat">
          {/* Star Symbol */}
          <span className="pb-3 text-5xl">&#9733;</span>

          <span className="px-4 font-gomarice-nandaka-western text-7xl uppercase">
            FAQ
          </span>

          {/* Star Symbol */}
          <span className="pb-3 text-5xl">&#9733;</span>
        </div>
        {AboutAttributes.faq.map((faqItem: any) => {
          return (
            <Accordion
              buttonText={faqItem.buttonText}
              panelContent={faqItem.panelText}
            />
          );
        })}
      </div>
    </>
  );
}
