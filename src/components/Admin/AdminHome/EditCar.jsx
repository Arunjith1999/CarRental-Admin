import React, { useEffect, useState } from 'react'
import { categoryGet, getDefault,brandsGet, editCar } from '../../../utils/Constants';
import axios from '../../../utils/Axios'
import {useForm} from 'react-hook-form';
import { toast } from 'react-hot-toast';


const EditCar = (props) => {
    const [carDetails, setCarDetails] = useState([])
    const [cat, setCat] = useState([])
    const [brand,getBrand] = useState([])
    
  
    
    useEffect(()=>{
        axios.get(`${getDefault}${props.id}/`).then((res)=>{
            setCarDetails(res.data)
            console.log(res.data.image1);
            setValue('category',res.data.category)
            setValue('brand',res.data.brand)
            setValue('name',res.data.name)
            setValue('fuel',res.data.fuel)
            setValue('rent_price',res.data.rent_price)
            setValue('description',res.data.description)
            setValue('ac',res.data.ac)
            setValue('image',res.data.image)
            setValue('image1',res.data.image1)
            setValue('image2',res.data.image2)
            setValue('image3',res.data.image3)
            })

    },[props.id])
  
    useEffect(()=>{
        axios.get(categoryGet).then((res)=>{
            console.log(res.data);
            setCat(res.data)
        })
    },[])
   
const {register,handleSubmit,setValue,reset,formState:{errors}} = useForm()
const onSubmit =async(data, id) =>{
    console.log(data);
    const formData = new FormData();
    formData.append('category',data.category)
    formData.append('brand',data.brand)
    formData.append('name',data.name)
    formData.append('ac',data.ac)
    formData.append('fuel',data.fuel)
    formData.append('rent_price',data.rent_price)
    formData.append('description',data.description)
    formData.append('image',data.image[0])
    formData.append('image1',data.image1[0])
    formData.append('image2',data.image2[0])
    formData.append('image3',data.image3[0])
    axios.put(`${editCar}${id}/`,formData).then((res)=>{
        console.log(res.data);
        toast.success('updated successfully')
    })
    
}
  return (
    <div>
     <div class="container card-0 justify-content-center " style={{boxShadow:'0px 3px 3px 0px'}}>
        <div class="card-body px-sm-4 px-0">
            <div class="row justify-content-center mb-5">
                <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Make Changes </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left">
                     Entrust with heigh professionalism we are offering pixel perfect web and mobile application development third party integration and solution to our</p></div>
            </div>
            <form enctype="multipart/form-data" onSubmit={handleSubmit((data)=>onSubmit(data,carDetails.id))}>
            <div class="row justify-content-center round">
                <div class="col-lg-10 col-md-12 ">
                    <div class="card shadow-lg card-1">
                        <div class="card-body inner-card">
                            <div class="row justify-content-center">
                                <div class="col-lg-5 col-md-6 col-sm-12">
                                    <div class="form-group">    
                                         <label for="inputEmail4"></label> 
                                    <select class="form-control" defaultValue={carDetails.category} {...register('category', { onChange : (e)=>{ const value = e.target.value
                                                                                                                axios.get(`${brandsGet}${value}`).then((res)=>{
                                                                                                                    console.log(res.data);
                                                                                                                    getBrand(res.data)
                                                                                                                })}})}  name='category' id='category'>
                                        <option>{carDetails.category}</option>
                                        {cat.map((r)=>(
                                            <option key={r.id} value={r.id} >{r.title}</option>
                                        ))}
                                        </select> 
                                    </div>
                                   

                                    <div class="form-group">
                                        <label for="Mobile-Number">Name</label>
                                         <input type="text" class="form-control" id="name" name='name' defaultValue={carDetails.name} {...register('name')}   />
                                    </div>
                                   
                                    <div class="form-group"> <label for="inputEmail4">Ac</label>
                                     <select class="form-control" {...register('ac')} id ='ac'  name='ac' defaultValue={carDetails.ac}>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select> 
                                    </div>
                                   
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-12">
                                <div class="form-group"> <label for="inputEmail4">Select Brand</label> 
                                    <select class="form-control" defaultValue={carDetails.brand} name='brand' id='brand' {...register('brand')} >
                                        <option>{carDetails.brand}</option>
                                        {brand.map((r)=>(
                                            <option value={r.id}>{r.title}</option>
                                        ))}
                                        </select> 
                                   </div>
                                   
                                    <div class="form-group"> 
                                    <label for="phone">Fuel-Type</label>
                                     <input type="text"  defaultValue={carDetails.fuel} class="form-control" id="fuel"  name='fuel' placeholder="Enter The Fuel-Type" {...register('fuel')}/>
                                      </div>
                                      
                                    <div class="form-group">
                                         <label for="Evaluate Budget">Rent Price</label> 
                                         <input type="number" defaultValue={carDetails.rent_price} class="form-control"    {...register('rent_price')} placeholder="Enter the Rent_Price" id='rent' name='rent_price'/> 
                                    </div>
                                  
                                </div>
                                <div  class="col-md-12 col-lg-10 col-12">
                                <div class="form-group"> 
                                <label for="exampleFormControlTextarea2">Description</label> 
                                <textarea class="form-control rounded-0" id="description" rows="5" defaultValue={carDetails.description}  placeholder='Add a Short Description About Car' name='description' {...register('description')}></textarea>

                               </div>
                                </div>
                               
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-10 col-12">
                                     <div class="form-group files">
                                        <label class="my-auto">Update Your Image </label>
                                         <input type="file"  id ='image'  class="form-control" {...register('image')} name ='image'  />
                                       
                                            <img src={`http://127.0.0.1:8000${carDetails.image}`} alt="Preview" width='120px' height='120px'/>
                                        <div>
                                            <h6 style={{textAlign:'center',paddingTop:'2rem'}}>Upload Images For Car Detail Page</h6>
                                            <label class="my-auto">Upload Your File </label>
                                            <input id="image1" type="file" class="form-control" {...register('image1')}  name ='image1' />
                                            <img src={`http://127.0.0.1:8000${carDetails.image1}`} alt="Preview" width='120px' height='120px'/>



                                         <label class="my-auto">Upload Your File </label>
                                         <input id="image2" type="file" class="form-control"  {...register('image2')}  name ='image2' />
                                         <img src={`http://127.0.0.1:8000${carDetails.image2}`} alt="Preview" width='120px' height='120px'/>


                                         <label class="my-auto">Upload Your File </label>
                                         <input id="image3" type="file" class="form-control"   {...register('image3')}   name ='image3' />
                                         <img src={`http://127.0.0.1:8000${carDetails.image3}`} alt="Preview" width='120px' height='120px'/>


                                         </div>
                                         </div>
                                         </div>
                              
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-10 col-12">
                                    <div class="row justify-content-end mb-5">
                                        <div class="col-lg-4 col-auto "><button type="submit" class="btn btn-primary btn-block"><small class="font-weight-bold">Update</small></button> </div>
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

export default EditCar
