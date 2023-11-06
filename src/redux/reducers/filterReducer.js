const initialState = {
  ratingValue: 0,
  sort: "",
  byFastDelivery: false,
  byStock: false,
  searchQuery: "",
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filterByRating":
      return { ...state, ratingValue: action.payload };
    case "sortByPrice":
      return { ...state, sort: action.payload };
    case "filterByFastDelivery":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "filterByStock":
      return { ...state, byStock: !state.byStock };
    case "filterBySearch":
      return { ...state, searchQuery: action.payload };
    case "clearAllFilter":
      return {
        ratingValue: 0,
        sort: "",
        byFastDelivery: false,
        byStock: false,
        searchQuery: "",
      };
    default:
      return state;
  }
};
