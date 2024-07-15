import axios from "axios";
import { useEffect, useState } from "react";
import { getAllCategories } from "../apis/fakeStoreApis";

function useCategory() {
    const [category, setCategory] = useState([]);

    async function downloadCategory() {
        const response = await axios.get(getAllCategories());
        setCategory(response.data);
    }

    useEffect(() => {
        downloadCategory();
    }, [])
    return [category]
}

export default useCategory;