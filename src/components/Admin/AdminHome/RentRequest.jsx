import React, { useEffect, useState } from 'react'
import axios from '../../../utils/Axios'
import { acceptRequest, getRequest, rejectRequest } from '../../../utils/Constants'
import DetailModal from '../modal/DetailModal'
import RenterRequest from './RenterRequest'



const RentRequest = () => {
  const [request, setRequest] = useState([])
  const [name, setName] = useState()
  const [id, setId] = useState()
  const [detailPopUp, setDetailPopUp] = useState(false)
useEffect (()=>{
  axios.get(getRequest).then((res)=>{
    console.log(res.data.ser2);
    setRequest(res.data.ser1)
    setName(res.data.ser2)
  })
}, [])
console.log(id);
const acceptHandler = (id)=>{
  setId(id)
  axios.patch(`${acceptRequest}/${id}/`).then((res)=>{
    console.log(res.data);
  })
}
const deleteHandler = (id) =>{
  setId(id)
  axios.patch(`${rejectRequest}/${id}/`).then((res)=>{
    console.log(res.data);
  })
}
  return (
    <div>
      <div>
            <u><h3 style={{fontFamily:'sans-serif',textAlign:'center'}}></h3></u>
        {/* <button className='btn btn-success'style={{marginLeft:'70rem',marginBottom:'1rem',borderRadius:'20px'}}onClick={()=> setOpenPopUp(true)}>
            Add New Car</button> */}
            
        </div>
        
    <div class="card-body">

      {name === null ? <div>
        <h1 style={{fontWeight:'700',textAlign:'center'}}>No Rent Requests</h1>
      </div>
      
      :(
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Renter Name</th>
                                            <th>Car Name</th>
                                            <th>Image</th>
                                            <th>Fuel Type</th>
                                            <th>Rent-Price</th>
                                            <th>All Details</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                  
                                          <tbody>
                                          <tr>
                                               <td>{name}</td>
                                            {request.map((r)=>(
                                              <>
                                                <td>{r.name}</td>
                                                <td><img style={{width:'120px',height:'90px'}} src={`https://api1.carrent.website${r.image}`} alt="" />  </td>
                                               
                                                <td>{r.fuel}</td>
                                                <td>{r.rent_price}</td>
                                                <td><button className='btn btn-info' style={{fontSize:'14px', fontWeight:'bold', fontStyle:'normal'}} onClick={()=>setDetailPopUp(true)}>View More..</button></td>
                                                <td style={{width:'20em'}}>
                                               {r.is_accepted === 'accepted' ? <button  className='btn btn-success mx-5' style={{borderRadius:'0px'}}>Accepted</button>:
                                               <button className='btn btn-primary mx-5' style={{borderRadius:'0px'}} onClick={()=>acceptHandler(r.id)}>Accept</button>
                                               }
                                                     
                                              
                                                
                                                <button className='btn btn-danger' onClick={()=>deleteHandler(r.id)}  style={{borderRadius:'0px'}}>Reject</button>
                                                </td>
                                               
                                <DetailModal
                                detailPopUp = {detailPopUp}
                                setDetailPopUp = {setDetailPopUp}
                                title = 'All Details'
                                >
                                    <RenterRequest id = {r.id}/>
                                </DetailModal>
                                </>
                                            ))}
                                            </tr>
                                           
                                           
                                      </tbody>
                                  
                                </table>
                            </div>
                         )}
                        </div>

    </div>
  )
}

export default RentRequest
