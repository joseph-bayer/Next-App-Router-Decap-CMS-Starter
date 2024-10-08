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
    <div className="mx-auto max-w-7xl lg:block">
      <TabGroup>
        <TabList className="flex flex-row items-center justify-center gap-x-1">
          {tabTitles.map((tabTitle, index) => {
            return (
              <Tab
                key={`tab-title-${tabTitle}-${index}`}
                className={`z-[2] hidden w-[300px] items-center justify-center bg-white px-3 py-1 text-xl font-semibold text-dragonBall transition-colors duration-300 ease-in-out focus:outline-none data-[hover]:bg-superSaiyan data-[selected]:bg-superSaiyan data-[hover]:text-white data-[selected]:text-white data-[focus]:outline-1 data-[focus]:outline-superSaiyan md:flex ${index === 0 && "rounded-l-xl"} ${index === tabTitles.length - 1 && "rounded-r-xl"}`}
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
