import {TypedUseSelectorHook, useSelector} from "react-redux";
import {allState} from "../reducers";


export const useTypedSelector: TypedUseSelectorHook<allState> = useSelector;