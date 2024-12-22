const { customRecord } = require("../utils/sqlFunctions");
const { APIData } = require("../utils/customResponse");
const { APIError } = require("../utils/customErrors");

const fetchBooks = async (req, res, next) => {
  const restrau_Id = req.query.id;
  try {
    const query = `SELECT * FROM books`;
    const itemData = await customRecord(query, [restrau_Id]);
    const booksInfo = itemData;

    APIData(booksInfo)(req, res);
    if (Object.values(booksInfo).length == 0) {
      console.log(`Data not Found!`);
    } else {
      console.log(`Data fetched successfully!`);
    }
  } catch (err) {
    next(new APIError("Data not Found", 200, false, null));
    console.log(`Data not Found!`);
  }
};

module.exports = {
  fetchBooks,
};
