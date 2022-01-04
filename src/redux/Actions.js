import { UserActionTypes } from "./Types";

export const setCategoriesId = id => ({
    type : UserActionTypes.Categories,
    payload : id
});