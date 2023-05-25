import React, { useEffect, useState } from 'react'
import { addCar, brandsGet, categoryGet } from '../../../utils/Constants'
import toast from 'react-hot-toast'
import axios from '../../../utils/Axios'
import {useForm} from 'react-hook-form';

const AddCar = (props) => {
    const [cat, setCat] = useState([])
    const [brand,getBrand] = useState([])
    useEffect(()=>{
        axios.get(categoryGet).then((res)=>{
            console.log(res.data);
            setCat(res.data)
        })

    },[])
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const onSubmit = async(data)=>{
        console.log(data);
    const formData = new FormData();
    formData.append('category',data.category)
    formData.append('brand',data.brand)
    formData.append('name',data.name)
    formData.append('ac',data.ac)
    formData.append('fuel_type',data.fuel_type)
    formData.append('rent_price',data.rent_price)
    formData.append('description',data.description)
    formData.append('image',data.image[0])
    formData.append('image1',data.image1[0])
    formData.append('image2',data.image2[0])
    formData.append('image3',data.image3[0])
    axios.post(addCar,formData).then((res)=>{
        if (res.data.status === 'true'){
            toast.success('New Car Added SuccessFully')
            reset();
            props.setCar(res.data.ser)
        }
        
    })
   
    }

  return (
    <div>
     <div class="container card-0 justify-content-center " style={{boxShadow:'0px 3px 3px 0px'}}>
        <div class="card-body px-sm-4 px-0">
            <div class="row justify-content-center mb-5">
                <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Request a Quote </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left">
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
                                         <label for="inputEmail4">Select Category</label> 
                                    <select class="form-control" {...register('category' ,{ onChange:(e)=>{ const value = e.target.value
                                                                                                                axios.get(`${brandsGet}${value}`).then((res)=>{
                                                                                                                    console.log(res.data);
                                                                                                                    getBrand(res.data)
                                                                                                                })}})}  name='category' id='category'>
                                        <option>Category</option>
                                        {cat.map((r)=>(
                                            <option key={r.id} value={r.id} >{r.title}</option>
                                        ))}
                                        </select> 
                                        {errors.category && <p> This field is required </p>}
                                    </div>
                                   

                                    <div class="form-group">
                                        <label for="Mobile-Number">Name</label>
                                         <input type="text" class="form-control" id="name" name='name' placeholder="Enter the Car Name" {...register('name', { required: true })} />
                                         {errors.name && <p className='text-danger'> This field is required </p>}
                                    </div>
                                   
                                    <div class="form-group"> <label for="inputEmail4">Ac</label>
                                     <select class="form-control" {...register('ac',{required:true})} id ='ac'  name='ac'>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select> 
                                    {errors.ac && <p>This field is Required</p>}
                                    </div>
                                   
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-12">
                                <div class="form-group"> <label for="inputEmail4">Select Brand</label> 
                                    <select class="form-control" name='brand' id='brand' {...register('brand', {required:'This field is Required'})} >
                                        <option>Brand</option>
                                        {brand.map((r)=>(
                                            <option value={r.id}>{r.title}</option>
                                        ))}
                                        </select> 
                                        {errors.brand && <p className='text-danger'>{errors.brand.message}</p>}
                                   </div>
                                   
                                    <div class="form-group"> 
                                    <label for="phone">Fuel-Type</label>
                                     <input type="text" class="form-control" id="fuel_type" {...register('fuel_type', { required: 'This Field is Required'})} name='fuel_type' placeholder="Enter The Fuel-Type"/>
                                     {errors.fuel_type && <p className='text-danger'>This Field is Required</p>}
                                      </div>
                                      
                                    <div class="form-group">
                                         <label for="Evaluate Budget">Rent Price</label> 
                                         <input type="number" class="form-control"   {...register('rent_price',{required:true})} placeholder="Enter the Rent_Price" id='rent_price' name='rent_price'/> 
                                         {errors.rent_price && <p className='text-danger'>This Field is required</p>}
                                    </div>
                                  
                                </div>
                                <div  class="col-md-12 col-lg-10 col-12">
                                <div class="form-group"> 
                                <label for="exampleFormControlTextarea2">Description</label> 
                                <textarea class="form-control rounded-0" id="description" rows="5"  {...register('description',{required:true})} placeholder='Add a Short Description About Car' name='description'></textarea>
                                {errors.description && <p className='text-danger'>This Field is required</p>}
                               </div>
                                </div>
                               
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-10 col-12">
                                     <div class="form-group files">
                                        <label class="my-auto">Upload Your File </label>
                                         <input type="file"  id ='image'   class="form-control" {...register('image',{required:true})} name ='image' />
                                         {errors.image && <p className='text-danger'>This Field is required</p>}
                                        <div>
                                            <h6 style={{textAlign:'center',paddingTop:'2rem'}}>Upload Images For Car Detail Page</h6>
                                            <label class="my-auto">Upload Your File </label>
                                            <input id="image1" type="file" class="form-control" {...register('image1',{required:true})} name ='image1' />
                                            {errors.image1 && <p className='text-danger'>This Field is required</p>}


                                         <label class="my-auto">Upload Your File </label>
                                         <input id="image2" type="file" class="form-control" {...register('image2',{required:true})} name ='image2' />
                                         {errors.image2 && <p className='text-danger'>This Field is required</p>}

                                         <label class="my-auto">Upload Your File </label>
                                         <input id="image3" type="file" class="form-control" {...register('image3',{required:true})} name ='image3' />
                                         {errors.image3 && <p className='text-danger'>This Field is required</p>}

                                         </div>
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

export default AddCar
