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
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const CarList = () => {
    const navigate = useNavigate()
    const [car,setCar] = useState([])
    const [openPopUp, setOpenPopUp] = useState(false)
    const [editPopUp,setEditPopUp] = useState(false)
    const [catPopUp, setCatPopUp] = useState(false)
    const [brandPopUp, setBrandPopUp] = useState(false)
    const [id, setId] = useState(null)
    const [showDeleteSwal, setShowDeleteSwal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const carsPerPage = 10;
  
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
    const filterCars = () => {
      const filtered = car.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.fuel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.rent_price.toString().includes(searchTerm.toString())
      );
      setFilteredCars(filtered);
    };
    const offset = currentPage * carsPerPage;
    const paginatedCars = filteredCars.slice(offset, offset + carsPerPage);
    useEffect(() => {
      filterCars();
    }, [searchTerm, car]);
  return (
    <div>
      <input
        type="text"
        className="form-control bg-light small"
        style={{width:'15rem',marginBottom:'3rem'}}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cars..."
        
      />
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
                                    {paginatedCars.map((r)=>(
                                          <tbody>
                                          <tr>
                                               <td>{r.id}</td>
                                              <td>{r.name}</td>
                                              <td><img style={{width:'120px',height:'90px'}} src={`https://ap.carrent.website${r.image}`} alt="" />  </td>
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
                            <ReactPaginate
                          previousLabel={
                            <span>
                              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                              Prev
                            </span>
                          }
                          nextLabel={<span>
                            Next
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            
                          </span>}
                          pageCount={Math.ceil(filteredCars.length / carsPerPage)}
                          onPageChange={(data) => setCurrentPage(data.selected)}
                          containerClassName={'pagination'}
                          previousLinkClassName={'pagination__link'}
                          nextLinkClassName={'pagination__link'}
                          disabledClassName={'pagination__link--disabled'}
                          activeClassName={'pagination__link--active'}
                        />
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
