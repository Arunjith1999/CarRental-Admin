import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import { getcarnames, locationPost } from '../../../utils/Constants';
import axios from '../../../utils/Axios'
import { toast } from 'react-hot-toast';
const AddLocation = (props) => {
    const [carnames, setCarnames] = useState([])
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const onSubmit = async(data)=>{
        console.log(data);
        axios.post(locationPost,data).then((res)=>{
            if (res.data.status === 'Location Added'){
                toast.success('new location added successfully')
                reset()
                props.locations()
            }
            
            console.log(res.data.status);
           
        })
    }
    useEffect(()=>{
        axios.get(getcarnames).then((res)=>{
            console.log(res.data);
            setCarnames(res.data)

        })
    },[])
  
  return (
    <div>
      <div class="container card-0 justify-content-center " style={{boxShadow:'0px 3px 3px 0px'}}>
        <div class="card-body px-sm-4 px-0">
            <div class="row justify-content-center mb-5">
                <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Add Location </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left">
                     Entrust with heigh professionalism we are offering pixel perfect web and mobile application development third party integration and solution to our</p></div>
            </div>
            <form enctype="multipart/form-data" onSubmit = {handleSubmit(onSubmit)}>
            <div class="row justify-content-center round">
                <div class="col-lg-10 col-md-12 ">
                    <div class="card shadow-lg card-1">
                        <div class="card-body inner-card">
                            <div class="row justify-content-center">
                                <div class="col-lg-5 col-md-6 col-sm-12">
                                    
                                    <div class="form-group">
                                        <label for="Mobile-Number">Location Name</label>
                                         <input type="text" class="form-control" id="location" name='location' placeholder="Enter the Location Name" {...register('location', { required: true })} />
                                         {errors.name && <p className='text-danger'> This field is required </p>}
                                    </div>
                                    <div class="form-group">    
                                         <label for="inputEmail4" name='car' id ='car'>Select Car</label> 
                                    <select class="form-control"  {...register('car', { required: true })} >
                                        <option>Cars Available</option>
                                        {carnames.map((r)=>(
                                               <option value={r.id}>{r.name}</option>
                                        ))}
                                           
                                     
                                        </select> 
                                        {errors.car && <p> This field is required </p>}
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-10 col-12">
                                    <div class="row justify-content-end mb-5">
                                        <div class="col-lg-4 col-auto "><button type="submit" class="btn btn-primary btn-block"><small class="font-weight-bold">Submit</small></button> </div>
                                    </div>
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

export default AddLocation
