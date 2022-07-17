import React from "react";
import { useQuery } from "react-query";
import BtcChartData from "./BtcChartData";

const useGetCardData = (cryptoName, options) => {
  return useQuery(
    [`${cryptoName}-card`],
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}`
      );
      return await response.json();
    },
    options
  );
};

export const formatPrice = (price) => {
  const formatConfig = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatConfig.format(price);
};

const formatPlusMinus = (priceChange) => {
  const isPositive = Math.sign(priceChange) >= 0;

  return (
    <span className={`${isPositive ? "positive" : "negative"}`}>
      {`${isPositive ? "+" : ""}${priceChange.toFixed(2)}%`}
    </span>
  );
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/bitcoin-price-tracking-with-react-query
 */
const BtcCryptoTracker = ({ cryptoName }) => {
  const { data, isLoading } = useGetCardData(cryptoName, {
    refetchInterval: 60000,
    staleTime: 60000,
  });

  if (isLoading) return null;

  const { image, name, market_data: marketData } = data;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="top-data">
          <img src={image?.large} alt={`${name} logo`} />
          <h3 className="crypto-name">{name}</h3>
          <h4 className="crypto-price">
            {formatPrice(marketData?.current_price?.usd)}
            {formatPlusMinus(marketData?.price_change_percentage_24h)}
          </h4>
        </div>
        <BtcChartData cryptoName={cryptoName} />
      </div>
    </div>
  );
};

export default BtcCryptoTracker;
