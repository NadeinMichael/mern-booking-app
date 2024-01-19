const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          NadeinHolidays.con
        </span>
        <span className="text-white font-bold flex gap-4 tracking-tight">
          <p className="cursor-pointer">Privacy Police</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
