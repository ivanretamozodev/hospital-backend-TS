import { Request, Response } from "express";
import { handleHttp } from "../utilities/handle-http";

const getItems = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true, message: "Hola Desde Node" });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

export { getItems, getItem, postItem, updateItem, deleteItem };
