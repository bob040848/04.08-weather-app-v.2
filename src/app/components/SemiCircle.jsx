export const SemiCircle = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center gap-4 bg-white rounded-full h-28 w-28">
      <div className="w-11 h-20">
        <img
          src="/images/vector-left.png"
          alt="Vector Left"
          className="object-cover"
        />
      </div>
      <div className="w-11 h-20">
        <img
          src="/images/vector-right.png"
          alt="Vector Right"
          className="object-cover"
        />
      </div>

      <div className="relative">
        <div className="absolute -top-[86px] -left-14 h-[41px] w-10 bg-white"></div>
        <div className="absolute -top-[87px] -left-[56px] h-[44px] w-11 rounded-bl-full bg-black"></div>
        <div className="absolute top-[47px] -left-[66px] h-[41px] w-10 bg-white"></div>
        <div className="absolute top-[45.5px] -left-[56px] h-[44px] w-11 rounded-tl-full bg-black"></div>
      </div>
    </div>
  );
};
