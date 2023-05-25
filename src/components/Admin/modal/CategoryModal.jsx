import { Dialog,DialogTitle,Typography,DialogContent } from '@mui/material'
import React from 'react'

const CategoryModal = (props) => {
const {title,children,catPopUp,setCatPopUp} = props
  return (
    <Dialog open ={catPopUp} maxWidth>
    <DialogTitle >
      <div style={{display:'flex'}}>
      <Typography variant='h6'
       component='div'
        style={{textAlign:'center',flexGrow:'1'}}
        >{title}</Typography>
       <button className='btn btn-danger' onClick={()=>{setCatPopUp(false)}}>X </button>
      </div>
    
    </DialogTitle>
    <DialogContent dividers>
    <div>{children}</div>
    </DialogContent>
  </Dialog>
  )
}

export default CategoryModal
