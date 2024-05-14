import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage("darkmode", false)

    return [dark, setDark]
}
