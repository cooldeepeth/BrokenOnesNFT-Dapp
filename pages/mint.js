/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

// import BG from '../public/blackbo.jpeg'
import { useState, useEffect } from 'react'
import { initOnboard } from '../utils/onboard'
// import { WifiIcon } from '@heroicons/react/solid'



function mint({ children, href }) {
  const router = useRouter()
  
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const onboardData = initOnboard({
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet')
        }
      }
    })

    setOnboard(onboardData)
  }, [])


  const previouslySelectedWallet =
    typeof window !== 'undefined' &&
    window.localStorage.getItem('selectedWallet')

  useEffect(() => {
    if (previouslySelectedWallet !== null && onboard) {
      onboard.walletSelect(previouslySelectedWallet)
    }
  }, [onboard, previouslySelectedWallet])



  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(true)
    }
  }


  return (
    
          
                    
       <div>
                      <div style={{
                            position: "absolute",
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "100%",
                            
                            transform: "translate( -50%, -50% )",
                            zIndex: -1,
                            backgroundColor:'black',
                          
                            
                          }}> 
                         
                          

                        <div style={{ margin:'7.5% 32.2%',   }}>      
                         <Image 
                          src="/blackbo.png"  height={500} width={500}  type="image/png" alt=''  />     
                         </div>     

                         <div style={{position:'relative', marginTop:'-9%' }}>
                                        <ul style={{ float:'center',textAlign:'center', listStyle:'none',  }}>
                                       
                                            <li className=' text-violet-600' style={{ fontSize:'100px' , }}>
                                            Minting will be live soon...
                                            </li>
                                        
                                        </ul>
                                        </div>

                         
                      </div>  
      {/*
          <div className='flex relative justify-center h-full w-full '  >
            <div style={{     width: '60%' ,
                                height: 'fit-content' ,
                                marginTop: '-1%' }} >
                  <h1 className="flex font-sans md:font-serif justify-center font-coiny uppercase font-bold text-3xl text-pink-200 " >
                    PRE-SALE 
                  </h1>
                  <h3 className=" flex justify-center text-blue-300 tracking-widest">
                    {walletAddress
                        ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                        : ''}
                  </h3> 




                <div className="flex relative mt-10 md:mt-10" style={{ display:'flex', justifyContent:'center',alignItems:'center',  width:'100%', height:'100%' }} >
                  <div className=" w-full -mt-5" >
                    <div className=" justify-center  bg-black border border-purple-800 rounded-md flex  text-purple-300 font-semibold"
                    style={{
                      width:'15%',
                      justifyContent:"center"
                   }}
                    >
                        <p className="flex space-y-2 justify-center ">
                            <span className=" text-pink-500 ">0</span> /5555
                        </p>
                    </div>
                   
                     

                    <div className=" absolute  flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                        <div className="font-coiny  flex items-center justify-between w-full"
                        style={{
                          marginTop:'15%',
                          width:'70%'
                       }}
                        >
                          <button
                            className="w-14 h-10 md:w-16 md:h-12 border border-purple-800 flex items-center justify-center text-brand-background hover:shadow-lg bg-black font-bold rounded-md"
                            
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-purple-300 md:h-8 md:w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </button>

                              <p className="flex items-center text-pink-500 justify-center flex-1 grow text-center font-bold  text-3xl md:text-4xl">
                                1
                              </p>

                          <button
                            className="w-14 h-10 md:w-16 md:h-12 border  border-purple-800 flex items-center justify-center text-brand-background hover:shadow-lg bg-black font-bold rounded-md"
                            
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-purple-300 md:h-8 md:w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 12H6"
                              />
                            </svg>
                          </button>
                        </div>

                          <p className="text-sm text-pink-200 tracking-widest mt-3"
                          style={{
                            marginTop:'23%'
                         }}
                          >
                            Max Mint Amount: 2
                          </p>

                          <div className=' flex w-full '>
                        <div className="border-t border-b border-purple-800 px-5 py-4 mt-5 " style={{width:"50%"}}>
                          <div className="w-full text-xl font-coiny flex  text-brand-yellow">
                            <p className=' text-white '>Total</p>

                            <div className="flex text-white space-x-2 " style={{ width:'100%', justifyContent:"end" }}>
                              <p>
                                0.5 ETH
                              </p> 
                              <span className="text-gray-400">+ GAS</span>
                            </div>
                          </div>
                        </div>

                          <div className='flex px-5 ' style={{width:"50%"}}>
                          {/** mint button */}
                          {/* Mint Button && Connect Wallet Button 
                        {walletAddress ? (
                          <button
                          className="font-coiny mt-5 w-full border border-cyan-500 shadow-lg px-6 py-3 rounded-md text-2xl text-white hover:shadow-purple-800/100  tracking-wider uppercase "
                          style={{ width:'100%' }}
                          >
                            Mint
                          </button>
                        ) : (
                          <button
                            className="font-coiny mt-5 w-full bg-gradient-to-br from-brand-purple to-brand-pink shadow-lg px-6 py-3 rounded-md text-2xl text-white hover:shadow-pink-400/50 tracking-wider uppercase"
                            onClick={connectWalletHandler}
                            style={{ width:'100%' }}
                          >
                            Connect Wallet
                          </button>
                        )} </div>
                          </div>
                    </div>
                
                 
                  
                    {/** status 

                    <div className=' border z-40 border-red-500  rounded-md text-start h-full px-1 py-1  mx-auto mt-8 md:mt-4"'
                    style={{
                      marginTop:'55%',
                      width:'25%'
                   }}
                    >
                        <p className="flex space-y-2 text-white justify-center ">
                          Something Went Wrong
                        </p>
                    </div>

                    {/** contract address

                    <div className="border-t  border-gray-800 flex flex-col items-center mt-2 py-0 w-full"
                    
                    >
                        <h3 className="font-coiny text-brand-white text-1.5xl text-purple-500 uppercase mt-3">
                            Contract Address
                        </h3>
                        <a
                            href={`https://rinkeby.etherscan.io/address/`}
                            target="_blank"
                            className="text-gray-400 mt-1"
                        >
                            <span className="break-all ...">
                            0x6D939e1e598A891f7a13A285D594CB330BAA5ffE
                            </span>
                        </a>
                    </div>

                </div>

              </div>
            </div>   
          </div>
      </div>  
    
    */}
    
    
  
  </div>


  )
}

export default mint