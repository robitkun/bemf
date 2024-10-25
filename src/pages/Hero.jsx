const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900  rounded-lg">
        <div className="textStructure pt-40 px-20 text-white">
          <div className="masker ">
            <h1 className="uppercase  font-semibold font-['Poppins',_sans-serif]  text-7xl  tracking-tighter">
              WELC<span className="text-yellow-500">O</span>ME
            </h1>
          </div>
          <div className="masker">
            <h1 className="uppercase  font-semibold text-7xl font-['Poppins',_sans-serif]   tracking-tighter">
              T<span className="text-green-500">O</span> BEMF UNUGHA
            </h1>
          </div>
          <div className="masker">
            <h1 className="uppercase font-semibold text-6xl font-['Poppins',_sans-serif]  tracking-tighter">
              2024
            </h1>
          </div>
        </div>
        <div className="border-t-[1px] border-white mt-24"></div>
      </div>
    </>
  );
};

export default Hero;
