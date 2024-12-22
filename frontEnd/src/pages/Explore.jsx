import axios from "axios";
import { useState, useEffect } from "react";

const Explore = () => {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchBooks = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/book/data")
      .then((resp) => {
        console.log(resp.data.data, "<===Books Data");
        setBooksData(resp.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="mx-16 flex flex-col py-2">
      <div className="text-xl font-bold">Available Books...</div>
      {isLoading ? (
        <div className="text-xl">Loading...</div>
      ) : (
        booksData.map((data) => (
          <>
            <div className="flex flex-row items-center gap-3 bg-gray-200 rounded-md p-3 my-4">
              <img src={data.book_image} className="object-cover w-24 h-24" />
              <div className="text-xl font-bold">{data.name}</div>
              <div className="text-xl">{data.description}</div>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default Explore;
