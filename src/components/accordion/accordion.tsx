"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ChainIcon from "../icons/chain";

interface AccordionProps {
  buttonText: string;
  panelContent: string;
}

export default function Accordion({
  buttonText,
  panelContent,
}: AccordionProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex w-full max-w-4xl flex-col items-center justify-between">
          {/* Open/Close */}
          <DisclosureButton className="topography-pattern flex w-full flex-row items-center justify-between rounded-t-md bg-cowboyHat px-4 py-4 font-gomarice-nandaka-western text-2xl text-coffee">
            {buttonText}
            <ChevronDownIcon
              className={`w-5 stroke-[4px] ${open && "rotate-180"}`}
            />
          </DisclosureButton>

          <DisclosurePanel className="w-full">
            {/* Chains */}
            <div className="flex w-full flex-row justify-between">
              <ChainIcon className="h-10 w-10 fill-slate-900" />
              <ChainIcon className="h-10 w-10 fill-slate-900" />
            </div>

            {/* Answer */}
            <div
              className="topography-pattern flex w-full flex-col items-center justify-center rounded-b-md bg-cowboyHat px-4 py-8 font-bold text-coffee"
              dangerouslySetInnerHTML={{ __html: panelContent }}
            />
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}
