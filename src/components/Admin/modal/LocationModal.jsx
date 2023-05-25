import React from 'react'
import { Dialog,DialogTitle,Typography,DialogContent } from '@mui/material'

const LocationModal = (props) => {
const {title,children,locPopUp,setLocPopUp} = props

  return (
    <Dialog open ={locPopUp} maxWidth>
        <DialogTitle>
            <div style={{display:'flex'}}>
                <Typography 
                 component='div'
                 style={{textAlign:'center',flexGrow:'1'}}
                >
                    {title}
                </Typography>
                <button className='btn btn-danger' onClick={()=>{setLocPopUp(false)}}>X </button>
            </div>
        </DialogTitle>
        <DialogContent dividers>
    <div>{children}</div>
    </DialogContent>
    </Dialog>
  )
}

export default LocationModal
