import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="flex items-center justify-around bg-blue-300 py-4 relative">
    <div className="flex items-center justify-around h-[80px] bg-blue-300 py-4 w-2/12">
      <img src="/2.jpg" className="rounded-full"
       alt="Logo"
       style={{width:"60px",
      height:"60px"}}
       />
       <span className="font-bold text-2xl">MY LOGO</span>
    </div>  
    <div className="flex items-center justify-around text-2xl w-5/12 font-bold py-4 ">
      This Is My First Web
    </div>
    <div className=" w-5/12">
      <ul className="flex items-center justify-around font-bold ">
        <li className="py-3 px-5 bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none">About</li>
        <li className="py-3 px-5 bg-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">Home</li>
        <li className="py-3 px-6 bg-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">Contact</li>
        <li className="py-3 px-6 bg-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">Logo</li>
        <li className="py-3 px-5 bg-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">Sign</li>
      </ul>
    </div>
    </nav>
    <div className="flex h-screen  bg-blue-50">
      <div className="w-1/2 flex flex-col justify-center items-center p-5 space-y-8">
        <h1 className="font-extrabold text-3xl text-cyan-400 ">
          Welcome to My Website
        </h1>
        <div className="w-10/12">
        <img src="/3.jpg"
         alt="Beautifull"
         className="w-full h-auto object-cover rounded-lg" 
        />
        </div>
      </div>
      <div className=" w-1/2 flex flex-col justify-center items-center space-y-8">
        <h1 className="font-extrabold text-3xl text-cyan-400">
          Welcome to My Website
        </h1>
        <div className="w-10/12">
        <img src="/3.jpg"
         alt="Sorry"
         className="w-full h-auto object-cover rounded-lg"
         />
         </div>

    </div>
    </div>
    
    </>
  );
}
