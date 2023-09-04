import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center px-5">
      <div className=" shadow-[0_4px_22px_11px_rgba(0,0,0,0.25)] rounded-xl w-fit h-fit p-5">
        <div className="flex flex-col text-[30px]">
          <h1 className="text-[100px] font-bold">404</h1>
          <hr />
          <p>Unfortunately, this page doesn't exist.</p>
          <button className="w-fit mt-8 mb-4 p-2 font-bold bg-[lightgray] rounded-lg shadow-[4px_4px_12px_1px_rgba(0,0,0,0.25)]">
            <Link onClick={() => navigate(-1)}>Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
