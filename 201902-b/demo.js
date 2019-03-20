// const mockData = [1, 34, 56, 2, 45, 78, 32, 7, 10, 11];
/*
完全树结构：
1
34  56
2   45  78  32
7   10  11
 */
// const mockData = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const mockData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function swap(a, left, right) {
    let tmp = a[left];
    a[left] = a[right];
    a[right] = tmp;
}

function shellSort(a) {
    let increment = a.length;
    do {
        increment = Math.floor(increment / 3) + 1;
        for (let i = increment; i < a.length; i += increment) {
            let tmp = a[i];
            let position = i;
            if (a[i] < a[i - increment]) {
                do {
                    swap(a, position, position - increment);
                    position -= increment;
                } while (position -increment >= 0 && tmp < a[position - increment]);
                a[position] = tmp;
            }
        }
    } while (increment > 1)
}
shellSort(mockData);
console.log("arr===insertSort===>", mockData);