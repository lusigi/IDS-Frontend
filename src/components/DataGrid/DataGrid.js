import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "identificationNumber", headerName: "ID number", width: 130 },
  { field: "employmentNumber", headerName: "Employment number", width: 220 },
  { field: "SurName", headerName: "Surname", width: 200 },
  { field: "otherNames", headerName: "Other names", width: 200 },
  { field: "Region", headerName: "Region", width: 130 },
  { field: "Department", headerName: "Department", width: 200 },
  { field: "employmentStatus", headerName: "Employment Status", width: 200 },
];





const rows =[

    {id:1, identificationNumber:31426501,employmentNumber:'9784',SurName :'Lusigi', otherNames:'Brian Isadia',Region: 'Nairobi', Department:'ICT', employmentStatus:'Employed' },
    {id:2, identificationNumber:33326501,employmentNumber:'1223',SurName :'Simon', otherNames:'John Ombati',Region: 'Nairobi', Department:'ICT', employmentStatus:'Employed' },
    {id:3, identificationNumber:31226501,employmentNumber:'1243',SurName :'Kendy', otherNames:'Sirengo',Region: 'Nairobi', Department:'ICT', employmentStatus:'Employed' },



]

export default function DataTable(){
    return (
        <div style = {{height:700,width:'100%'}}>
         <DataGrid rows= {rows} columns={columns} pageSize={10} />
     </div>
    )
}
