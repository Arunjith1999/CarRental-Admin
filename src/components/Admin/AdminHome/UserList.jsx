import React, { useEffect, useState } from 'react'
import { getUser, userStatus } from '../../../utils/Constants'
import axios from '../../../utils/Axios'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast'

const UserList = () => {

  const [user, setUser] = useState([])
  const [showDeleteSwal, setShowDeleteSwal] = useState(false);
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
                                    {user.map((r)=>(
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
    </div>
  )
}

export default UserList
