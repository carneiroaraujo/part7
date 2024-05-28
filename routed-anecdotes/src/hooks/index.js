import {useState} from "react"
export function useField(type) {
    const [value, setValue] = useState("")
    function onChange(event) {
        setValue(event.target.value)
    }
    function clear() {setValue("")}
    return {
        attr: {
            type, value, onChange
        },
        clear
    }
}

