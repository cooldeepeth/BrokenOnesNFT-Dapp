/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BG from '../public/istockphoto-1295843603-612x612.jpeg'


function about() {
    const router = useRouter()
  return (

    <div  >
          <div 
            style={{ 
                position:"absolute",
              width:"100%",
              left:"50%",
              top:"50%",
              height:"100%",
              objectFit:"cover",
              backgroundColor:"black",
              transform:"translate( -50%, -50% )",
              zIndex:-1, }}>

            <Image 
              
              src={BG} layout='fill' height={827}  width={5000} alt='' 
            />
          </div>

              
            
          <div className=' h-full backdrop-blur-sm  backdrop-brightness-50 w-full'  
          style={{  position :'relative',  marginTop:'2%',  width:'90%', marginLeft:'5%', paddingTop:'2%', paddingBottom:'2%',  }}> 
            
            <p className=" font-sans md:font-serif text-teal-400  " style={{   width:'95%',textAlign:'center', fontSize:'40px' , marginLeft:'2%' }} >
            The BrokenOnes project represents all the broken being of the universe in the metaverse. In every day life the storm of problems and unexpected breakdowns through unexpected situation comes in the lives of every being. BrokenOnes is created by a broken one to build the community of the brokenOnes to support eachothers and encourage everyone. </p>
            <p className="font-sans md:font-serif text-rose-500  " style={{  width:'95%',textAlign:'center', fontSize:'40px' , marginLeft:'2%' }}>
              Let's connect with each other and build The BrokenOnes Community.
            </p >
            <br/><br/>  
            <p className=' text-cyan-500' style={{  width:'95%', textAlign:'center', fontSize:'44px' , marginLeft:'2%' }}>
            By the BrokenOne 💔 For the BrokenOnes
            </p>
            

          </div> 
    </div>
  )
}

export default about