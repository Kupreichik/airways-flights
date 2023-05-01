export const getDatesArray = (startDate: Date, offset = 1, interval = 1, arrayLength = 10) => {
  const res = [];
  const currentDate = new Date(startDate.setDate(startDate.getDate() - offset));

  while (res.length < arrayLength) {
    res.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + interval);
  }

  return res;
};
