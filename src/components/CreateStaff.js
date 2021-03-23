import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
   
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),


    },
  }));

function CreateStaff() {
    const classes = useStyles();
   return (
        <div className="createStaff">
            <div className="image-hero">
                <Avatar className={classes.large} />
                <div className="hero-text"> 
                 <h2>Let's Add a new user</h2>
                <p>Fill in all fields correctly to register a new Staff</p>
                <IoArrowForwardCircleOutline className="icon-next"/>
                </div>
              
            </div>

            <div className="form-field">
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                        <TextField id="standard-basic" label="ID Number" />
                        </div>
                        <div>
                        <TextField id="standard-basic" label="Employment Number" />
                        </div>
                        <div>
                        <TextField id="standard-basic" label="Surname" />
                        </div>
                        <div>
                        <TextField id="standard-basic" label="Other Names" />
                        </div>
                        <div>
                        <TextField id="standard-basic" label="Region" />
                        </div>
                        <div>
                        <TextField id="standard-basic" label="Department" />
                        </div>
                       
                    
                    </form>
            </div>
        </div>
    )
}

export default CreateStaff
