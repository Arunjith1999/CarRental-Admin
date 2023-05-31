import { Dialog,DialogTitle,Typography,DialogContent } from '@mui/material'
import React from 'react'

const CategoryModal = (props) => {
const {title,children,detailPopUp,setDetailPopUp} = props
  return (
    <Dialog open ={detailPopUp} maxWidth>
    <DialogTitle >
      <div style={{display:'flex'}}>
      <Typography variant='h6'
       component='div'
        style={{textAlign:'center',flexGrow:'1'}}
        >{title}</Typography>
       <button className='btn btn-danger' onClick={()=>{setDetailPopUp(false)}}>X </button>
      </div>
    
    </DialogTitle>
    <DialogContent dividers>
    <div>{children}</div>
    </DialogContent>
  </Dialog>
  )
}

export default CategoryModal
