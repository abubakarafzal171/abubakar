import { Link } from "react-router-dom";
const Aboutsection = () => {
  return (
 <div className="parent flex gap-2 w-full flex-col md:flex-row justify-center items-center px-4 py-10 my-20">
    <div className="left w-full md:w-2/4 flex justify-center items-start">
        <h1 className="font2 font-bold text-4xl md:text-5xl lg:text-5xl uppercase">About Me</h1>
    </div>
    <div className="right w-full md:w-2/4 flex flex-col gap-6 mt-6 md:mt-0">
        <p className="text-gray-800 lg:w-[70%] text-justify px-2">Hi, I’m Abubakar Afzal, a dedicated Frontend Web Developer who loves creating clean, intuitive, and engaging digital experiences. I believe great design isn’t just about visuals—it’s about how smoothly a product works, how it feels to use, and how naturally it guides the user. I focus on building responsive, user-friendly interfaces that combine creativity with performance to deliver meaningful web experiences.</p>

        <p className="text-gray-800 lg:w-[70%] text-justify px-2">I have a strong foundation in HTML, CSS, and JavaScript, and I am proficient in popular frameworks like React, Next.js, and Tailwind. I also have experience with animation Libraries like gsap and framer motion.</p>

            <Link to={'/about'} className='border px-3 py-1.5 rounded hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 font2 w-32 text-center'>Read More</Link>
    </div>
 </div>
  )
}


export default Aboutsection