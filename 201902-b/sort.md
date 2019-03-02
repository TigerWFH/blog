# [返回](../readMe.md)
# 排序算法相关知识
## 排序的概念

## 内排序算法(非线性时间比较类排序)
```
是指所有的数据已经加载到内存，在内存中进行排序的算法。排序过程中不需要对磁盘进行读写，同时内排序一般也假定所有用到的辅助空间也可以直接存在于内存中。
非线性时间比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此称为非线性时间比较类排序。
```
## 内排序算法

* `冒泡排序（交换排序）：`
```
思想：
    1、比较 相邻 的两个元素。如果第一个比第二个大（小），就交换这两个元素位置。
    2、对每一对相邻的元素都进行同样的操作，直到比较完所有元素，确定下最大（小）元素的位置。
    3、对剩余的元素重复步骤1、2，直到将所有元素排序完成。

js代码：
const mockData = [1, 34, 56, 2, 45, 78];

function bubbleSort(a) {
    let n = a.length;
    // 比较轮次n-1次
    for(let i = 1; i < n ; i++) {
        // 每一轮比较次数：n-i次
        for(let j = 0; j < n -i; j++) {
            console.log(`a[${j}]`, a[j + 1]);
            if (a[j] > a[j + 1 ]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }

    console.log("arr===bubblesort===>", a);
}

bubbleSort(mockData);
```
* `快速排序（交换排序）：`
```
思想：
    通过一趟排序，将目标数据分割成独立的两部分A、B，使得A所有的数据全部小于B所有的数据。之后再分别对A和B在进行快速排序，直到所有数据完成排序。
JS代码：
    // 解法1：
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
    // 解法二
```

* `直接选择排序（选择排序）：`
* `堆排序（选择排序）：`

* `直接插入排序（插入排序）：`
* `希尔排序（插入排序）：`

* `归并排序：`
## 外排序算法(线性时间非比较类排序)
```
与内排序算法对应，另一类排序算法称作外排序，即内存中无法保存全部数据，需要进行磁盘读写，每次读入部分数据到内存进行排序。
线性时间非比较类排序：不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此称为线性时间非比较类排序。
```
## 外排序算法
* `计数排序：`
* `基数排序：`
* `桶排序：`

## 排序算法三个性能指标
* `时间复杂度：`
* `空间复杂度：`
* `稳定性：`语法上相等的两个元素，排序前后位置没有变化，则称对应的排序算法是稳定的；否者是不稳定的。