const initialStore = {
  cards: [],
  currency: [{ currency_name: [], currency_value: [] }],
  favourites: [],
  currentCurrency: { currencyOption: { symbol: "₦", divider: 1 } },
};

const actions = {
  ADD_PRODUCTS: "ADD_PRODUCTS",
  ADD_STYLE: "ADD_STYLE",
  REMOVE_STYLE: "REMOVE_STYLE",
  ADD_FAVOURITES: "ADD_FAVOURITES",
  REMOVE_FAVOURITES: "REMOVE_FAVOURITES",
  ADD_CURRENCY: "ADD_CURRENCY",
  CURRENT_CURRENCY: "CURRENT_CURRENCY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCTS:
      return {
        ...state,
        cards: action.payload,
      };
      break;
    case actions.ADD_FAVOURITES:
      const exist = [...state.favourites].find(
        (data) =>
          data?.name._source.cust_id === action.payload.name._source.cust_id
      );
      if (!exist) {
        return {
          ...state,
          favourites: [...state.favourites, action.payload],
        };
      }
      break;

    case actions.REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: [
          ...state.favourites.filter(
            (fav) =>
              fav.name._source.cust_id !== action.payload.name._source.cust_id
          ),
        ],
      };
      break;

    case actions.ADD_CURRENCY:
      return {
        ...state,
        currency: {
          currency_name: action.payload,
          currency_value: action.value,
        },
      };
      break;
    case actions.CURRENT_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };
      break;
    case actions.ADD_STYLE:
      state.cards.map((data) => {
        if (data.name === action.payload.name) {
          data.style = action.style;
        }
        return data;
      });

      return {
        ...state,
      };
    case actions.REMOVE_STYLE:
      state.cards.map((data) => {
        if (data.name === action.payload.name) {
          data.style = "";
        }
        return data;
      });

      return {
        ...state,
      };

    default:
      return state;
  }
};

export { initialStore, reducer, actions };
