import Dialog from '@mui/material/Dialog';

const MiModal = ({handleClose, open , children}) => {
    return(
        <>
            <Dialog onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </>
    )
}
export default MiModal