export const addDataToLocalStorage = (expenseData: any) => {
    localStorage.setItem("jobsData", JSON.stringify(expenseData));
  };
  
  export const removeDataFromLocalStorage = () => {
    localStorage.removeItem("jobsData");
  };
  
  export const getDataFromLocalStorage = (): any | null => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("jobsData");
      const expenseData = result ? JSON.parse(result) : null;
      return expenseData;
    }
    return null;
  };
  
  // FAVORITES
  export const addFavoritesDataToLocalStorage = (expenseData: any) => {
    localStorage.setItem("favoritesJobs", JSON.stringify(expenseData));
  };
  
  export const removeFavoritesDataFromLocalStorage = () => {
    localStorage.removeItem("favoritesJobs");
  };
  
  export const getFavoritesDataFromLocalStorage = (): any | null => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("favoritesJobs");
      const expenseData = result ? JSON.parse(result) : null;
      return expenseData;
    }
    return null;
  };
  
  // APPLIED JOBS
  export const addAppliedDataToLocalStorage = (expenseData: any) => {
    localStorage.setItem("appliedJobs", JSON.stringify(expenseData));
  };
  
  export const removeAppliedDataFromLocalStorage = () => {
    localStorage.removeItem("appliedJobs");
  };
  
  export const getAppliedDataFromLocalStorage = (): any | null => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("appliedJobs");
      const expenseData = result ? JSON.parse(result) : null;
      return expenseData;
    }
    return null;
  };
  