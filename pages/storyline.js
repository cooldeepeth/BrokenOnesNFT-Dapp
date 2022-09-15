/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Image from 'next/image'
import BG from '../public/istockphoto-1295843603-612x612.jpeg'



function storyline() {
  return (
    <div>  
        <div  style={{
                position:"absolute",
                width:"100%",
                left:"50%",
                top:"50%",
                height:"100%",
                objectFit:"cover",
                transform:"translate( -50%, -50% )",
                zIndex:-1
            }} >
          <Image 
              
              src={BG} layout='fill' height={500}  width={1000} alt='' 
            />
        </div>
      
      
      <div className='  backdrop-blur-sm  backdrop-brightness-50 w-full'
       style={{  position :'relative',  
                 marginTop:'2%',  
                 width:'90%', 
                 marginLeft:'4.5%',
                 paddingTop:'2%',
                 paddingRight:'3%',
                 paddingLeft:'3%',
                 paddingBottom:'2%'  }}>

              <p className=" flex w-full justify-center text-teal-400 font-sans md:font-serif" 
                style={{  
                         textAlign: 'center', 
                         fontSize: '26px' }}>
                  Here’s the story of the BrokenOne, the one and only creator of this project. BrokenOne has experienced so many breakdowns during his journey of life from childhood to adulthood. He could not stand out of his personality and everyone used to tease him in the school. He would always end up with the self-doubt and loneliness. In the high school he wasn’t able to compete with others in the rat race of getting higher grade which made him more frustrated. Because of boring personality of the BrokenOne no one wanted to be with him in any kind of relationship. Regardless of these things the BrokenOne is highly passionate about art and wants to nurture his imagination over canvas and the digital art as well. He is a self taught artist with the temptation & eagerness of learning from each and every moments of his life, who also wants to dive into the NFT era with the amazing ideas 💡. You might also have seen such people across your daily life. It’s my sincere request to all of you to support such BrokenOnes for their journey and help them to reach out more and more.
              </p>
              <br />
              <p className=" flex w-full justify-center text-rose-500 font-sans md:font-serif" style={{ textAlign: 'center', fontSize: '36px' }}>
                  Thank You 🤗
              </p>



          </div>
            <footer style={{ position: 'relative', height: '40px', width: '100%', marginTop:'1.5%'  }}>
              <div>
                  <nav  style={{ display: 'flex', justifyContent: 'space-between', }}>

                      <ul></ul>


                      <ul className=" flex items-center space-x-4 md:space-x-6" style={{ listStyle: 'none', float: 'center', height:'40px' }}>
                          <li className="cursor-pointer ">
                              <a
                                  href="https://twitter.com/Cooldeepsinh5"
                                  target="_blank"
                                  rel="noreferrer"
                              >
                                  <svg
                                      className="w-6 h-6 md:w-8 md:h-8" style={{ color: 'white', height: '40px', width: '40px' }}
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 512 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                  </svg>
                              </a>
                          </li>

                          <li><p className=' text-cyan-500'
                          style={{ width: '210px', textAlign: 'center', fontSize: '44px', marginTop:'-32%' }}>

                              <br />
                              Yours Truly
                          </p>
                          </li>

                          <li className="cursor-pointer" >
                              <a
                                  href="https://www.instagram.com/cooldeepsinh5/"
                                  target="_blank"
                                  rel="noreferrer"
                              >
                                  <svg
                                      className="w-6 h-6 md:w-8 md:h-8" style={{ color: 'white', height: '70px', width: '70px', marginTop: '30' }}
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 448 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M128 23.0635C162.177 23.0635 166.225 23.1936 179.722 23.8094C192.202 24.379 198.98 26.4642 203.491 28.2166C209.465 30.5387 213.729 33.3129 218.208 37.7917C222.687 42.2706 225.461 46.5351 227.783 52.5093C229.536 57.0201 231.621 63.7976 232.191 76.277C232.806 89.7746 232.936 93.8226 232.936 128C232.936 162.178 232.806 166.226 232.191 179.723C231.621 192.203 229.536 198.98 227.783 203.491C225.461 209.465 222.687 213.73 218.208 218.209C213.729 222.688 209.465 225.462 203.491 227.783C198.98 229.536 192.202 231.622 179.722 232.191C166.227 232.807 162.179 232.937 128 232.937C93.8201 232.937 89.7721 232.807 76.277 232.191C63.7971 231.622 57.0196 229.536 52.5093 227.783C46.5346 225.462 42.2701 222.688 37.7912 218.209C33.3124 213.73 30.5381 209.465 28.2166 203.491C26.4637 198.98 24.3785 192.203 23.8089 179.723C23.1931 166.226 23.063 162.178 23.063 128C23.063 93.8226 23.1931 89.7746 23.8089 76.2775C24.3785 63.7976 26.4637 57.0201 28.2166 52.5093C30.5381 46.5351 33.3124 42.2706 37.7912 37.7917C42.2701 33.3129 46.5346 30.5387 52.5093 28.2166C57.0196 26.4642 63.7971 24.379 76.2765 23.8094C89.7741 23.1936 93.8221 23.0635 128 23.0635M128 0C93.2368 0 88.8783 0.147348 75.2258 0.770275C61.6011 1.39219 52.2969 3.55566 44.1546 6.72009C35.7375 9.99122 28.5992 14.368 21.4833 21.4839C14.3675 28.5998 9.99071 35.738 6.71958 44.1551C3.55515 52.2974 1.39168 61.6017 0.769767 75.2263C0.14684 88.8783 0 93.2373 0 128C0 162.763 0.14684 167.122 0.769767 180.774C1.39168 194.399 3.55515 203.703 6.71958 211.845C9.99071 220.262 14.3675 227.401 21.4833 234.517C28.5992 241.633 35.7375 246.009 44.1546 249.28C52.2969 252.445 61.6011 254.608 75.2258 255.23C88.8783 255.853 93.2368 256 128 256C162.763 256 167.122 255.853 180.774 255.23C194.398 254.608 203.703 252.445 211.845 249.28C220.262 246.009 227.4 241.633 234.516 234.517C241.632 227.401 246.009 220.262 249.28 211.845C252.444 203.703 254.608 194.399 255.23 180.774C255.853 167.122 256 162.763 256 128C256 93.2373 255.853 88.8783 255.23 75.2263C254.608 61.6017 252.444 52.2974 249.28 44.1551C246.009 35.738 241.632 28.5998 234.516 21.4839C227.4 14.368 220.262 9.99122 211.845 6.72009C203.703 3.55566 194.398 1.39219 180.774 0.770275C167.122 0.147348 162.763 0 128 0ZM128 62.2703C91.6983 62.2703 62.2698 91.6988 62.2698 128C62.2698 164.302 91.6983 193.73 128 193.73C164.301 193.73 193.73 164.302 193.73 128C193.73 91.6988 164.301 62.2703 128 62.2703ZM128 170.667C104.436 170.667 85.3328 151.564 85.3328 128C85.3328 104.436 104.436 85.3333 128 85.3333C151.564 85.3333 170.667 104.436 170.667 128C170.667 151.564 151.564 170.667 128 170.667ZM211.686 59.6734C211.686 68.1566 204.81 75.0337 196.327 75.0337C187.843 75.0337 180.966 68.1566 180.966 59.6734C180.966 51.1902 187.843 44.3137 196.327 44.3137C204.81 44.3137 211.686 51.1902 211.686 59.6734Z" fill="#ffffff" fill-Rule="evenodd" opacity="1" stroke="none"></path>
                                  </svg>
                              </a>
                          </li>
                      </ul>

                      <ul></ul>




                  </nav>
              </div>

          </footer>
    </div>

  )
}

export default storyline