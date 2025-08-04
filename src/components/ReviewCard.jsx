import { linkedin, star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, profession, feedback,logo, linkedinLink}) => {
  return (
    <div className='flex justify-center  items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />


      <div className='mt-3 flex justify-center items-center gap-2.5'>
      <div
          className='rounded-full'
          key={linkedin}
          onClick={() => window.open(linkedinLink, "_blank")}
        >
          <img src={linkedin} alt='linkedin' width={30} height={30} />
        </div>
      <h3 className=' font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
      <img
          src={logo}
          width={30}
          height={30}
          alt='institution logo'
          className='object-contain m-0 rounded-full'
        />
      </div>
      <p className='text-xl font-montserrat text-slate-gray'>{profession}</p>

      <p className='mt-6 max-w-sm text-center info-text'>`{feedback}`</p>



    </div>
  );
};

export default ReviewCard;
