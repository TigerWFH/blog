const mockData = [1, 34, 56, 2, 45, 78, 32, 7, 10, 11];
// const mockData = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const mockData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function swap(a, big, small) {
    let tmp = a[small];
    a[small] = a[big];
    a[big] = tmp;
}

function quickSort(a, left, right) {
    if (left >= right) {
        return;
    }
    let key = a[left];
    let begin = left++;
    let end = right;
    while(left < right) {
        while(a[right] > key && left < right) {
            right--;
        }
        while(a[left] < key && left < right) {
            left++;
        }
        if (left < right) {
            swap(a, left, right);
        }
    }

    if (left === right && key > a[left]) {
        swap(a, begin, left);
    }
    quickSort(a, begin, left - 1);
    quickSort(a, left, end);
}

quickSort(mockData, 0, mockData.length - 1);
console.log("arr===quicksort===>", mockData);