export default class LifeMatrix {
    constructor(private _numbers: number[][]) { }

    get numbers() {
       return  this._numbers
    }

    nextStep(): number[][] {
        const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        this._numbers = this._numbers.map((row, i) => {
            return row.map((column, j) => {
                const lifeNeighbors = neighbors.reduce((acc, current) => {
                    try {
                        return this._numbers[i + current[0]][j + current[1]] + acc;
                    } catch {
                        return acc;
                    }
                }, 0);
                return willLife(lifeNeighbors, !!this._numbers[i][j]) ? 1 : 0;
            })
        })
        return this._numbers;
    }

}
function willLife(lifeNeighbors: number, alive: boolean): boolean {
    if (alive) {
        return lifeNeighbors >= 2 && lifeNeighbors < 4;
    }else {
        return lifeNeighbors === 3;
    }
}