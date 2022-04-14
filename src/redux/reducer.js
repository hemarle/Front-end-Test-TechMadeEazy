const initialStore = {
  cards: [],
  currency: [],
  favourites: [],
  currentCurrency: { symbol: "₦", divider: 1 },
};

const actions = {
  ADD_PRODUCTS: "ADD_PRODUCTS",
  ADD_STYLE: "ADD_STYLE",
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
        (data) => data?._source.cust_id === action.payload._source.cust_id
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
            (fav) => fav._source.cust_id !== action.payload._source.cust_id
          ),
        ],
      };
      break;

    case actions.ADD_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
      break;
    case actions.CURRENT_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };
      break;

    default:
      return state;
  }
  // if (action.type === "ADD_PRODUCTS") {
  //   console.log(action.payload, "payload");
  //   return {
  //     ...state,

  //     cards: action.payload,
  //   };
  // }

  // if (action.type === actions.ADD_FAVOURITES) {
  //   console.log(action.style, "favourites");

  //   const exist = [...state.favourites].find(
  //     (data) => data?._source.cust_id === action.payload._source.cust_id
  //   );
  //   if (!exist) {
  //     return {
  //       ...state,
  //       favourites: [...state.favourites, action.payload],
  //     };
  //   }
  // }
  // if (action.type === "REMOVE_FAVOURITES") {
  //   return {
  //     ...state,
  //     favourites: [
  //       ...state.favourites.filter(
  //         (fav) => fav._source.cust_id !== action.payload._source.cust_id
  //       ),
  //     ],
  //   };
  // }

  // if (action.type === "ADD_CURRENCY") {
  //   return {
  //     ...state,
  //     currency: action.payload,
  //   };
  // }
  // if (action.type === "CURRENT_CURRENCY") {
  //   return {
  //     ...state,
  //     currentCurrency: action.payload,
  //   };
  // }
  // if (action.type === "ADD_STYLE") {
  //   console.log(state.cards, "stater");
  //   let tempCard = [...state?.cards].map((card) => {
  //     if (card?._source.cust_id === action.payload._source.cust_id) {
  //       card.concat({ style: "red" });
  //     }
  //     console.log(state.cards?.style, "syle state");
  //     return card;
  //   });

  //   return {
  //     ...state,
  //     cards: tempCard,
  //   };

  //   // const exist = [...state.cards].find(
  //   //   (data) => data?._source.cust_id === action.payload._source.cust_id
  //   // );
  //   // if (exist) {
  //   //   console.log("success ");
  //   //   return {
  //   //     ...state,
  //   //     cards: [...state.cards, { style: action.style }],
  //   //   };
  //   // }
  // }

  // return state;
};

export { initialStore, reducer, actions };
