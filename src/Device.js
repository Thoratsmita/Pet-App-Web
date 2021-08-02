import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DoneOutlineTwoToneIcon from '@material-ui/icons/DoneOutlineTwoTone';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function AlertDialogRestart() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*const RemoteRestart =() => {
    return (
      <div>
      <Button className={classes.restart} onClick={handleClickOpen} variant="outlined">
          Yes
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"><DoneOutlineTwoToneIcon/>{" Remote Restarted"}</DialogTitle>
        
      </Dialog>
      </div>
    );
  }*/

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    restart: {
      width: "282px",
      height: "49px",
      color: "#ffffff",

      borderRadius: "34.5px",
      background: "#4de382",
      fontSize: "20px",
    },
    turnoff: {
      width: "282px",
      height: "49px",
      color: "#ffffff",

      borderRadius: "34.5px",
      background: "#ff004a",
      fontSize: "20px",
    }
    
  }));
  const classes = useStyles();


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.restart}>
      Restart
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Would you like to remotely restart your device ?"}</DialogTitle>
        
        <DialogActions>
          <Button className={classes.restart} onClick={handleClickOpen} >
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" className={classes.turnoff}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function AlertDialogTurnOff() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const RemoteTurnOff =() => {
    return (
      <div>
      <Button className={classes.restart} onClick={handleClickOpen} variant="outlined">
            Yes
        </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"><DoneOutlineTwoToneIcon/>{" Remote Turned Off"}</DialogTitle>
        
      </Dialog>
      </div>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    restart: {
      width: "282px",
      height: "49px",
      color: "#ffffff",

      borderRadius: "34.5px",
      background: "#4de382",
      fontSize: "20px",
    },
    turnoff: {
      width: "282px",
      height: "49px",
      color: "#ffffff",

      borderRadius: "34.5px",
      background: "#ff004a",
      fontSize: "20px",
    }
    
  }));
  const classes = useStyles();


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.turnoff}>
      Turn Off
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Would you like to remotely turn off your device?"}</DialogTitle>
        
        <DialogActions>
          <RemoteTurnOff/>
          <Button onClick={handleClose} color="primary" className={classes.turnoff}>
            Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}



export default function Device() {
  
  return (
    <div>
    <center>
      <div>
        <br></br>
        <br></br>
        <br></br>
      <AlertDialogRestart/>
      <br></br>
      <br></br>
      <AlertDialogTurnOff/>
    </div>
    </center>
  </div>
  );
}
