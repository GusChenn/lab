import axios from "axios";

interface Return {
  fetchSummary: (text: string) => Promise<any>;
}

type UseSummaryFetcher = () => Return;

const useSummaryFetcher: UseSummaryFetcher = () => {
  const fetchSummary = async (text: string) => {
    try {
      const response = await axios.post("/api/summarize", { text });

      const summary = response.data.summary;

      return {
        summary,
        error: null,
      };
    } catch (error: any) {
      console.error(error.response.data.error.message);

      return {
        summary: "",
        error: error.response.data.error.message,
      };
    }
  };

  return { fetchSummary };
};

export default useSummaryFetcher;
