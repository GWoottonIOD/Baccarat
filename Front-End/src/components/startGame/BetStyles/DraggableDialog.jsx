import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
   Paper } from '@mui/material/';
import Draggable from 'react-draggable';
import BetStyles from './BetStyles';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = useState(props.edit);

  const handleClose = () => {
    setOpen(false);
    };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move', textAlign:'center' }} 
          id="draggable-dialog-title">
          Bet Style
        </DialogTitle>
        <DialogContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <br />
            <BetStyles/>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button autoFocus onClick={handleClose} sx={{'&&:focus': {outline: 'none'}}}>
            Cancel
          </Button>
          <Button onClick={() => {

          }}
            sx={{'&&:focus': {outline: 'none'}}}>
                Submit
            </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}