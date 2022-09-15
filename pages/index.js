
import React from 'react'
import Image from 'next/image'
// import banner from '../public/Banner3.0.png'
import {VolumeOffIcon, VolumeUpIcon, } from '@heroicons/react/solid'
import {useState} from 'react'


export default function Home() {
  const [isVideoMute, setMute] = useState(true)

  const mutevideo = () => {
    if(isVideoMute){
      setMute(false)
    }else {
      setMute(true)
    }
  }

  return (
    <div >
      <div> 
       { isVideoMute
          ?
            <video autoPlay loop muted className=' h-screen w-screen'
            
            style={{
              position:"absolute",
              width:"100%",
              left:"50%",
              top:"50%",
              height:"100%",
              objectFit:"cover",
              transform:"translate( -50%, -50% )",
              zIndex:-1
          }}
          >         
               <source src="/lightning-and-thunderstorm-background-animation-video-effect.mp4" type="video/mp4"/>  
            </video>
          :
            <video autoPlay loop   className=' h-screen w-screen'
            style={{
              position:"absolute",
              width:"100%",
              left:"50%",
              top:"50%",
              height:"100%",
              objectFit:"cover",
              transform:"translate( -50%, -50% )",
              zIndex:-1
          }}>         
               <source src="/lightning-and-thunderstorm-background-animation-video-effect.mp4" type="video/mp4"/>  
            </video>
          }
      </div>

   
          <div  style={{  width:'100%' , height:'100%', }} >
            <ul  style={{ listStyle:'none',  justifyItemsL:'center' ,  marginTop:'8%', paddingLeft:'7%', paddingRight:'7%' }}>
              <li >
               <Image style={{ 
                 
                  
                 
                 }}
                  src="/Banner3.0.png" width="1600" height="300" alt=""  />  

                </li>
                <br/>
                <li className=" text-xl textShadow-red  " style={{  textShadow:'unset', fontSize:'40px', textAlign:'center' , color:/*'#4d423d'*/ 'blue' ,   }}>
                Created by the Broken One
              </li>

                
               
            </ul>
          </div>


        
      
        <div className=' cursor-pointer ' style={{ 
                  position : "absolute"  ,
                  bottom:'0%',
                  left:'2%',
                  marginLeft:'1%',
                  float:'left',
                  width: '3%',
                  
                  
                  }}  >

              {isVideoMute
              ?
                <div  style={{ color:"white", position:"relative" , 
                   right:'10%',  }} >

                  <VolumeOffIcon onClick= {mutevideo} style={{   }} />
                  <VolumeUpIcon onClick= {mutevideo} style={{ visibility:"hidden", }}  />
                </div>

              :
                <div  style={{ color:"white", position:"relative" , marginBottom:'100%',
                   right:'10%', }}>

                  <VolumeOffIcon onClick= {mutevideo}  style={{  visibility:"hidden"  ,  }} />
                  <VolumeUpIcon onClick= {mutevideo} style={{ }} />
                </div>
              } 
        </div>
        
        
      
    </div>
  )
}
