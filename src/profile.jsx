import React from "react";
function ProfilePage(props) {

  return (
    <div className="profile-page">

      <label> Welcome <h2>{props.name}</h2> </label>
        <p>contact details: {props.email} <br/> {props.address}</p>
        <p>item deatils: {props.itemName} <br/> {props.itemPrice}</p>
      <ul className="social-media-links">
        <li><a  href="https://twitter.com/">Twitter</a></li>
        <li><a  href="https://www.instagram.com/">Instagram</a></li>
        <li><a  href="https://www.facebook.com/">Facebook</a></li>
      </ul>

    </div>
  );
}

export default ProfilePage;
