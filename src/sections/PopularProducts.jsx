import { shoes } from "../constants";
import { Button, ShoeCard } from "../components";
import { useState } from "react";

import { shoe1 } from "../assets/images";

const PopularProducts = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoe1);
  const [bigProjectInfo, setbigProjectInfo] = useState([
    shoes[0].name,
    shoes[0].Date,
    shoes[0].techs,
    shoes[0].link,
  ]);

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <h2 className="text-4xl font-palanquin font-bold text-center ">
            Few of my <span className="text-coral-red"> Projects </span>
          </h2>
          <p className="lg:max-w-lg  font-montserrat text-slate-gray text-center my-2">
            Here are some of the projects I have worked on recently. Each
            project showcases my skills in various technologies and my ability
            to deliver high-quality solutions.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col  xl:min-h-[620px] bg-primary bg-hero bg-cover bg-center py-5">
        {/* Project section */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-2 px-3 w-full">
          {/* Image */}
          <div className="w-[500px] h-[500px] flex justify-center items-center border-2 rounded-xl overflow-hidden bg-white">
            <img
              src={bigShoeImg}
              alt="shoe collection"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Info Box */}
          <div className="flex-1  rounded-xl p-4 bg-transparent w-[500px] h-[500px] flex flex-col justify-between gap-4">
            <div>
            <p className="font-palanquin font-bold text-3xl">
              {bigProjectInfo[0]}
            </p>
            <p className="text-slate-gray">{bigProjectInfo[1]}</p>
            <p className="info-text my-10">Your description here...</p>


            </div>
            <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-wrap gap-2">
              {bigProjectInfo[2].split(" ").map((tech, index) => (
                <span
                  key={index}
                  className="bg-coral-red text-white-400  px-2 py-1 rounded-3xl border-2 border-white-400 text-md hover:text-black hover:transition duration-300 select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>

              <Button
                label="View project"
                backgroundColor="bg-transparent"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
                hover="hover:bg-black hover:text-white transition duration-200"
                onClick={() =>
                  window.open(bigProjectInfo[3], "_blank")
                }
              />
              </div>
            </div>
          </div>
        </div>

        {/* Shoe list */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full px-5">
          {shoes.map((image, index) => (
            <ShoeCard
              key={index}
              index={index}
              imgURL={image}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              changeBigProjectInfo={(proj) => setbigProjectInfo(proj)}
              bigProjectInfo={bigProjectInfo}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
