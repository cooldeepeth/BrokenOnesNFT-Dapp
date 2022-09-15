/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import BG from '../public/istockphoto-1295843603-612x612.jpeg'

function faqs() {
  return (
    <div>
      <div style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate( -50%, -50% )",
        zIndex: -1
      }}>
        <Image

          src={BG} layout='fill' height={827} width={5000} alt='' />
      </div>
   
        <div className=' backdrop-hue-rotate-0 backdrop-blur-sm  backdrop-brightness-50 w-full  '
         style={{ position: 'relative', 
                  marginTop: '2%', 
                  width:'90%',
                  marginLeft:'4.5%',
                  paddingTop:'2%'
                   }}>
        
          <b className='  text-teal-500 ml-10  ' > <span className=' text-xl'>  1.  </span>  What is the utility/roadmap?</b>
          <p className="font-sans text-slate-300  md:font-serif" 
         style={{ 
                  width: '90%', 
                  textAlign: 'left', 
                  marginLeft:'5%',
                  paddingTop:'',
                  paddingBottom:'3%',
                  fontSize: '18px' }}>
          I don’t want to bound the scope of this project via such roadmap.I believe in showing the work rather than making overwhelming promises in order to gain trust.It doesn’t mean that I do not have any further planning. I want to give you people more than that planning, that is why currently I am not disclosing any such plans.

          </p>

          <b className=' text-teal-500 ml-10'> <span className=' text-xl'>  2.  </span> Is there a Discord?</b> 
          <p className="font-sans text-slate-300 md:font-serif" 
         style={{ 
                  width: '90%', 
                  textAlign: 'left', 
                  marginLeft:'5%',
                  paddingTop:'',
                  paddingBottom:'3%',
                  fontSize: '18px' }}>

          For now no Discord server for community.
          </p>
          

          <b className=' text-teal-500 ml-10'> <span className=' text-xl'>  3.  </span> Who is on the team?</b> 
          <p className="font-sans text-slate-300 md:font-serif" 
         style={{ 
                  width: '90%', 
                  textAlign: 'left', 
                  marginLeft:'5%',
                  paddingTop:'',
                  paddingBottom:'3%',
                  fontSize: '18px' }}>

          Currently, It’s only me. Building community of trustworthy people. I have done all aspects of this project from designing to implemenation of NFTs by myself.
          </p>
          

          <b className=' text-teal-500 ml-10'> <span className=' text-xl'>4.</span> Can I buy BrokenOnes NFTs?</b> 
          <p className="font-sans text-slate-300 md:font-serif" 
         style={{ 
                  width: '90%', 
                  textAlign: 'left', 
                  marginLeft:'5%',
                  paddingTop:'',
                  paddingBottom:'3%',
                  fontSize: '18px' }}>
          After making our minting page live, You will be able to purchase those NFTs on minting page. After that we will make our NFTs listing on OpenSea for secondary purchase.
          </p>
          
          <b className=' text-teal-500 ml-10'> <span className=' text-xl'>5.</span> What will be the minting price?</b>  
          <p className="font-sans text-slate-300 md:font-serif" 
         style={{ 
                  width: '90%', 
                  textAlign: 'left', 
                  marginLeft:'5%',
                  paddingTop:'',
                  paddingBottom:'3%',
                  fontSize: '18px' }}>

          It will be revealed soon till then fasten your seatbelts.

          </p>

      </div>
      </div>
  )
}

export default faqs