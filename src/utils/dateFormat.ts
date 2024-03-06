const dateFormat = (dateString: Date | string) => {
  const date = new Date(dateString);
  const options = {
    calendar: "ko-KR",
  };
  const dateFormat = new Intl.DateTimeFormat("ko-KR");
  return dateFormat.format(date);
};

export default dateFormat