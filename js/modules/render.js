export const render = () => {
    const sketchContainer = document.querySelector('.sketch__container');
    const sketchGridResize = document.querySelector('.sketch__input-grid-size');
    let cellCount = 16;

    const clearContainer = () => {
        sketchContainer.innerHTML = '';
    }

    const addSketchCells = () => {
        clearContainer();
        for(let i = 0; i < cellCount ** 2; i += 1) {
            const sketchCell = document.createElement('div');
            sketchCell.classList.add('sketch__cell');
            sketchContainer.appendChild(sketchCell);
        }
    }
    addSketchCells();

    const gridResize = (e) => {
        cellCount = e.target.value;
        sketchContainer.style.setProperty('--cell-size', cellCount);
        addSketchCells();
    }

    sketchGridResize.addEventListener('input', gridResize);
}