import { IHomePageState } from "../pages/Home/type";
import { IPersonState } from "../pages/Person/types";

export interface IRootAppState {
    homePage: IHomePageState
}

export interface IRootPersonState {
    personPage: IPersonState
}