
import React, {useState, useEffect} from "react";
import {fetchData} from "@/app/service/api";

interface Data {
    id: number;
    name: string;
    description: string;
    status: string;
}

interface UseDataFetcherReturn {
    data: Data[] | null;
    loading: boolean;
    error: string | null;
}

const useDataFetcher = (endpoint: string):UseDataFetcherReturn =>{
    const [data, setData] = useState<Data[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataFromAPI = async ()=>{
            try{
                const results = await fetchData(endpoint)
                setData(results)
            }catch (error){
                setError('Failed to fetch data')
            }finally {
                setLoading(false);
            }
        }

        fetchDataFromAPI()
    }, [endpoint]);
    return {data, loading, error};
}

export default useDataFetcher;