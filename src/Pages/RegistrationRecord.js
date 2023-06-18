import { useEffect, useState } from "react";
function RegistrationRecord() {
  const [registrationRecord, setRegistrationRecord] = useState([]);

  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = `http://localhost:4000/getRegistrationRecord`;
    let res = await fetch(url);
    let list = await res.json();

    setRegistrationRecord([...list]);
  };

  return (
    <>
      <div className="row justify-content-center vh-100">
        <div className="col-sm-12 col-md-11">
          <h3 className="text-center m-5">
            Complaint <span className="text-success">Records</span>
          </h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Issue</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {registrationRecord.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{item.name}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.email}</td>
                  <td>{item.issue}</td>
                  <td className="fs-5">
                    <input
                      className="btn btn-warning rounded-3 me-2 shadow"
                      type="button"
                      value="&#x270E;"
                    />
                    <input
                      className="btn btn-danger rounded-3 me-2 shadow"
                      type="button"
                      value="&#128465;"
                    />
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

export default RegistrationRecord;
