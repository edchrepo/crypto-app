import Image from "next/image";
import * as Icons from "@/app/icons";
import ProgressBar from "../ProgressBar";
import { CoinSummary } from "@/app/store/slices/coinSummarySlice";

interface DataProps {
  data: CoinSummary;
}

const DataStats: React.FC<DataProps> = ({ data }) => {
  const dataItems = [
    {
      value: data.market_data.market_cap.usd,
      label: "Market Cap",
    },
    {
      value: data.market_data.fully_diluted_valuation.usd,
      label: "Fully Diluted Valuation",
    },
    {
      value: data.market_data.market_cap_change_24h,
      label: "Market Cap 24h",
    },
    {
      value: data.market_data.mcap_to_tvl_ratio,
      label: "Volume/Market",
      default: "N/A",
    },
    {
      value: data.market_data.total_volume[data.symbol],
      symbol: data.symbol.toUpperCase(),
      label: "Total Volume",
      default: "N/A",
    },
    {
      value: data.market_data.circulating_supply,
      symbol: data.symbol.toUpperCase(),
      label: "Circulating Supply",
    },
    {
      value: data.market_data.max_supply,
      symbol: data.symbol.toUpperCase(),
      label: "Max Supply",
      default: "N/A",
    },
  ];

  const circOverMax = (data.market_data.circulating_supply / data.market_data.max_supply) * 100;

  return (
    <div className="flex flex-col justify-center items-center bg-[#7272ab] dark:bg-[#1e1932] p-7 rounded-[20px] text-black dark:text-white">
      <div className="w-[90%] grid gap-2">
        {dataItems.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 space-y-1.5">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded-full shadow-whiteShadow">
                <Image
                  className="h-5 w-5"
                  src={Icons.PlusCircle}
                  alt="pluscircle"
                />
              </div>
              <p className="text-white dark:text-secondary">{item.label}</p>
            </div>
            <p>
              {item.value || item.default} {item.symbol && item.value ? item.symbol : ""}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[90%] mt-10 space-y-1">
        <div className="flex justify-between">
          <p className="flex items-center text-[#cd730e]">
            <span className="w-2 h-2 bg-[#cd730e] rounded-full mr-1"></span>
            {100 - Math.round(circOverMax)}%
          </p>
          <p className="flex items-center text-[#f8d2a6]">
            <span className="w-2 h-2 bg-[#f8d2a6] rounded-full mr-1"></span>
            {Math.round(circOverMax)}%
          </p>
        </div>
        <ProgressBar
          progress={100 - circOverMax}
          color={`#cd730e`}
          secondaryColor={`#f8d2a6`}
        />
      </div>
    </div>
  );
};

export default DataStats;