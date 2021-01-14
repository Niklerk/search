import Swal from "sweetalert2";
import { guidGenerator } from "../common/guidGenerator";
import { messages } from "../data/searchData";
import { fetchBing, fetchGoogle } from "../helper/helper";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startSearchGoogle = (searchText) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const items = await fetchGoogle(searchText);
      dispatch(searchGoogle(dataGoogleToCommonObject(items)));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      Swal.fire("Error", messages.uiErrorMessage, "error");
    }
  };
};

export const startSearchBing = (searchText) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const items = await fetchBing(searchText);
      dispatch(searchBing(dataBingToCommonObject(items)));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      Swal.fire("Error", messages.uiErrorMessage, "error");
    }
  };
};

export const startSearchBoth = (searchText) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const itemsGoogle = await fetchGoogle(searchText);
      const itemsBing = await fetchBing(searchText);
      dispatch(
        searchBoth([
          ...dataGoogleToCommonObject(itemsGoogle),
          ...dataBingToCommonObject(itemsBing),
        ])
      );
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      Swal.fire("Error", messages.uiErrorMessage, "error");
    }
  };
};

const dataGoogleToCommonObject = (data) => {
  return data.map((info) => ({
    id: info.cacheId ?? guidGenerator(),
    title: info.title,
    snippet: info.snippet,
    url: info.link,
    displayUrl: info.displayLink,
    engine: "by Google",
  }));
};

const dataBingToCommonObject = (data) => {
  return data.map((info) => ({
    id: info.id ?? guidGenerator(),
    title: info.name,
    snippet: info.snippet,
    url: info.url,
    displayUrl: info.displayUrl,
    engine: "by Bing",
  }));
};

export const searchGoogle = (data) => ({
  type: types.google,
  payload: {
    data,
  },
});

export const searchBing = (data) => ({
  type: types.bing,
  payload: {
    data,
  },
});

export const searchBoth = (data) => ({
  type: types.both,
  payload: {
    data,
  },
});
