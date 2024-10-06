// eslint-disable-next-line react/prop-types
const Input = ({ label, type, icon: Icon, register, name }) => {
  return (
    <div>
      <p className="mb-1.5 text-sm font-medium text-[#141B27]">{label}</p>
      <div className="w-full h-[40px] flex border border-content px-1.5 rounded-md">
        <div className="w-[30px] h-full flex items-center justify-center">
          {Icon && <Icon className="text-base text-content" />}
        </div>
        <input
          type={type}
          {...register(name)} // register function applied here
          className="w-full text-xs border-none text-content placeholder:text-content focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
