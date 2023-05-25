import { Dialog,DialogTitle,Typography,DialogContent } from '@mui/material'
import React from 'react'

const BrandModal = (props) => {
const {title,children,brandPopUp,setBrandPopUp} = props
  return (
    <Dialog open ={brandPopUp} maxWidth>
    <DialogTitle >
      <div style={{display:'flex'}}>
      <Typography variant='h6'
       component='div'
        style={{textAlign:'center',flexGrow:'1'}}
        >{title}</Typography>
       <button className='btn btn-danger' onClick={()=>{setBrandPopUp(false)}}>X </button>
      </div>
    
    </DialogTitle>
    <DialogContent dividers>
    <div>{children}</div>
    </DialogContent>
  </Dialog>
  )
}

export default BrandModal
