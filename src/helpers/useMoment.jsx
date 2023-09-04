import moment from "moment";
export const getCurrentTiemstamp = (timeFormat) => {
  return moment().format(timeFormat);
};
