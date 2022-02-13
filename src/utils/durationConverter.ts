export const durationConverter = (time: number | undefined) => {
    if (!time) {
        return ''
    }

  return Math.floor(time / 60) + 'h ' + (time % 60) + 'm'; 
}