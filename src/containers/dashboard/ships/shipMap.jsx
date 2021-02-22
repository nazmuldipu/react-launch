import React, { useState, useEffect } from "react";
import SideShipList from "../../../components/sideShipList";
import ShipMapTable from "./../../../ui/tables/shipMapTable";
import { getShipMap, updateMap } from "../../../services/shipService";
import Loading from "./../../../ui/loading";
// import DateRangePicker from "react-bootstrap-daterangepicker";
import DateRanger from "./../../../ui/forms/dateRanger";
import ReactDates from "./../../../ui/forms/reactDates";

const ShipMap = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [ship, setShip] = useState({});
  const [shipMap, setShipMap] = useState([]);
  const [dateRange, setDateRange] = useState({});

  const getJsDateString = (date) => {
    const month =
      date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + day;
  };

  const retreiveShipMap = async ({ id, startDate, endDate }) => {
    console.log(id, startDate, endDate);
    if (!startDate || !endDate || !id) return;

    try {
      setLoading(true);
      const { data } = await getShipMap(id, startDate, endDate);
      setLoading(false);
      const obj = Object.keys(data).map((d) => {
        return { id: d, date: d, value: data[d] };
      });
      setShipMap(obj);
    } catch (ex) {
      if (ex.response && ex.response.data) {
        setErrorMessage(ex.response.data.error_description);
      }
    }
  };

  const handleUpdate = async (event) => {
    const obj = { id: ship.id, value: !event.value, date: event.date };
    try {
      setLoading(true);
      const { data } = await updateMap(obj.id, obj.date, obj.value);
      setLoading(false);
      const { startDate, endDate } = dateRange;
      retreiveShipMap({ id: obj.id, startDate, endDate });
    } catch (ex) {
      if (ex.response && ex.response.data) {
        setErrorMessage(ex.response.data.error_description);
      }
    }
  };

  const handleShipClick = (event) => {
    setShip(event);
    const { startDate, endDate } = dateRange;
    // console.log({ id: event.id, startDate, endDate });
    if (dateRange && startDate && endDate)
      retreiveShipMap({ id: event.id, startDate, endDate });
  };

  const handleDateChange = (event) => {
    console.log(event);
    setDateRange(event);
    if (ship && ship.id) {
      retreiveShipMap({
        id: ship.id,
        startDate: event.startDate,
        endDate: event.endDate,
      });
    }
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-3">
          <ReactDates
            onDateChange={handleDateChange}
            minDayCount={1}
            maxDayCount={90}
          />

          <SideShipList shipClick={handleShipClick} ship={ship} />
        </div>
        <div className="col-md-8">
          {!(ship && ship.id) ? (
            <h5 className="text-center">Please select a Ship first</h5>
          ) : loading ? (
            <Loading />
          ) : shipMap.length ? (
            <ShipMapTable
              ship={ship}
              shipMap={shipMap}
              handleToogle={handleUpdate}
            />
          ) : (
            <h5 className="text-center">No Data found</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShipMap;
