type TabProps = {
  activeTab: number;
  children: React.ReactNode;
  index: number;
  onClick: (index: number) => void;
};
// Step 4: Create the Tab component
export function Tab({ children, index, onClick }: TabProps) {
  return <button onClick={() => onClick(index)}>{children}</button>;
}
