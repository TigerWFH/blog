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

function adjustHeap(a, begin/*开始位置 */, end/*待调整元素索引 */) {
    let middle = Math.floor(end / 2);
    while(middle >= 0) {
        if (middle * 2 + 1 <= end) {
            if (a[middle * 2 + 1] > a[middle]) {
                swap(a, middle * 2 + 1, middle);
            }
            if (a[middle * 2] > a[middle]) {
                swap(a, middle * 2, middle);
            }
        }
        else if (middle * 2 <= end) {
            if (a[middle * 2] > a[middle]) {
                swap(a, middle * 2, middle);
            }
        }

        middle--;
    }
}

function heapSort(a) {
    if (!Array.isArray(a)) {
        return;
    }
    for (let i = a.length - 1; i >= 0; i--) {
        adjustHeap(a, 0, i );
        console.log("a===>", a);
        swap(a, 0, i);
    }
}
heapSort(mockData);
console.log("arr===heapSort===>", mockData);