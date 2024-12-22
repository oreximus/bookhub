import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Share = () => {
  return (
    <>
      <div className="mx-16 py-10 flex flex-col gap-4">
        <div className="text-2xl font-bold text-green-700 self-center">
          Fill your book details to share:
        </div>
        <div className="flex flex-col shadow-lg px-24 mx-96 rounded-md bg-gray-100 py-5">
          <form action="" className="flex flex-col gap-2 py-4">
            <label htmlFor="name" className="font-bold">
              Book name:
            </label>
            <input type="text" className="p-2 rounded-md" />
            <label htmlFor="description" className="font-bold">
              Book Description:
            </label>
            <input type="text" className="p-2 rounded-md" />
            <label htmlFor="tags" className="font-bold">
              Tags:
            </label>
            <input type="text" className="p-2 rounded-md" />
            <label htmlFor="book_image" className="font-bold">
              Book image:
            </label>
            <input type="file" className="p-2 rounded-md" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md self-start font-bold">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Share;
