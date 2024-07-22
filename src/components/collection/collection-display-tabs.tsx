import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

interface CollectionDisplayTabsProps {
  tabTitles: string[];
  tabPanelComponents: Readonly<React.ReactNode>[];
}

export default function CollectionDisplayTabs({
  tabTitles,
  tabPanelComponents,
}: CollectionDisplayTabsProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <TabGroup>
        <TabList className="flex flex-row justify-end items-center gap-4">
          {tabTitles.map((tabTitle, index) => {
            return (
              <Tab
                key={`tab-title-${tabTitle}-${index}`}
                className="z-[2] rounded-full py-1 px-3 text-lg/6 font-semibold text-superSaiyan focus:outline-none data-[selected]:bg-dragonBall/20 data-[hover]:bg-dragonBall/10 data-[selected]:data-[hover]:bg-dragonBall/20 data-[focus]:outline-1 data-[focus]:outline-dragonBall"
              >
                {tabTitle}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          {tabPanelComponents.map((component, index) => {
            return (
              <TabPanel key={`tab-panel-${tabTitles[index]}-${index}`}>
                {component}
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
