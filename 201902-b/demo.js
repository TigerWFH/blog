const mockData = [1, 34, 56, 2, 45, 78, 32, 7, 10, 11];

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
        if(left < right){
            let tmp = a[left];
            a[left] = a[right];
            a[right] = tmp;
        }
    }
    // 如果初始left === right，如果放在while循环里，就走不到了，就出错了
    if (left === right && key > a[left]) {
        a[begin] = a[left];
        a[left] = key;
    }
    quickSort(a, begin, left - 1);
    quickSort(a, left, end)
}

quickSort(mockData, 0, mockData.length - 1);
console.log("arr===quicksort===>", mockData);