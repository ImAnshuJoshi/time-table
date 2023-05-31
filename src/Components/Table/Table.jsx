import React from "react";
import "./Table.css";

const classPeriods = [
  {
    day: "Mon",
    startTime: "9:00",
    endTime: "10:00",
    period: "Period 1",
    color: "#D16D9A",
  },
  {
    day: "Mon",
    startTime: "11:00",
    endTime: "12:00",
    period: "Period 2",
    color: "#938BE6",
  },
  {
    day: "Mon",
    startTime: "13:00",
    endTime: "14:00",
    period: "Period 3",
    color: "#E7C546",
  },
  {
    day: "Mon",
    startTime: "16:00",
    endTime: "17:00",
    period: "Period 4",
    color: "#02B683",
  },
];

const dayAnddates = [
  {
    day: "Mon",
    date: 10,
  },
  {
    day: "Tue",
    date: 11,
  },
  {
    day: "Wed",
    date: 12,
  },
  {
    day: "Thu",
    date: 13,
  },
  {
    day: "Fri",
    date: 14,
  },
  {
    day: "Sat",
    date: 15,
  },
  {
    day: "Sun",
    date: 16,
  },
];

const Table = () => {
  const getClassColor = (day, startTime, endTime) => {
    const classPeriod = classPeriods.find(
      (period) => period.day === day && period.startTime === startTime && period.endTime==endTime
    );
    return classPeriod ? classPeriod.color : "";
  };
  const getDetails = (day , startTime , endTime) =>{
    const classPeriod = classPeriods.find(
      (period) => period.day === day && period.startTime === startTime && period.endTime==endTime
    );
    return classPeriod ? classPeriod.period : "";
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {dayAnddates.map((m) => {
              return (
                <th className={`allHeaders ${m.day === "Mon" ? "colHeader" : ""}`}>
                  <div>
                    <span>{m.day}</span>
                    <div>{m.date}</div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            </td>
          </tr>
          {Array.from({ length: 13 }).map((_, index) => {
            const startTime = `${index + 8}:00`;
            const endTime = `${index + 1 + 8}:00`;
            return (
              <tr key={index}>
                <td className="timeFirstCol">{startTime}</td>
                {dayAnddates.map((m, colIndex) => {
                  const day = m.day;
                  const colorCellClass = getClassColor(day, startTime , endTime);
                  const period = getDetails(day , startTime , endTime)
                  return (
                    <td
                      key={colIndex}
                      className="color-cell"
                      style={{ backgroundColor: colorCellClass , opacity:'0.5'}}
                    >
                     {colorCellClass && (
                        <div style={{ backgroundColor: colorCellClass}}>
                          <div className="eachPeriod">{period}</div>
                          <div className="eachTime">{startTime}-{endTime}</div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;