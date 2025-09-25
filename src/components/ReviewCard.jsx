import { linkedin } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, profession, feedback, logo, linkedinLink }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt={customerName}
        className='rounded-full object-cover w-[120px] h-[120px]'
      />

      <div className='mt-3 flex justify-center items-center gap-2.5 '>
        <div
          className='rounded-full'
          onClick={() => window.open(linkedinLink, "_blank")}
        >
          <img src={linkedin} alt='linkedin' width={30} height={30} className="bg-slate-300 rounded-md "/>
        </div>
        <h3 className='font-palanquin text-3xl text-center font-bold text-white'>
          {customerName}
        </h3>
        <img
          src={logo}
          width={30}
          height={30}
          alt={`${customerName}'s institution logo`}
          className='object-contain m-0 rounded-full'
        />
      </div>
      <p className='text-xl text-center font-montserrat  text-slate-300'>{profession}</p>
      <p className='mt-6 max-w-sm text-center info-text text-slate-300'>`{feedback}`</p>
    </div>
  );
};

export default ReviewCard;