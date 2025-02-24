import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "@/state/globalSlice";
import jobsSlice from '@/state/jobsSlice'

export const store = configureStore({
    reducer: {
        global: globalSlice,
        jobs: jobsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch