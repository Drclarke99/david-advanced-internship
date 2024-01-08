import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';

function modal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <h2>Text in a modal</h2>
        </Modal>
    </div>
  )
}

export default modal