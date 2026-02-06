import { Link } from "react-router-dom";


export default function Hero() {
  const telechargerCV = () => {
   
    const link = document.createElement('a');
    link.href= '/Wague_CV_FullStack_Developer.pdf';  
    link.download= 'Wague_CV_FullStack_Developer.pdf'; 
    link.click();
  };
  return (
    <header className="container-fluid" >
      <div className="grid md:grid-cols-2 sm:grid-cols-1 pt-8">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl font-poppins animate__animated animate__bounceInLeft ">Salut, moi c'est Wague Cheickne</h1>
          <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8 font-poppins animate__animated animate__bounceInUp">
          Ingénieur logiciel spécilaisé en <strong>React</strong>, <strong>Javascript</strong>, <strong>Node.js</strong>, <strong>Spring</strong> et <strong>interfaces modernes</strong>, je concois des applications performants, accessibles et sur-mesures.</p>

          <div className="mt-10 grid grid-cols-3 animate__animated animate__bounceIn animate__delay-1s ">
            <div className="flex items-center gap-3 pl-3 col-span-3 sm:col-span-2">

              <button  className=" bg-[#37538C] border border-white hover:bg-white text-white  hover:text-gray-700 font-bold py-2  px-4 rounded-xl inline-flex items-center">
                <svg className=" w-4 h-4 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" fill="currentColor" /></svg>
                Download CV
              </button>
              <Link to='https://wa.me/+212771676213' target="_blank">
               <button className="flex items-center justify-center border bg-[#37538C] hover:bg-white text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-2">
                <svg fill="currentColor" className="w-4 h-4 " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 308 308" >
                  <g id="XMLID_468_">
                    <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                    <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                  </g>
                </svg>
              </button>
              </Link>
              <Link to='https://www.linkedin.com/in/cheick-wague-622148212/' target="_blank">
              <button className="flex items-center justify-center border bg-[#37538C] hover:bg-white text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16V11M12 16V14M12 11V14M16 16V14C16 12.5 15.5 11 14 11C12.5 11 12 12.5 12 14M7.99 8H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              </Link>
              <Link to='https://github.com/cheick18' target="_blank">
              <button className="flex items-center justify-center border bg-[#37538C]  hover:bg-white  text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-2">
                <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.298 3.438 9.8 8.205 11.4.6.111.82-.26.82-.577v-2.17c-3.338.727-4.034-1.604-4.034-1.604-.546-1.38-1.33-1.751-1.33-1.751-1.086-.743.082-.73.082-.73 1.204.085 1.83 1.241 1.83 1.241 1.07 1.834 2.809 1.303 3.493.997.107-.775.418-1.303.761-1.603-2.666-.303-5.466-1.333-5.466-5.923 0-1.307.47-2.374 1.246-3.22-.126-.303-.543-1.516.116-3.161 0 0 1.012-.323 3.318 1.231 1.023-.284 2.11-.426 3.18-.43 1.068.004 2.157.146 3.18.43 2.303-1.554 3.318-1.231 3.318-1.231.659 1.645.242 2.858.116 3.161.776.846 1.246 1.913 1.246 3.22 0 4.597-2.805 5.62-5.474 5.917.431.371.825 1.102.825 2.222v3.29c0 .319.218.694.825.577C20.562 21.8 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
              </Link>





            </div>


            {/*
          <a href="#" className="rounded-md bg-slate-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
       */}
          </div>
        </div>
      </div>

    </header>

  )
}
