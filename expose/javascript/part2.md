1. At line 12, 3 will be printed since the for loop goes through until the value of i is greater than or equal to the length of prices. Since the length of prices is 3, the for loop will stop once i reaches 3 and then i will be printed at line 12.
2. At line 13, 150 will be printed because the last value of prices[i] would be 300, given that is the last value in the array, and then discount is already assigned at 0.5 so discountedPrice would be equal to 300 * (1 - 0.5) which is 150.
3. At line 14, 150 will be printed since the discountedPrice which is 150 would be plugged into the formula for finalPrice, the formula being Math.round(discountedPrice * 100) / 100. The answer to the formula is 150 so line 14 would print out 150.
4. The function will return an array of size 3, each value being the finalPrice values iterated within the for loop. The array holds values, 50, 100, and 150 ([50, 100, 150]).
5. At line 12, an error would occur because the value of i is trying to be printed, but since i is declared with keyword let, i isn't declared or defined when outside of the for loop.
6. At line 13, an error would occur because it is trying to print the value of discountedPrice, but since discountedPrice is declared with keyword let, discountedPrice isn't declared or defined when outside of the for loop.
7. At line 14, 150 is printed. finalPrice is declared outside of the for loop so it is declared and able to be called within the function. Within the for loop, the value of finalPrice is reassigned as the for loop is able to go through till the end and reassign the variable to its final value.
8. The function would return an array of size 3, each value being the finalPrice values iterated within the for loop. The array holds values, 50, 100, and 150 ([50, 100, 150]). 
9. At line 11, an error would occur because the value of i is trying to be printed, but since i is declared with keyword let, i isn't declared or defined when outside of the for loop.
10. At line 12, 3 is printed. This is because the line is trying to print out the value of length which is declared within the same block. 
11. The function would return an array of size 3, each value being the finalPrice values iterated within the for loop. The array holds values, 50, 100, and 150 ([50, 100, 150]). 
12. Notations:
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. Arithmetic
    A. '32', adding 2 to '3' just creates a new string with both 3 and 2
    B. 1, '3' is seen as int because of the subtraction sign
    C. 3, null is values as 0
    D. '3null', adding null to create a string with null along side 3
    E. 4, value of true is 1 so it is essentially just 1 + 3
    F. 0, false and null are both values as 0
    G. '3undefined', adding undefined to create new string
    H. NaN, can't subtract string with undefined value
14. Comparison
    A. true, comparing string 2 to int 1 is essentially comparing int 2 and int 1
    B. false, '2' < '12' same as 2 < 12
    C. true, 2 == '2' same as 2 == 2
    D. false, compares int 2 with string 2
    E. false, true == 2 same as 1 == 2
    F. true, compares boolean with boolean
15. == compares the values no matter if string or int whereas === compares the data type so 2 === '2' would be comparing if int 2 is equal to string 2.
17. The result will be an array of size 3, holding values [2,4,6]. When modifyArray is called with parameters [1,2,3] and the function doSomething, within the for loop, doSomething is called with parameter array[i] and the returned value is pushed into newArr. The values that are pushed is basically each value within array ([1,2,3]) multiplied by 2, which results in the returned array [2,4,6].
19. Output: 1
            4
            3
            2
    