import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "@/state/globalSlice";
import jobsSlice from '@/state/jobs/jobsSlice'

export const store = configureStore({
    reducer: {
        global: globalSlice,
        jobs: jobsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Disable serializable check to improve performance
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch