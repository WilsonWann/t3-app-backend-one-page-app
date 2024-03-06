const dollarFormat = (price: number | string) => {
  const numberedPrice = Number(price);

  const dollarFormat = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });
  return dollarFormat.format(numberedPrice);
};

export default dollarFormat