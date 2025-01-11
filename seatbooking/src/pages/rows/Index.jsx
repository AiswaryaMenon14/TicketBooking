import React from "react";
import Row from "../seatRow/Index";

function Index() {
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rows = [
    { id: 1, row_name: "A", row_type: "Silver" },
    { id: 2, row_name: "B", row_type: "Silver" },
    { id: 3, row_name: "C", row_type: "Gold" },
    { id: 4, row_name: "D", row_type: "Gold" },
    { id: 5, row_name: "E", row_type: "Platinum" },
    { id: 6, row_name: "F", row_type: "Platinum" },
  ];
const handleClick=(i,name,type)=>{
    console.log(i,'getting')
    console.log(name,'Click the button')
    console.log(type,'seat type')

}
  return (
    <>
     
      <h1 className="text-lg font-bold mb-4">Seats</h1>
      {rows.map((row) => (
        <div key={row.id} className="mb-4">
         <Row row={row}seats={seats} handleClick={handleClick}/>
        </div>
      ))}
    </>
  );
}

export default Index;
