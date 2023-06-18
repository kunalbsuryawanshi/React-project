import { useEffect, useState } from "react";
// function UserRecord(){
//     return(
//     <>
//     <h1>welcome to user records</h1>
//     </>
//     );
// }

// export default UserRecord;

function UserRecord() {
  const [userRecord, setUserRecord] = useState([]);

  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = `http://localhost:4000/getUserRecord`;
    let res = await fetch(url);
    let list = await res.json();

    setUserRecord([...list]);
  };

  return (
    <>
      <div className="row justify-content-center vh-100">
        <div className="col-sm-12 col-md-11">
          <h3 className="text-center m-5">Login <span className="text-success">Records</span></h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userRecord.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{item.username}</td>
                  <td>*******</td>
                  <td>{item.email}</td>
                  <td className="fs-5">
                    <input type="button" value="&#x270E;" /> /
                    <input type="button" value="&#128686;" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserRecord;
