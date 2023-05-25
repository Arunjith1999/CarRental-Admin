import React from 'react'
import LocationModal from '../modal/LocationModal'
import AddLocation from './AddLocation'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../../utils/Axios'
import { getLocation } from '../../../utils/Constants'

const Location = () => {
  const[location, setLocation] = useState([])
  const [locPopUp, setLocPopUp] = useState(false)
 const locations =()=>{
  axios.get(getLocation).then((res)=>{
    console.log(res.data);
    setLocation(res.data)
  })
 }

  useEffect(()=>{
   locations();
  }, [])
  return (
    <div>
        <div>
            <u><h3 style={{fontFamily:'sans-serif',textAlign:'center'}}>Locations</h3></u>
        <button className='btn btn-success'style={{marginLeft:'70rem',marginBottom:'1rem',borderRadius:'20px'}}onClick={()=> setLocPopUp(true)}>
            Add Location</button>
        </div>
        
    <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                           
                                            <th>Name</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    {location.map((r)=>(
                                          <tbody>
                                          <tr>
                                            
                                              <td>{r.location}</td>
                                              <td style={{width:'20em'}}>
                                             
                                                   <button className='btn btn-primary mx-5' style={{borderRadius:'0px'}}  >Edit</button>
                                            
                                              
                                              <button className='btn btn-danger'  style={{borderRadius:'0px'}}>Delete</button>
                                              </td>
                                           
                                          </tr>
                                      </tbody>
                                     ))} 
                                    
                                </table>
                            </div>
                        <LocationModal
                        locPopUp ={locPopUp}
                        setLocPopUp ={setLocPopUp}
                        title ='Locations'
                        >
                          <AddLocation locations ={locations}/>

                        </LocationModal>
                        </div>
                      
    </div>
  )
}

export default Location
