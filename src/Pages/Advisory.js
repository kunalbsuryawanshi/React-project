function Advisory() {
  return (
    <>
      <div>
        <div
          style={{
            // color: "#842029",
            background: "",
            height: "20px",
            padding: " 4px 10px",
            fontSize: "18px",
            textAlign:"center"
          }}
        >
          <strong className="text-danger">Latest Advisory!!</strong>
        </div>
        <div style={{ background: "", height: "60px" }}>
          <marquee height="30px" hspace="10px" vspace="10px">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item text-danger" style={{ color: "#842029", border:"none" }}>
                Don’t do stunts, its dangerous for your life, your life is
                precious. Don't use mobile while driving. Always wear seatbelt
                on four wheeler and helmet on two wheeler
              </li>
            </ul>
          </marquee>
        </div>
      </div>
    </>
  );
}

export default Advisory;
