export const dateFromDateString = (data: Date | undefined) => {
    if (!data) {
        return ''
    }
    return `${String(new Date(data)).split(' ')[1]} ${String(new Date(data)).split(' ')[2]}, ${String(new Date(data)).split(' ')[3]} `
}