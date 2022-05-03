import { useSearchParams } from "react-router-dom";


export const useCustomSearchParams = () => {
    const [search, setSearch] = useSearchParams()
    const params = Object.fromEntries(new URLSearchParams(search))

    return [params, setSearch as any]
}