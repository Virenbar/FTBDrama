export default defineEventHandler((event) => {
    const raw = event.path.endsWith("raw")
    const result = {
        drama: "drama",
        version: "version",
        seed: "seed"
    }
    return raw ? result.drama : result
})