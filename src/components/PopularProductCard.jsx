import { star, tech } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, link,techs ,Date}) => {
  return (
<div className='flex flex-1 flex-col w-full max-sm:w-full'>
  {/* Image with overlay */}
  <div className='relative w-[282px] h-[282px] group'>
    <img
      src={imgURL}
      alt={name}
      className='w-full h-full object-cover rounded-md transition duration-300 group-hover:brightness-50'
    />
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-xl font-bold'
    >
      View Project
    </a>
  </div>

  {/* Tech icons */}
  <div className='mt-8 flex justify-start gap-2.5'>
    <img src={tech} alt='tech icon' width={27} height={24} />
    <p className='font-montserrat text-xl leading-normal text-slate-gray'>
      {techs}
    </p>
  </div>

  {/* Title */}
  <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin text-coral-red'>
    {name}
  </h3>
  <p className="info-text">{Date}</p>
</div>
  );
};

export default PopularProductCard;
