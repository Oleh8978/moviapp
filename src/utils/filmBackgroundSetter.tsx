export const filmBackgroundSetter = () => {
    const element = document.querySelector('.films-single__top-img-wrapper')

    if (element) {
        element.after()
    }
}