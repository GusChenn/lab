import axios from "axios";

interface Return {
  fetchSummary: (text: string) => Promise<string>;
}

type UseSummaryFetcher = () => Return;

const useSummaryFetcher: UseSummaryFetcher = () => {
  const fetchSummary = async (text: string) => {
    try {
      const response = await axios.post("/api/summarize", { text });
      const summary = response.data.summary.replace(/[",.'!:?()]/g, "");

      return summary;
    } catch (error) {
      console.error("Failed to summarize text", error);

      return "";
    }
  };

  return { fetchSummary };
};

export default useSummaryFetcher;
