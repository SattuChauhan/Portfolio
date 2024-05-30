
import './App.css';


function App() {
  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between'>
            <div>
              <h1 className='font-bold text-xl'>Satendra Portfolio</h1>
            </div>
            <div>
                <ul className='flex gap-4'>
                  <li>
                    <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                  </li>
                  <li>
                    <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                  </li>
                  <li>
                    <a className='text-gray-400 hover:text-white cursor-pointer'>About ME</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        { /* Intro/Banner Section */ }
        <section>
          <div className='container m-auto px-4 py-32 flex flex-col sm:flex-row gap-6' >
              <div>
                  <h2 className='font-bold text-4xl'>Hello , i'm Satendra</h2>
                  <h2 className='font-bold text-4xl mt-1 gradiant-text runnint-text'>Frontend Developer ,</h2>
                  <p className='mt-4 text-gray-400'>I am Frontend Developer seeking to apply and want to join communities to enhance my skills and carrier.</p>
              </div>
              <div>
                <img src='./sattu.jpeg' className='rounded-full m-auto' width={220}/>

              </div>
          </div>
        </section>
        <section>
          <div className='container m-auto px-4 py-12'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11'>
                <div className='border border-gray-500 rounded-md p-5 flex-1'>
                   <img src='./img1.avif' className='w-full h-auto'/>
                   <h3 className='text-2xl font-semibold mt-4'>Furniture store landing page</h3>
                   <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for online Furniture store. HTML , CSS(SCSS)</p>
                   <div className='flex gap-2 mt-12 '>
                      <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Project</button>
                      <button className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                   </div>
                </div>

                <div className='border border-gray-500 rounded-md p-5 flex-1'>
                   <img src='./img2.avif' className='w-full h-auto'/>
                   <h3 className='text-2xl font-semibold mt-4'> Designer Shoes Store </h3>
                   <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for online Designer Shoes store. HTML , CSS(SCSS)</p>
                   <div className='flex gap-2 mt-12 '>
                      <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Project</button>
                      <button className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                   </div>
                </div>

                <div className='flex-col sm:flex-row border border-gray-500 rounded-md p-5 flex-1'>
                   <img src='./img3.jpg' className='w-full h-auto'/>
                   <h3 className='text-2xl font-semibold mt-4'>Leading page for frontend Developer</h3>
                   <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for online Furniture store. HTML , CSS(SCSS)</p>
                   <div className='flex gap-2 mt-12 '>
                      <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Project</button>
                      <button className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                   </div>
                </div>

                <div className='border border-gray-500 rounded-md p-5 flex-1'>
                   <img src='./img4.avif' className='w-full h-auto'/>
                   <h3 className='text-2xl font-semibold mt-4'>Website redesign for venue project</h3>
                   <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for online Furniture store. HTML , CSS(SCSS)</p>
                   <div className='flex gap-2 mt-12 '>
                      <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live Project</button>
                      <button className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                   </div>
                </div>
            </div>
          </div>
        </section> 
             {/* Technologies  */}
             <section className='py-10'>
                <div className='container m-auto px-4'>
                  <h2 className='text-2xl font-semibold'>Technologies</h2>
                    <div className='mt-14'>
                       <div>
                            <div className='mt-8'>
                              <div className='flex justify-between items-center'>
                                  <h2 className=' font-semibold'>HTML</h2>
                                  <p className='text-gray-500 '>Advanced</p>
                              </div>
                              <span className='w-full h-2 mt-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
                            </div>

                            <div className='mt-8'>
                              <div className='flex justify-between items-center'>
                                <h2 className='t font-semibold'>Css & Bootstrap</h2>
                                <p className='text-gray-500 '>Advanced</p>
                              </div>
                              <span className='w-full h-2 mt-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
                            </div>

                            <div className='mt-8'>
                              <div className='flex justify-between items-center'>
                                <h2 className=' font-semibold'>Javascript</h2>
                                <p className='text-gray-500 '>Advanced</p>
                              </div>
                              <span className='w-[85%] h-2 mt-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
                            </div>

                            <div className='mt-8'>
                              <div className='flex justify-between items-center'>
                                <h2 className=' font-semibold'>ReactJS</h2>
                                <p className='text-gray-500 '>Advanced</p>
                              </div>
                              <span className='w-[80%] h-2 mt-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
                            </div>

                            <div className='mt-8'>
                              <div className='flex justify-between items-center'>
                                <h2 className=' font-semibold'>MongoDb</h2>
                                <p className='text-gray-500 '>Advanced</p>
                              </div>
                              <span className='w-[65%] h-2 mt-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
                            </div>

                            <div className='mt-8'>
                              <div className='flex justify-between items-center'>
                                <h2 className=' font-semibold'>Nodejs</h2>
                                <p className='text-gray-500 '>Advanced</p>
                              </div>
                              <span className='w-[60%] h-2 mt-2 bg-slate-600 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
                            </div>

                       </div>
                    </div>
                </div>

              </section>
 
              {/* Additional Skills Section*/}
              <section>
                <div className='container m-auto px-4 py-14'>
                  <h2 className='text-2xl font-semibold'>Additional Technologies and Skills</h2>
                  <div className='flex flex-col sm:flex-row gap-4 sm:gap-20  w-[80%]'>
                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-1 before:absolute relative left-5 before:-ml-5 '>Git</p>
                    </div>

                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:left-4 before:absolute relative left-5 before:-ml-10'>Team Work</p>
                    </div>

                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:left-4 before:absolute relative left-5 before:-ml-10'>Wordpress</p>
                    </div>

                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:left-4 before:absolute relative left-4 before:-ml-10'>Quick Learner</p>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-4 sm:mt-6 w-[80%]'>
                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-1 before:absolute relative left-5 before:-ml-5'>Git</p>
                    </div>

                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:left-4 before:absolute relative left-5 before:-ml-10'>Team Work</p>
                    </div>

                    <div>
                      <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:left-4 before:absolute relative left-5 before:-ml-10'>Wordpress</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className='container m-auto px-4'>
                  <h2 className='text-2xl font-semibold'> About Me </h2>
                  <div className='mt-12  relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-0 before:w-1 before:bg-white'>
                    <div className='pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]'>
                      <h3 className='absolute left-0 text-lg font-semibold'>2021</h3>
                       <p>As a recent Master's in Information technology master with a passion for Frontend  Developer, I am eager to leverage my academic background and skills to contribute effectively in IT field.</p> 
                    </div>

                    <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]'>
                      <h3 className='absolute left-0 text-lg font-semibold'>2022</h3>
                       <p>Result-oriented JS developer with 6 month of official experience in JS technologies ( React JS & MongoDB ). Proficient in JS technology with a strong focus on front end Development successfully contributed to the implementation of Water Management system Project, ensuring compliance with regulatory guidelines and industry standards.</p> 
                    </div>

                    <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]'>
                      <h3 className='absolute left-0 text-lg font-semibold'>2023</h3>
                       <p>Technology has exponentially accelerated the pace of innovation.so i also want to do something great in my field.</p> 
                    </div>

                    <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]'>
                      <h3 className='absolute left-0 text-lg font-semibold'>2023</h3>
                       <p>I like to travel across the world and see the gound level situation and handled by the technologie like digitaly.</p> 
                    </div>
                  </div>
                </div>
              </section>
      </main>
      <footer>
        <div className='container m-auto flex justify-between px-4  py-6'>
          <div>
            <p className='text-gray-300 text-sm'>CopyRight @ 2024 </p>
          </div>
          <div>
            <ul className='flex gap-6'>
              <li>
                <a><img src='./facebook.webp'  className='w-5'/></a>
              </li>

              <li>
                <a><img src='./instagram.webp'   className='w-5'/></a>
              </li>

              <li>
                <a><img src='./linkedin.avif'   className='w-5'/></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
    
  );
}

export default App;
