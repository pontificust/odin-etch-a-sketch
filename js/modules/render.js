export const render = () => {
    const sketchContainer = document.querySelector('.sketch__container');
    const sketchGridResize = document.querySelector('.sketch__input-grid-size');
    const sketchReset = document.querySelector('.sketch__button-reset');
    const sketchResizeLabel = document.querySelector('.sketch__label-grid-size');
    let cellCount = 16;

    const clearContainer = () => {
        sketchContainer.innerHTML = '';
    }

    const clearColor = () => {
        const sketchCells = document.querySelectorAll('.sketch__cell');
        sketchCells.forEach(cell => cell.classList.remove(`add-color${cell.id}`));
    }

    const addSketchCells = () => {
        clearContainer();
        for(let i = 0; i < cellCount ** 2; i += 1) {
            const sketchCell = document.createElement('div');
            sketchCell.classList.add('sketch__cell');
            sketchCell.id = '0';
            sketchContainer.appendChild(sketchCell);
        }
    }
    addSketchCells();

    const gridResize = (e) => {
        cellCount = e.target.value;
        sketchResizeLabel.textContent = cellCount;
        sketchContainer.style.setProperty('--cell-size', cellCount);
        addSketchCells();
    }

    const draw = (e) => {
        const id = e.target.id;
        if(e.target !== sketchContainer && id < 10){
            e.target.classList.remove(`add-color-${id}`)
            e.target.classList.add(`add-color-${+id+1}`);
            e.target.id = 1 + +id;
        }
    }

    sketchGridResize.addEventListener('input', gridResize);
    sketchContainer.addEventListener('mouseover', draw);
    sketchReset.addEventListener('click', clearColor);
}