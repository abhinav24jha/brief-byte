import React from "react";
import { IoDocumentText } from "react-icons/io5";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        
        <div>
          <div className="text-white flex items-center">
            <IoDocumentText/>
            <p className="text-white text-xl font-bold ml-1">BriefByte</p>
          </div>
        </div>
        
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/abhinav24jha", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Enhance your reading experience with BriefByte, an open-source article summarizer designed to condense lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
