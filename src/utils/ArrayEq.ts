export const arrayEquals = (array1: String[], array2: String[]) : boolean => {
     if (array1.length !== array2.length) {
          return false
     }
     for (let i = 0; i < array1.length; i++) {
          if (array1[i] !== array2[i]) {
               return false
          }
     }
     return true 
}