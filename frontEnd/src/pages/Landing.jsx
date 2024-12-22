import bookHead from "../assets/bookhubhead.jpg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img src={bookHead} className="object-cover w-screen h-[16vw]" />
      </div>
      <div className="mx-16 flex flex-col py-2">
        <div className="text-4xl font-bold self-center my-8 text-green-700">
          "Share your books and get accessed to shared books online"
        </div>
        <div className="flex flex-row gap-8 justify-center">
          <div className="flex flex-col p-8 gap-3 bg-gray-200 rounded-md">
            <div className="text-3xl text-pink-500">Share your books here:</div>
            <button
              className="bg-purple-600 text-white p-2 rounded-md text-xl self-center"
              onClick={() => navigate("/share")}
            >
              Share
            </button>
          </div>
          <div className="flex flex-col p-8 gap-3 bg-gray-200 rounded-md">
            <div className="text-3xl text-indigo-500">
              Or explore books from here:
            </div>
            <button
              className="bg-blue-600 text-white p-2 rounded-md text-xl self-center"
              onClick={() => navigate("/explore")}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
