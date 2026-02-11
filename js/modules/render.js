export const render = () => {
    const sketchContainer = document.querySelector('.sketch__container');
    let cellCount = 16

    const addSketchCells = () => {
        for(let i = 0; i < cellCount ** 2; i += 1) {
            const sketchBox = document.createElement('div');
            sketchBox.classList.add('sketch__box');
            sketchContainer.appendChild(sketchBox);
        }
    }
    addSketchCells();

}