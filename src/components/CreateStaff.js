import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

function CreateStaff() {
  const [input, setInput] = useState({
    surname: "",
    idNumber: "",
    otherNames: "",
    employmentNumber: "",
    region: "",
    department: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newStaff = {
      surname: input.surname,
      idNumber: input.idNumber,
      otherNames: input.otherNames,
      employmentNumber: input.employmentNumber,
      region: input.region,
      department: input.department,
    };
    axios.post("http://localhost:3001/api/users/addstaff", newStaff);
  };

  const classes = useStyles();
  return (
    <div className="createStaff">
      <div className="image-hero">
        <AvatarGroup max={5}>
          <Avatar alt="Milda" src={img1} className={classes.large} />
          <Avatar alt="Innocent" src={img2} className={classes.large} />
          <Avatar alt="Hafsa" src={img3} className={classes.large} />
          <Avatar alt="Wamae" src={img4} className={classes.large} />
        </AvatarGroup>
        <div className="hero-text">
          <h2>Let's Add a new Staff Member</h2>
          <p>Fill in all fields correctly to register a new Staff</p>
          <IoArrowForwardCircleOutline className="icon-next" />
        </div>
      </div>

      <div className="form-field">
        <form>
          <div className="group-form">
            <div className="flex-form left">
              <label htmlFor="">Surname: </label>
              <input
                onChange={handleChange}
                value={input.surname}
                name="surname"
                required
              />
            </div>
            <div className="flex-form">
              <label htmlFor="">ID Number</label>
              <input
                onChange={handleChange}
                value={input.idNumber}
                name="idNumber"
                type="number"
                required
              />
            </div>
          </div>

          <div className="flex-form large">
            <label htmlFor="">Other Names </label>
            <input
              onChange={handleChange}
              value={input.otherNames}
              name="otherNames"
              required
            />
          </div>
          <div className="group-form">
            <div className="flex-form left">
              <label htmlFor="">Employment Number </label>
              <input
                onChange={handleChange}
                value={input.employmentNumber}
                name="employmentNumber"
                type="number"
                required
              />
            </div>
            <div className="flex-form">
              <label htmlFor="">Region </label>
              <input
                onChange={handleChange}
                value={input.region}
                name="region"
                required
              />
            </div>
          </div>

          <div className="flex-form large">
            <label htmlFor="">Department </label>
            <input
              onChange={handleChange}
              value={input.department}
              name="department"
            />
          </div>

          <div className="submit-back">
            <Link className="nav-home left" to="/">
              Back
            </Link>
            <Button onClick={handleClick} className="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStaff;
