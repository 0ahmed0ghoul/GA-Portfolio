import { ReviewCard } from "../components";
import { reviews } from "../constants";

const Testimonials = () => {
  return (
    <section className='max-container' id="testimonials">
      <h3 className='font-palanquin text-center px-2 py-5 text-4xl font-bold '>
        Testimonials from  
        <span className='text-coral-red'> People </span>
        I've  
        <span className='text-coral-red'> Learned </span> from and  
        <span className='text-coral-red'> Worked </span> under their supervision
      </h3>

      <p className='m-auto mt-4 max-w-lg text-center info-text'>
        Genuine feedback from individuals who have mentored me, collaborated with me, 
        or supervised my work. Their words reflect our shared professional journey.
      </p>

      <div className='mt-5 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 pb-5'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.personName}
            profession={review.personPrefession}
            feedback={review.feedback}
            logo={review.logo}
            linkedinLink={review.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
