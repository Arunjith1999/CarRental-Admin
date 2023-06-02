import React, { useEffect, useState } from 'react'
import { getUser, userStatus } from '../../../utils/Constants'
import axios from '../../../utils/Axios'
import Swal from 'sweetalert2'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const UserList = () => {

  const [user, setUser] = useState([])
  const [showDeleteSwal, setShowDeleteSwal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 10;
 
  const filteredUsers = user.filter(
    (u) =>
      u.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const offset = currentPage * usersPerPage;
  const paginatedUsers = filteredUsers.slice(offset, offset + usersPerPage);

  useEffect(()=>{
    user_details();
  },[])
  const user_details =() =>{
    axios.get(getUser).then((res)=>{
      console.log(res.data);
      setUser(res.data)
  })
  }
 
  const handleBlockUser = (id, status)=>{
    console.log(status);
    if (status == true){
       setShowDeleteSwal(true);
      console.log('vannu..........,.,.');
      {showDeleteSwal && (
        Swal.fire({
          title: 'Are you sure?',
          text: 'Are you sure you want to unblock this user',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Unblock',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.patch(`${userStatus}/${id}`,{'status':status}).then((res)=>{
              console.log(res.data);
              user_details();
           })
            setShowDeleteSwal(false);
          } else {
            // User clicked the cancel button, hide the swal
            setShowDeleteSwal(false);
          }
        })
      )}
    }
    if (status == false){
       setShowDeleteSwal(true);
      console.log('vannilllaaa..........,.,.');
      {showDeleteSwal && (
        Swal.fire({
          title: 'Are you sure?',
          text: 'Are you sure you want to block this user',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Block User',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.patch(`${userStatus}/${id}`,{'status':status}).then((res)=>{
              console.log(res.data);
              user_details();
           })
            setShowDeleteSwal(false);
          } else {
            // User clicked the cancel button, hide the swal
            setShowDeleteSwal(false);
          }
        })
      )}
    }

        
  }

  return (
    <div>
       <input
        type="text"
        className="form-control bg-light small"
        style={{width:'15rem',marginBottom:'3rem'}}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
        
      />
      
      <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {paginatedUsers.map((r)=>(
                                          <tbody>
                                          <tr>
                                               <td>{r.id}</td>
                                              <td>{r.first_name}</td>
                                              <td>{r.last_name}</td>
                                              <td>{r.email}</td>
                                              <td> 
                                                {r.is_blocked ?(
                                                   <button className='btn btn-outline-danger 'style={{width:"6rem"}} onClick={()=>handleBlockUser(r.id,r.is_blocked)}>Unblock</button>

                                                ):
                                                <button className='btn btn-outline-danger 'style={{width:"6rem"}} onClick={()=>handleBlockUser(r.id,r.is_blocked)}>block</button>
                                                }
                                              </td>
                                           
                                          </tr>
                                      </tbody>
                                    ))}
                                    
                                </table>
                            </div>
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
                          pageCount={Math.ceil(filteredUsers.length / usersPerPage)}
                          onPageChange={(data) => setCurrentPage(data.selected)}
                          containerClassName={'pagination'}
                          previousLinkClassName={'pagination__link'}
                          nextLinkClassName={'pagination__link'}
                          disabledClassName={'pagination__link--disabled'}
                          activeClassName={'pagination__link--active'}
                        />
    </div>
  )
}

export default UserList
