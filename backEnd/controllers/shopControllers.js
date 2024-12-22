const {
  insertRecord,
  checkRecordExists,
  createTable,
  selectRecord,
  customRecord,
} = require("../utils/sqlFunctions");
const { cartSchema } = require("../schema/itemSchema");
const { APIData, customResponse } = require("../utils/customResponse");
const { APIError, AppError } = require("../utils/customErrors");
const { query } = require("express");

const fetchCart = async (req, res, next) => {
  const user_id = req.params.user_id;
  try {
    const query = ``;
    const cartData = await customRecord(query, user_id);
    console.log(cartData, "<===Cart Data from SQL");
    APIData(cartData)(req, res);
  } catch (err) {
    next(new APIError(`${err}`, 200, false, null));
  }
};

const insertCart = async (req, res, next) => {
  const { user_id, book_id, quantity } = req.body;

  const cartEntry = {
    user_id,
    book_id,
    quantity,
  };

  try {
    const query = `SELECT * from cart WHERE user_id = ?`;
    const cartData = await customRecord(query, user_id);

    if (cartData.length > 0) {
      const bookExists = await checkRecordExists("cart", "book_id", book_id);
      console.log(bookExists, "<===Book Existence");
      if (!bookExists) {
        await insertRecord("cart", cartEntry);
        customResponse("Cart Data Inserted successfully", 201, true)(req, res);
      } else {
        let query;

        if (quantity === -1) {
          query = `UPDATE cart SET quantity = CASE
                                          WHEN quantity > 1 THEN quantity + ${quantity}
                                          ELSE quantity
                                                    END
                         WHERE user_id = ? AND book_id = ?`;
        } else {
          query = `UPDATE cart SET quantity = quantity + 1
                         WHERE user_id = ? AND book_id = ?`;
        }

        await customRecord(query, [user_id, book_id]);
        customResponse(
          "Book quantity updated successfully!",
          201,
          true,
        )(req, res);
      }
    } else {
      await insertRecord("cart", cartEntry);
      customResponse("Cart data inserted successfully", 201, true)(req, res);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCart = async (req, res, next) => {
  const { user_id, book_id, quantity } = req.body;

  try {
    let query;

    if (quantity === -1) {
      query = `UPDATE cart SET quantity = CASE
                                          WHEN quantity > 1 THEN quantity + ${quantity}
                                          ELSE quantity
                                                    END
                         WHERE user_id = ? AND book_id = ?`;
    } else {
      query = `UPDATE cart SET quantity = quantity + 1
                         WHERE user_id = ? AND book_id = ?`;
    }

    await customRecord(query, [user_id, book_id]);
    customResponse("Book quantity updated successfully!", 201, true)(req, res);
  } catch (err) {
    next(new AppError(`Error: ${err}`, 400, false));
  }
};

const deleteCart = async (req, res, next) => {
  const { user_id, book_id } = req.body;

  try {
    const query = `DELETE from cart WHERE user_id = ? and book_id = ?`;
    await customRecord(query, [user_id, book_id]);
    customResponse("Book data remove successfully", 200, true)(req, res);
  } catch (err) {
    next(new AppError(`Error: ${err}`, 400, false));
  }
};

module.exports = {
  fetchCart,
  insertCart,
  updateCart,
  deleteCart,
};
