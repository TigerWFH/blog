const mockData = [1, 34, 56, 2, 45, 78, 32, 7, 10, 11];
// const mockData = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const mockData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function swap(a, left, right) {
    let tmp = a[left];
    a[left] = a[right];
    a[right] = tmp;
}

function selectonSort(a) {
    if (!Array.isArray(a)) {
        return;
    }
    let length = a.length;
    for (let i = 1; i < length; i++){
        let min = a[i - 1];
        let minIndex = i - 1;
        for(let j = i; j < length; j++) {
            if (min > a[j]) {
                min = a[j];
                minIndex = j;
            }
        }
        swap(a, i - 1, minIndex);
    }
}
selectonSort(mockData);
console.log("arr===selectonSort===>", mockData);