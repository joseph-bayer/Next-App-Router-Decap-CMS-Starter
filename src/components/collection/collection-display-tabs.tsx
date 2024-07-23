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
    <div className="mx-auto max-w-7xl">
      <TabGroup>
        <TabList className="flex flex-row items-center justify-end gap-4">
          {tabTitles.map((tabTitle, index) => {
            return (
              <Tab
                key={`tab-title-${tabTitle}-${index}`}
                className="z-[2] rounded-full px-3 py-1 text-lg/6 font-semibold text-superSaiyan focus:outline-none data-[hover]:bg-dragonBall/10 data-[selected]:bg-dragonBall/20 data-[selected]:data-[hover]:bg-dragonBall/20 data-[focus]:outline-1 data-[focus]:outline-dragonBall"
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
