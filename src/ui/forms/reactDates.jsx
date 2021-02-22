import "./dateStyle.css";
import "react-day-picker/lib/style.css";

import React, { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

const ReactDates = ({ minDayCount, maxDayCount, onDateChange }) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [endElement, setEndElement] = useState();
  const [dateRange, setDateRange] = useState({ minDate: "", maxDate: "" });

  useEffect(async () => {
    setDate();
  }, []);

  const setDate = () => {
    const minDay = new Date();
    minDay.setDate(minDay.getDate() + (minDayCount ? minDayCount : 0));
    const maxDay = new Date();
    maxDay.setDate(maxDay.getDate() + (maxDayCount ? maxDayCount : 0));
    const vRange = {
      minDate: minDayCount ? minDay : "",
      maxDate: maxDayCount ? maxDay : "",
    };
    console.log(vRange);
    setDateRange(vRange);
  };

  const handleFromChange = (newFrom) => {
    setFrom(newFrom);
  };

  const handleToChange = (to) => {
    setTo(to);
    onDateChange({
      startDate: getJsDateString(from),
      endDate: getJsDateString(to),
    });
  };

  const getJsDateString = (date) => {
    const month =
      date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + day;
  };
  const FORMAT = "DD/MM/yyyy";

  return (
    <React.Fragment>
      <span>Date Rang</span>
      <div className="InputFromTo mb-2">
        <DayPickerInput
          value={from}
          placeholder="From"
          formatDate={formatDate}
          format={FORMAT}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: {
              after: dateRange.maxDate,
              before: dateRange.minDate,
            },
            toMonth: to,
            modifiers: { start: from, end: to },
            numberOfMonths: 2,
            onDayClick: () => endElement.getInput().focus(),
          }}
          onDayChange={handleFromChange}
        />
        -
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={(el) => setEndElement(el)}
            value={to}
            placeholder="To"
            formatDate={formatDate}
            format={FORMAT}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: {
                after: dateRange.maxDate,
                before: dateRange.minDate,
              },
              modifiers: { start: from, end: to },
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={handleToChange}
          />
        </span>
      </div>
    </React.Fragment>
  );
};

export default ReactDates;
