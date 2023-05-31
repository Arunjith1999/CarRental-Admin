import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../../utils/Axios'
import { getDetails } from '../../../utils/Constants'

const RenterRequest = (props) => {

    const [carDetails, setCarDetails] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    useEffect(()=>{
        axios.get(`${getDetails}${props.id}/`).then((res)=>{
            setCategory(res.data.cat)
            setBrand(res.data.brand)
            setCarDetails(res.data.ser1)

        })
    },[props.id])

  return (
    <div>
     <div class="container card-0 justify-content-center " style={{boxShadow:'0px 3px 3px 0px'}}>
        <div class="card-body px-sm-4 px-0">
            <div class="row justify-content-center mb-5">
                <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Request a Quote </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left">
                     Entrust with heigh professionalism we are offering pixel perfect web and mobile application development third party integration and solution to our</p></div>
            </div>
            <form enctype="multipart/form-data">
            <div class="row justify-content-center round">
                <div class="col-lg-10 col-md-12 ">
                    <div class="card shadow-lg card-1">
                        <div class="card-body inner-card">
                            <div class="row justify-content-center">
                                <div class="col-lg-5 col-md-6 col-sm-12">
                                    <div class="form-group">    
                                         <label for="inputEmail4">Select Category</label> 
                                    <select class="form-control"name='category' id='category'>
                                        <option>{category}</option>
                                        </select> 
                                     </div>  
                                       

                                    <div class="form-group">
                                        <label for="Mobile-Number">Car Name</label>
                                         <input type="text" class="form-control"  placeholder={carDetails.name}  id="name" name='name'/>
                                    </div>
                                   
                                    <div class="form-group"> <label for="inputEmail4">Ac</label>
                                     <select class="form-control" id ='ac'  name='ac'>
                                        <option>{carDetails.ac}</option>
                                        
                                    </select> 
                                    </div>
                                   
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-12">
                                <div class="form-group">
                                        <label for="Mobile-Number">Car Brand</label>
                                        <select class="form-control"  id ='brand'  name='brand'>
                                       
                                               <option >{brand}</option>
                                      
                                      
                                    </select> 
                                         
                                    </div>
                                   
                                    <div class="form-group"> 
                                    <label htmlFor="">Fuel Type</label>
                                    <select class="form-control"  id ='fuel'  name='fuel'>
                                        <option>{carDetails.fuel}</option>
                                    </select>
                                      </div>
                                      
                                    <div class="form-group">
                                         <label for="Evaluate Budget">Rent Price</label> 
                                         <input type="number" class="form-control"  placeholder={carDetails.rent_price} id='rent_price' name='rent_price'/> 
                                        
                                    </div>
                                  
                                </div>
                                <div  class="col-md-12 col-lg-10 col-12">
                                <div class="form-group"> 
                                <label for="exampleFormControlTextarea2">Description</label> 
                                <textarea class="form-control rounded-0" id="description" rows="5"   placeholder={carDetails.description} name='description'></textarea>
                               
                               </div>
                                </div>
                               
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-10 col-12">
                                    <h4 style={{textAlign:'center',marginTop:'2rem'}}> Image of the Car</h4>
                                         <div class="card" style={{width: '18rem'}}>
                                            <img class="card-img-top" src={`http://127.0.0.1:8000${carDetails.image}`} alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Image</p>
                                            </div>
                                            </div>
                                            <h4 style={{textAlign:'center',marginTop:'2rem'}}>Interior Images of the Car</h4>
                                        <div className=' row col-md-12'>
                                            <div className='col-md-4'>
                                                <div class="card" style={{width: '12rem'}}>
                                                <img class="card-img-top" src={`http://127.0.0.1:8000${carDetails.image1}`} alt="Card image cap"/>
                                                <div class="card-body">
                                                    <p class="card-text">Image 1</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                              <div class="card" style={{width: '12rem'}}>
                                                <img class="card-img-top" src={`http://127.0.0.1:8000${carDetails.image2}`} alt="Card image cap"/>
                                                <div class="card-body">
                                                    <p class="card-text">Image 2</p>
                                                </div>
                                                </div>
 
                                            </div>
                                            <div className='col-md-4'>
                                              <div class="card" style={{width: '12rem'}}>
                                                <img class="card-img-top" src={`http://127.0.0.1:8000${carDetails.image3}`} alt="Card image cap"/>
                                                <div class="card-body">
                                                    <p class="card-text">Image 3</p>
                                                </div>
                                                </div>
 
                                            </div>
                                        </div>
                                        <h4 style={{textAlign:'center',marginTop:'2rem'}}>Car Document</h4>
                                        <div class="card" style={{width: '18rem'}}>
                                                <img class="card-img-top" src={`http://127.0.0.1:8000${carDetails.image4}`} alt="Card image cap"/>
                                                <div class="card-body">
                                                    <p class="card-text">Document</p>
                                                </div>
                                                </div>
                                           
                                         
                                            
                            </div>
                                         
                              
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-10 col-12">
                                    {/* <div class="row justify-content-end mb-5">
                                        <div class="col-lg-4 col-auto mt-3"><button type="submit" class="btn btn-primary btn-block"> Make Request</button> </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default RenterRequest
