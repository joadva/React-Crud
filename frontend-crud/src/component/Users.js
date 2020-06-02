import React, { useState } from "react";

export const Users = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" onChange={setName(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="col-md-8"></div>
    </div>
  );
};
export default Users;
