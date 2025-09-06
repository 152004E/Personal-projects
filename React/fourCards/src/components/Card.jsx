const Card = ({ title, description, img, color }) => {
  return (
    <div className=" mb-7 p-5 rounded-br-2xl shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] relative h-[222px] lg:w-[422px] transition duration-[1s] hover:scale-[1.07] hover:shadow-none cursor-pointer">
      <div
        className={`${color} h-2  absolute w-full top-0 left-0 rounded-t-2xl`}
      ></div>
      <h1 className="text-[20px]  font-semibold mb-2">{title}</h1>
      <p className="text-[16px] text-Grey-400 mb-2">{description}</p>
      <img className="absolute bottom-8 right-20 " src={img} alt="Icon" />
    </div>
  );
};

export default Card;
