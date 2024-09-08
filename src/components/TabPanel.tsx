type TabPanelProps = {
  children: React.ReactNode;
  activeTab: number;
  index: number;
};
export function TabPanel({ children, activeTab, index }: TabPanelProps) {
  return activeTab === index ? <div>{children}</div> : null;
}
