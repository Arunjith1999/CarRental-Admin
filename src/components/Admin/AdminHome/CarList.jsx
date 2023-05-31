import React, { useEffect, useState } from 'react'
import { deleteCar, getCar } from '../../../utils/Constants'
import axios from '../../../utils/Axios'
import { useNavigate } from 'react-router-dom'
import Modals from '../modal/Modals'
import EditModal from '../modal/EditModal'
import Swal from 'sweetalert2'
import AddCar from './AddCar'
import EditCar from './EditCar'
import CategoryModal from '../modal/CategoryModal'
import BrandModal from '../modal/BrandModal'
import AddCategory from './AddCategory'
import AddBrand from './AddBrand'

const CarList = () => {
    const navigate = useNavigate()
    const [car,setCar] = useState([])
    const [openPopUp, setOpenPopUp] = useState(false)
    const [editPopUp,setEditPopUp] = useState(false)
    const [catPopUp, setCatPopUp] = useState(false)
    const [brandPopUp, setBrandPopUp] = useState(false)
    const [id, setId] = useState(null)
    const [showDeleteSwal, setShowDeleteSwal] = useState(false);
  
    useEffect(()=>{
        axios.get(getCar).then((res)=>{
            setCar(res.data)
            console.log(res.data);
        })
    },[])
    const HandleEdit = (id)=>{
        setEditPopUp(true)
        setId(id)
        
    }
    const deleteHandler = (id) =>{
        setShowDeleteSwal(true);
        {showDeleteSwal && (
            Swal.fire({
              title: 'Are you sure?',
              text: 'You will not be able to recover this data!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, keep it'
            }).then((result) => {
              if (result.isConfirmed) {
                axios.delete(`${deleteCar}${id}/`).then((res =>{
                    console.log(res.data.status);
                    setCar(car.filter(car => car.id !== id));
                 }))
                setShowDeleteSwal(false);
              } else {
                // User clicked the cancel button, hide the swal
                setShowDeleteSwal(false);
              }
            })
          )}
         
    }
    const handleDropDown = (e) =>{
      console.log(e);
          if (e.target.value === 'option1'){
            setOpenPopUp(true)
          }
          if (e.target.value === 'option2'){
            setCatPopUp(true)

          }
          if (e.target.value === 'option3'){
              setBrandPopUp(true)
          }
    }
  return (
    <div>
        <div>
            <u><h3 style={{fontFamily:'sans-serif',textAlign:'center'}}>Manage Cars</h3></u>
        {/* <button className='btn btn-success'style={{marginLeft:'70rem',marginBottom:'1rem',borderRadius:'20px'}}onClick={()=> setOpenPopUp(true)}>
            Add New Car</button> */}
            <div class="form-group" style={{width:'7rem'}}>
                <label for="dropdown" class="form-label">Add New..</label>
                <select class="form-control" id="dropdown"  style={{ backgroundColor:'black',color:'white'}} onChange={handleDropDown}>
                <option value="option1">Car </option>
                  <option value="option2">Category</option>
                  <option value="option3">Brand</option>
                </select>
              </div>
        </div>
        
    <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Fuel Type</th>
                                            <th>Rent-Price</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    {car.map((r)=>(
                                          <tbody>
                                          <tr>
                                               <td>{r.id}</td>
                                              <td>{r.name}</td>
                                              <td><img style={{width:'120px',height:'90px'}} src={`http://127.0.0.1:8000${r.image}`} alt="" />  </td>
                                              <td>{r.fuel}</td>
                                              <td>{r.rent_price}</td>
                                              <td style={{width:'20em'}}>
                                             
                                                   <button className='btn btn-primary mx-5' style={{borderRadius:'0px'}}  onClick={()=>HandleEdit(r.id)}>Edit</button>
                                            
                                              
                                              <button className='btn btn-danger' onClick={()=>deleteHandler(r.id)} style={{borderRadius:'0px'}}>Delete</button>
                                              </td>
                                           
                                          </tr>
                                      </tbody>
                                    ))}
                                    
                                </table>
                            </div>
                        </div>
                        <EditModal
                            editPopUp ={editPopUp}
                            setEditPopUp={setEditPopUp}
                            title = 'EDIT CAR'>
                             <EditCar id ={id}/>
                        </EditModal>
                       <Modals  openPopUp={openPopUp}
                         setOpenPopUp ={setOpenPopUp}
                         title = 'ADD NEW CAR'>
                            <AddCar setCar ={setCar}/>
                         </Modals>
                         <CategoryModal
                            catPopUp = {catPopUp}
                            setCatPopUp = {setCatPopUp}
                            title = 'Add New Category'
                         >
                          <AddCategory/>

                         </CategoryModal>

                         <BrandModal
                           brandPopUp = {brandPopUp}
                           setBrandPopUp = {setBrandPopUp}
                           title = 'Add New Brand'
                         >
                          <AddBrand/>
                         </BrandModal>
    </div>
  )
}

export default CarList
