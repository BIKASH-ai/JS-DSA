// ----------------REPLACE METHOD---------------------

// let name = "Bikash"
// console.log(name)
// let change = name.replace("B","v")
// console.log(change)

// --------------Slice Method-------------------------

// let name = "BIKASH MAHATO"
// let name_chg = name.slice (2,6)
// console.log(name_chg)

// -------------length property---------------------

// let name = "Bikash"
// name.length
// console.log(name.length)

// ----------------Array---------------

// let arr= [1,2,3,4]
// console.log(arr[1])
// console.log(typeof arr)
// console.log(arr.length)
// arr [2]= 14
// console.log(arr)

// ------------------Array Method----------------

// const arr = [12 , 14 , 13, 4, 23 ]
// console.log(arr)
// console.log(arr.toString)
// console.log(arr.join("-"))
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.push(99))
// console.log(arr)

// --------------Array.from---------

// let name = "Bikash"
// let arr = Array.from(name)
// console.log(arr)

// -------------------filter()-----------------------------

// let arr = [12, 2, 16, 18, 21]
// let new_arr = arr.filter(checkAge)

// function checkAge (Age){
//     return Age >= 18;
// }
// console.log(new_arr)

// // --------------Binary Search--------------------
// let binary = ( arr, size , key) 
//     let start = 0;
//     let end = size-1;

//     let mid = (start + end)/2;
//     while(start<=end){
//         if(arr[mid]==key){
//             return mid;
//         }
//         if (key>arr[mid]){
//             start = mid+1;
//         }else{
//             end = mid -1;
//         }
//         mid = (start +end)/2;
//     }

//     even [6] = [2,4,6,8,12,18]
//     odd [5] = [3,8,11,14,16]

//     let index = binary(even, 2, 1)
//     console.log("Index of 12 is"+index)

//     return 0;

// let x = "Ram"
// x = "Sita"
// x = "Gita"
// console.log(x) 

// const x  = "Ram" 
// x = "Sita" 
// console.log(x)

const SectionA = {
    TotalStudent: 100,
    TotalSubject: 6,
    TotalMaleStudent: 50,
    TotalFemaleStudent:50,
    Details : function () {
        return this.TotalMaleStudent + " "  + this.TotalFemaleStudent; 
    }
}
// console.log(SectionA.TotalStudent)
// console.log(SectionA.Details)
console.log(SectionA.Details())