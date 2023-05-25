import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material'
import React from 'react'
const Modals = (props) => {
  const {title,children,openPopUp,setOpenPopUp} = props
  return (
    <Dialog open ={openPopUp} maxWidth>
      <DialogTitle >
        <div style={{display:'flex'}}>
        <Typography variant='h6'
         component='div'
          style={{textAlign:'center',flexGrow:'1'}}
          >{title}</Typography>
         <button className='btn btn-danger' onClick={()=>{setOpenPopUp(false)}}>X </button>
        </div>
      
      </DialogTitle>
      <DialogContent dividers>
      <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default Modals
