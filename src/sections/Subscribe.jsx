import { headerLogo, subscribe } from "../assets/images";
import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[60px] lg:max-w-md font-palanquin font-bold'>
        Follow me for the latest
        <span className='text-coral-red'> Updates </span> 
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 '>
       <img src={subscribe} alt=""  className="sm:border sm:border-slate-gray rounded-full" />
      </div>
    </section>
  );
};

export default Subscribe;
