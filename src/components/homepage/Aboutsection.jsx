const Aboutsection = () => {
  return (
 <div className="parent flex gap-2 w-full flex-col md:flex-row justify-center items-center px-4 py-10">
    <div className="left w-full md:w-2/4 flex justify-center items-start">
        <h1 className="font2 font-bold text-4xl md:text-5xl lg:text-5xl uppercase">About Me</h1>
    </div>
    <div className="right w-full md:w-2/4 ">
        <p className="text-gray-800 lg:w-[70%] text-justify px-2">Hi, I’m Abubakar Afzal, a dedicated Frontend Web Developer who loves creating clean, intuitive, and engaging digital experiences. I believe great design isn’t just about visuals—it’s about how smoothly a product works, how it feels to use, and how naturally it guides the user. I focus on building responsive, user-friendly interfaces that combine creativity with performance to deliver meaningful web experiences.</p>
    </div>
 </div>
  )
}


export default Aboutsection