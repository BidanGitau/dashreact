import React, { useState } from "react";
import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { userRows } from "../../Data.js";
import { Link } from "react-router-dom";



const Userlist = () => {
    const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userlistuser">
                <img src={params.row.avatar} alt="" className="userlistimg" />
                {params.row.username}
              </div>
            );
          },
        },
      
        { field: "email", headerName: "email", width: 130 },
        {
          field: "status",
          headerName: "Status",
      
          width: 90,
        },
        {
          field: "transaction",
          headerName: "Transaction volume",
          width: 130,
        },
        {
          field: "action",
          headerName: "Action",
          width: 130,
          renderCell: (params) => {
            return (
              <>
                  <Link to={"/user/" + params.row.id}>
                    <button className="userlistedit">Edit</button>
                  </Link>
                  <DeleteOutlineOutlined
                    className="userlistdelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
            );
          },
        },
      ];

  return (
    <div className="userlist">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
         disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Userlist;
