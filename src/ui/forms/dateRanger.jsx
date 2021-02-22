import React, { useState, useEffect } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const DateRanger = ({
  startDayCount,
  endDayCount,
  minDayCount,
  maxDayCount,
  onDateChange,
}) => {
  const [value, onValueChange] = useState([new Date(), new Date()]);
  const [viewRange, setViewRange] = useState({});
  useEffect(async () => {
    setDate();
  }, []);

  const setDate = () => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + startDayCount);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + endDayCount);
    onValueChange([startDate, endDate]);
    const minDay = new Date();
    minDay.setDate(minDay.getDate() + (minDayCount ? minDayCount : 0));
    const maxDay = new Date();
    maxDay.setDate(maxDay.getDate() + (maxDayCount ? maxDayCount : 0));
    const vRange = {
      minDate: minDayCount ? minDay : null,
      maxDate: maxDayCount ? maxDay : null,
    };
    setViewRange(vRange);
    console.log(minDay, maxDay, vRange);
  };

  const onChange = (day) => {
    onValueChange(day);
    onDateChange(day);
    console.log(day);
  };
  //startDate={startDate}
  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={value}
        minDate={viewRange.minDate}
        maxDate={viewRange.maxDate}
        format={"dd/MM/y"}
      />
    </div>
  );
};

export default DateRanger;
