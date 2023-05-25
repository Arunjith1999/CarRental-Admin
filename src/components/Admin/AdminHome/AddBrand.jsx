import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { brandPost, categoryGet } from '../../../utils/Constants'
import axios from '../../../utils/Axios'
import {useForm} from 'react-hook-form';
import { toast } from 'react-hot-toast'

const AddBrand = () => {
    const [cat, setCat] = useState([])

    useEffect(()=>{
        axios.get(categoryGet).then((res)=>{
            console.log(res.data);
            setCat(res.data)
        })

    },[])
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const onSubmit = async(data) =>{
        axios.post(brandPost, data).then((res)=>{
            if (res.data.status === 'brand added'){
                 toast.success('Brand Added Successfully')
                 reset()
            }
               
        })
    }


  return (
    <div>
    <div class="container card-0 justify-content-center " style={{boxShadow:'0px 3px 3px 0px'}}>
      <div class="card-body px-sm-4 px-0">
          <div class="row justify-content-center mb-5">
              <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Add Category </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left">
                   Entrust with heigh professionalism we are offering pixel perfect web and mobile application development third party integration and solution to our</p></div>
          </div>
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <div class="row justify-content-center round">
              <div class="col-lg-10 col-md-12 ">
                  <div class="card shadow-lg card-1">
                      <div class="card-body inner-card">
                          <div class="row justify-content-center">
                              <div class="col-lg-5 col-md-6 col-sm-12">
                                  
                              <div class="form-group"> <label for="inputEmail4">Select Category</label>
                                     <select class="form-control" {...register('category',{required:true})} id ='category'  name='category'>
                                        {cat.map((r)=>(
                                           <option>{r.title}</option>
                                        ))}
                                        
                                       
                                    </select> 
                                    {errors.ac && <p>This field is Required</p>}
                                    </div>
                              </div>
                              <div class="col-lg-5 col-md-6 col-sm-12">
                              <div class="form-group">
                                        <label for="Mobile-Number">Brand Name</label>
                                         <input type="text" class="form-control" id="title" name='title' placeholder="Enter the Category Name" {...register('title', { required: true })} />
                                         {errors.title && <p className='text-danger'> This field is required </p>}
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

export default AddBrand
