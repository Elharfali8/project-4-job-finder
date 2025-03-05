import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";


export interface InitialStateTypes {
    isLoading: boolean,
    jobs: JobType[],
    favorites: JobType[],
    appliedJobs: JobType[],
    filteredJobs: JobType[],
    jobCategories: string[],
    currentPage:number,
    jobsPerPage: number,
    error: null | object | string
}
 
export interface JobType {
    id: number;
    title: string;
    company_name: string;
    company_logo: string;
    job_type: string;
    category: string;
    publication_date: string;
    candidate_required_location: string;
  }

const initialState: InitialStateTypes = {
    isLoading: false,
    jobs: [] as JobType[],
    filteredJobs: [] as JobType[],
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
    favorites: [] as JobType[],
    appliedJobs: [] as JobType[],
    currentPage: 1,
    jobsPerPage: 20,
    error: null,
}

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const url = "https://remotive.com/api/remote-jobs"

    try {
        const response = await axios.get(url);
        const data = response.data.jobs
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        filterJobs: (state, { payload }) => {
            if (!state.jobs.length) return; // ✅ Prevent filtering before jobs load
        
            const { query, category } = payload;
        
            state.filteredJobs = state.jobs.filter((job) => {
                return (
                    (!query || job.title.toLowerCase().includes(query.toLowerCase())) &&
                    (category !== 'all' ? job.category.toLowerCase() === category.toLowerCase() : true)
                );
            });
        },
        
        addToFavorites: (state, { payload }) => {
            const { id } = payload
            const job = state.jobs.find((item) => item.id === Number(id))
            const jobExists = state.favorites.find((item) => item.id === Number(id))

            if (jobExists) {
                // Remove the job from favorites if it already exists
                state.favorites = state.favorites.filter((item) => item.id !== Number(id))
                toast.success('Job removed from favorites')
            } else if (job) {
                // Add the job to favorites if it does not exist
                state.favorites = [...state.favorites, job]
                toast.success('Job added to favorites')
            }
        },
        removeFromFavorites: (state, { payload }) => {
            const { id } = payload
            const jobExists = state.favorites.find((item) => item.id === Number(id))
            if (jobExists) {
                state.favorites = state.favorites.filter((item) => item.id !== Number(id))
                toast.success('Job removed from favorites')
            }
        },
        AddToApplied: (state, { payload }) => {
            const { id } = payload
            const job = state.jobs.find((item) => item.id === Number(id))
            const jobExists = state.appliedJobs.find((item) => item.id === Number(id))

            if (jobExists) {
                state.appliedJobs = state.appliedJobs.filter((item) => item.id !== Number(id))
                toast.success('Job removed from applied')
            } else if (job) {
                state.appliedJobs = [...state.appliedJobs, job]
                toast.success('Job added to applied')
            }
        },
        removeFromApplied: (state, { payload }) => {
            const { id } = payload
            const jobExists = state.appliedJobs.find((item) => item.id === Number(id))
            if (jobExists) {
                state.appliedJobs = state.appliedJobs.filter((item) => item.id !== Number(id))
                toast.success('Job removed from applied')
            }
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = action.payload;
                state.filteredJobs = action.payload; // 👈 Set filteredJobs to all jobs initially
                state.error = null;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch data';
            });
    }
})

export const { addToFavorites, removeFromFavorites, AddToApplied, removeFromApplied, filterJobs, setCurrentPage } = jobsSlice.actions
export default jobsSlice.reducer