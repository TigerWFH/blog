# [返回](../readMe.md)
# 算法设计思想
* `分治法`
* `动态规划`
* `贪心法`
* `回溯法`
* `分支限界法`

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
            if(left < right){
                swap(a, left, right);
            }
        }
        // 如果初始left === right，如果放在while循环里，就走不到了，就出错了
        if (left === right && key > a[left]) {
            swap(a, left, right);
        }
        quickSort(a, begin, left - 1);
        quickSort(a, left, end)
    }

    quickSort(mockData, 0, mockData.length - 1);
    console.log("arr===quicksort===>", mockData);
    // 解法二
    // const mockData = [1, 34, 56, 2, 45, 78, 32, 7, 10, 11];
    // const mockData = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const mockData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

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
        for(let i = left; i <= end; i++) {
            if (key > a[i]) {
                swap(a, i, left);
                left++;
            }
        }
        swap(a, begin, left - 1);
        quickSort(a, begin, left - 2);
        quickSort(a, left, end);
    }

    quickSort(mockData, 0, mockData.length - 1);
    console.log("arr===quicksort===>", mockData);
```

* `直接选择排序（选择排序）：`
```
思想：
    每次选出最小或最大的元素，存放到排序序列的起始位置，然后再从剩余的待排序列中选取最小或最大的元素，存放到排序序列的后序位置，知道将所有的元素排列起来。
js代码：
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
```
* `堆排序（选择排序）：`
```
准备知识：
    1、树的定义：
        树（tree）是由n（n>=0）个元素组成的有限集合，其中：
        （1）每一个元素称作结点（node）；
        （2）有一个特定的节点称作根节点或树根（root），该结点无父结点
        （3）除根节点之外的其余数据元素被分成m（m>=0）个互不相交的集合T1、T2，
            ...，Tm-1，其中每一个集合Ti（1<=i<=m）本身也是一颗树，被称作原树的子树（subtree）。
    2、相关术语：
        结点（node）：书中的每一个元素就是一个结点。
        结点的度：一个结点含有的子树的个数，称为该结点的度。
        叶子结点（终端结点）：度为0的结点称为叶子结点。
        分支结点（非终端结点）：度不为0的结点。
        子结点：
        父结点：
        兄弟结点：
        堂兄弟结点：
        结点的祖先：
        子孙结点：
        森林：由m（m>=0）个树组成的集合称为森林。
        树的度：一颗书中，结点最大的度，即为树的度。
        结点的层次：从根开始为第一层，根的子结点为2层，依次类推。
        树的深度（高度）：树中结点最大的层次。
    3、树的分类：
        有序树：树的各个子树的顺序是固定的，不能更改数序。
        无序树：树的各个子树的数序不固定，可以更改顺序。
        二叉树：每个结点最多只能有两个结点的树称为二叉树。二叉树是有序树，左右子树的顺序不能改变。二叉树又分为满二叉树和完全二叉树。
        满二叉树：一个二叉树如果每一层的结点个数都达到最大值，则称该二叉树为满二叉树。满二叉树的结点个数可以直接由深度n计算得出，即2^n-1（等比数列）。
        完全二叉树（Complete Binary Tree）：对于深度为K的，有n个结点的二叉树，当且仅当其每一个结点都与深度为K的满二叉树中编号从1至n的结点一一对应时称之为完全二叉树。
        B树：待补充
        霍夫曼树：待补充

思想：
    1、按照完全树逻辑，找出最大或最小的元素，并与最后一个元素交换位置
    2、重复步骤1，直到排序完成

js代码：
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

    function adjustHeap(a, end/*待调整元素索引 */) {
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
            adjustHeap(a, i );
            swap(a, 0, i);
        }
    }
    heapSort(mockData);
    console.log("arr===heapSort===>", mockData);
```

* `直接插入排序（插入排序）：`
```
js代码：
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
```
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