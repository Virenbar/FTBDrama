import useDrama from "~/composables/useDrama"

export default defineEventHandler((event) => {
    const params = new URLSearchParams(event._path?.split("?")[1])
    const raw = params.get("raw")
    const { generate } = useDrama()
    const result = generate()
    return raw ? result.drama : result
})