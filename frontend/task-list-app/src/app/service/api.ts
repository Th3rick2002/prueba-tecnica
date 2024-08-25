export async function fetchData(enpoint: string) {
    try{
        const response = await fetch(enpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    }catch(error: any){
        throw error;
    }
}