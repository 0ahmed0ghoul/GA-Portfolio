const ShoeCard = ({ imgURL, changeBigShoeImage, changeBigProjectInfo,bigShoeImg,bigProjectInfo}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.imgURL) {
      changeBigShoeImage(imgURL.imgURL);
    }
    if (bigProjectInfo[0] !== imgURL.name || bigProjectInfo[1] !== imgURL.Date) {
      console.log(imgURL.link);
      changeBigProjectInfo([imgURL.name , imgURL.Date,imgURL.techs, imgURL.link]);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.imgURL
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      
      <div className='flex justify-center items-center  bg-center bg-cover sm:w-full sm:h-full rounded-xl max-sm:p-4'>
        <img
          src={imgURL.imgURL}
          alt='shoe colletion'
          className='w-full h-full '
        />
      </div>
    </div>
  );
};

export default ShoeCard;
