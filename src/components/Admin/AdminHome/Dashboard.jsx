import React, { useEffect, useState } from 'react'
import { getRevenue, getdashboard } from '../../../utils/Constants'
import axios from '../../../utils/Axios'
import UserRenter from '../Charts/UserRenter'
import BookingChart from '../Charts/BookingChart'

const Dashboard = () => {
  const [revenue, setRevenue] = useState('')
  const [cancelled, setCancelled] = useState([])
  const [paid, setPaid] = useState([])
  const [dates, setDates] = useState([])
  const[userCount, setUserCount] = useState('')
  const[renterCount, setRenterCount] = useState('')
  const dashboard = ()=>{
    axios.get(getdashboard).then((res)=>{
      setCancelled(res.data.cancelled)
      setPaid(res.data.paid)
      setDates(res.data.dates)
      setUserCount(res.data.user_count)
      setRenterCount(res.data.renter_count)
      console.log(res.data);
    })
  }
  useEffect(()=>{
    axios.get(getRevenue).then((res)=>{
      console.log(res.data.total);
      setRevenue(res.data.total)
      dashboard();

    })
  },[])

  return (
   
    <>
      <div>
      <h1 style={{fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>Total Revenue: ₹ {revenue} </h1>
     </div>

    <div class="container-fluid">
            {/* <!--  Row 1 --> */}
            <div class="row">
              <div class="col-lg-8 d-flex align-items-strech">
                <div class="card w-100">
                  <div class="card-body">
                    <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div class="mb-3 mb-sm-0">
                        <h5 class="card-title fw-semibold">Booking Overview</h5>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                    <div id="chart">
                     <BookingChart
                      dates= {dates}
                     cancelled = {cancelled}
                     paid = {paid}
                     />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="row">
                  <div class="col-lg-12">
                    {/* <!-- Yearly Breakup --> */}
                    <div class="card overflow-hidden">
                      <div class="card-body p-4">
                        <h5 class="card-title mb-9 fw-semibold">Users and Guide Ratio</h5>
                        <div class="row align-items-center">
                          <div class="col-8">
                            {/* <h4 class="fw-semibold mb-3">$36,358</h4> */}
                            <div class="d-flex align-items-center mb-3">
                              
                            <UserRenter user={userCount} renter={renterCount}/>
                            </div>
                            
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
      
            
            
          </div>
    
    
        </>
  )
}

export default Dashboard
