export interface TFetchCategory {
    success: boolean;
    result: {
        category: string;
        categories: string;
        image: string;
    }[];
}

export interface FetchCategoryAction {
    type: ActionTypes.fetchCategory;
    payload: TFetchCategory;
}

export enum ActionTypes {
    fetchCategory,
    updateCart,
}
