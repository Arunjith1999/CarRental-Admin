import { Dialog,DialogTitle,Typography,DialogContent } from '@mui/material'
import React from 'react'

const EditModal = (props) => {
const {title,children,editPopUp,setEditPopUp} = props
  return (
    <Dialog open ={editPopUp} maxWidth>
    <DialogTitle >
      <div style={{display:'flex'}}>
      <Typography variant='h6'
       component='div'
        style={{textAlign:'center',flexGrow:'1'}}
        >{title}</Typography>
       <button className='btn btn-danger' onClick={()=>{setEditPopUp(false)}}>X </button>
      </div>
    
    </DialogTitle>
    <DialogContent dividers>
    <div>{children}</div>
    </DialogContent>
  </Dialog>
  )
}

export default EditModal
