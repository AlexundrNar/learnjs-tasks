// Какой результат будет у выражений ниже?
let a = "" + 1 + 0      // "10"
let b = "" - 1 + 0      // -1 
let c = true + false    // 1
let d = 6 / "3"         // 2
let e = "2" * "3"       // 6
let f = 4 + 5 + "px"    // 9px
let g = "$" + 4 + 5     // $45
let h = "4" - 2         // 2
let j = "4px" - 2       // NaN
let k = "  -9  " + 5    // "  -9  5"
let l = "  -9  " - 5    // -14
let p = null + 1        // 1
let i = undefined + 1   // NaN
let y = " \t \n" - 2    // -2