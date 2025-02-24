import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface InitialStateTypes {
    isLoading: boolean,
    jobs: string[],
    jobCategories: string[]
}

const initialState: InitialStateTypes = {
    isLoading: false,
    jobs: [],
    jobCategories: [
        "software-dev",
        "customer-support",
        "design",
        "marketing",
        "sales",
        "product",
        "project-management",
        "data",
        "devops",
        "finance-legal",
        "hr",
        "qa",
        "writing",
        "all-others"
      ],
}

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        
    },
})

export const {  } = jobsSlice.actions
export default jobsSlice.reducer