import React, { useState } from 'react'
import '../../../assets/css/Admin1.css'
import '../../../assets/css/Admin2.css'
import UserList from './UserList'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Location from './Location'
import RentRequest from './RentRequest'
import Swal from 'sweetalert2'
import CarList from './CarList'
import Cookies from 'js-cookie'
const AdminHome = () => {
    const navigate = useNavigate()
  const [status,setstatus]  = useState('')
  const [showDeleteSwal, setShowDeleteSwal] = useState(false);


  const logoutHandler = ()=>{
    setShowDeleteSwal(true);
        {showDeleteSwal && (
            Swal.fire({
              title: 'Are you sure?',
              text: 'You Want to logout!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, confirm!',
              cancelButtonText: 'Cancel'
            }).then((result) => {
              if (result.isConfirmed) {
                Cookies.remove('jwt')
                Cookies.remove('admin_id')
                navigate('/')
                  setShowDeleteSwal(false);
                }else {
                  
                  setShowDeleteSwal(false);
                }
              })
            )}

   
  }
  const handleClick =(s)=>{
    setstatus(s)
  }
  
  return (
    <>
    <div id="wrapper" style={{'zoom':1.34}} >

  
    <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion" id="accordionSidebar" >

 
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Car Rental <sup></sup></div>
        </a>


        <hr className="sidebar-divider my-0" />


        <li className="nav-item">
            <Link  className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span onClick={()=>handleClick('Dashboard')}  style={{color:'white'}}>Dashboard</span></Link>
        </li>

     
        <hr className="sidebar-divider"/>

 
        <div className="sidebar-heading">
            App Management
        </div>

     
        <li className="nav-item mt-3">
            <Link className="nav-link collapsed" href="#" >
                <i className="fas fa-fw fa-cog"></i>
                <span onClick={()=>handleClick('User')} style={{color:'white'}}>User Management</span>
            </Link>
            
        </li>
        <li className="nav-item mt-3">
            <Link className="nav-link collapsed" href="#" >
                <i className="fas fa-fw fa-cog"></i>
                <span onClick={()=>handleClick('Car')} style={{color:'white'}}>Car Management</span>
            </Link>
            
        </li>
        <li className="nav-item mt-3">
            <Link className="nav-link collapsed" href="#" >
                <i className="fas fa-fw fa-cog"></i>
                <span onClick={()=>handleClick('Location')} style={{color:'white'}}>Location</span>
            </Link>
            
        </li>
        <li className="nav-item mt-3">
            <Link className="nav-link collapsed" href="#" >
                <i className="fas fa-fw fa-cog"></i>
                <span onClick={()=>handleClick('Rent')} style={{color:'white'}}>Rent Request</span>
            </Link>
            
        </li>
       

 
       

 
        <hr className="sidebar-divider"/>

 
        

    </ul>
 

   
    <div id="content-wrapper" className="d-flex flex-column">

       
        <div id="content">

         
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

               
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

           
             

             
                <ul className="navbar-nav ml-auto">

               
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                     
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

              
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i>
                          
                            {/* <span className="badge badge-danger badge-counter"></span> */}
                        </a>
                 
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Alerts Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                   
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw"></i>
                        
                           
                        </a>
                  
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Message Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="..."/>
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="..."/>
                                    <div className="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                 
                    <li className="nav-item dropdown no-arrow">
                        
                        <button className='btn btn-danger' style={{marginTop:'1.3rem'}} onClick={logoutHandler}>Logout</button>
                       
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
         

         
            <div className="container-fluid">

                
                {/* <h1 className="h3 mb-4 text-gray-800">Blank Page</h1> */}

                {(() => {
        switch (status) {
          case 'Dashboard':
            return <Dashboard/>
          case 'User':
            return <UserList/>
          case 'Car':
            return <CarList/>
          case 'Location':
            return <Location/>
          case 'Rent':
            return <RentRequest/>
          default:
            return <Dashboard/>
        }
      })()}
            </div>
          

        </div>
       

       
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2020</span>
                </div>
            </div>
        </footer>
 
    </div>
  

</div>



<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>


<div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default AdminHome
