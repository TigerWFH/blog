const mockData = [1, 34, 56, 2, 45, 78, 32, 7, 10, 11];
/*
完全树结构：
1
34  56
2   45  78  32
7   10  11
 */
// const mockData = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const mockData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function swap(a, left, right) {
    let tmp = a[left];
    a[left] = a[right];
    a[right] = tmp;
}

function insertSort(a) {
    if (!Array.isArray(a)) {
        return ;
    }

    for (let i = 1; i < a.length; i++) {
        let value = a[i];
        let index = i;
        if (value < a[i - 1]) {
            for (let j = i; j >= 0; j--) {
                if (value < a[j]) {
                    swap(a, j, index);
                    index--;
                }
                console.log("a===>", a);
            }
        }
        a[index] = value;
    }
}
// function insertSort(a) {
//     if (!Array.isArray(a)) {
//         return;
//     }
//     for (let i = 1; i < a.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (a[j] < a[j - 1] ) {
//                 swap(a, j - 1, j);
//             }
//         }
//     }
// }
insertSort(mockData);
console.log("arr===insertSort===>", mockData);