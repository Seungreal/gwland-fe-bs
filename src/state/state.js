import { useState, useEffect } from "react";
import axios from "axios";

let listeners = [];

let state = {
  data: {
    menu: [
      {
        name: "홈",
        url: "/",
      },
      {
        name: "코스추천",
        url: "/survey",
      },
      {
        name: "코스관리",
        url: "/mypage",
      },
      {
        name: "관광지",
        url: "/place",
      },
      {
        name: "관리자",
        url: "/manage",
      },
    ],
    categories: [
      {
        id: "0",
        title: "Product",
      },
      {
        id: "1",
        title: "Project",
      },
      {
        id: "2",
        title: "Review",
      },
      {
        id: "3",
        title: "Article",
      },
    ],
  },
  
  error: null,
  sidebar: false,
  modal: false,
  video: false,
  request: {
    modal: false,
    text: "",
  },
};

const actions = {
  fetch: async () => {
    try {
      const response = await axios.get(
        // Change with your database path
        "/api/data"
      );
      state = { ...state, data: response.data };
    } catch (err) {
      state = { ...state, error: err };
    }

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleSidebar: () => {
    state = { ...state, sidebar: !state.sidebar };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleModal: () => {
    state = { ...state, modal: !state.modal };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleRequest: (payload) => {
    state = {
      ...state,
      request: { modal: !state.request.modal, text: payload },
    };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleVideo: () => {
    state = { ...state, video: !state.video };

    for (const listener of listeners) {
      listener(state);
    }
  },
};

export const useCustomState = () => {
  const setState = useState(state)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [state, actions];
};
