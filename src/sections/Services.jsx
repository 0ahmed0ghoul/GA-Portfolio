import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='max-container ' id="services">
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold mb-10 pt-16'>
          I Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> services
        </h2>
      <div className=" flex justify-center flex-wrap gap-9"> 
        {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
      </div>
     
    </section>
  );
};

export default Services;
