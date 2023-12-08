interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-[#181825] w-[25%] py-2 px-5 rounded-[15px] mt-5">
      <div
        className={`flex justify-center items-center 
            ${
              activeTab === "coins"
                ? "bg-[#3c3c7e] border-2 border-[#6161cb]"
                : "bg-[#232336]"
            } p-4 rounded-lg w-[50%]`}
        onClick={() => setActiveTab("coins")}
      >
        Coins
      </div>
      <div
        className={`flex justify-center items-center 
            ${
              activeTab === "converter"
                ? "bg-[#3c3c7e] border-2 border-[#6161cb]"
                : "bg-[#232336]"
            } p-4 rounded-lg w-[50%]`}
        onClick={() => setActiveTab("converter")}
      >
        Converter
      </div>
    </div>
  );
};

export default Tabs;