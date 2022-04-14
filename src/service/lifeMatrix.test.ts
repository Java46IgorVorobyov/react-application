import LifeMatrix from "./LifeMatrix";

test('life matrix next step', () => {
    const matrix1 = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    const matrix2 = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    const matrix = new LifeMatrix(matrix1);

    expect(matrix.nextStep()).toEqual(matrix2);
    expect(matrix.nextStep()).toEqual(matrix1);
})