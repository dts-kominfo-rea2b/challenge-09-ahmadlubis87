// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div className="card">
        <img src={data.photo}></img>
      </div>
      <div className="data">
        <h3>{data.name}</h3>
        <br></br>
        <p>{data.phone}</p>
        <br></br>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
