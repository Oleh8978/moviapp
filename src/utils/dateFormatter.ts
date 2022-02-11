export const dateFormatter = (date: Date) => {

    const dateNumber = String(date).split('-')[2].split('')[0] === '0' ? String(date).split('-')[2].split('')[1] : String(date).split('-')[2]

    return`${new Date(date).toLocaleString('default', { month: 'short' })} ${dateNumber}, ${String(date).split('-')[0]}`
}