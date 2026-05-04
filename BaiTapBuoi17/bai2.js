function getElectricityBill(kwh) {
    if (kwh <= 50) {
        return `${kwh} * 1678 = ${kwh * 1678}`;
    }
    else if (kwh <= 100) {
        return `(50 * 1678) + (${kwh - 50} * 1734) = ${(50 * 1678) + ((kwh - 50) * 1734)}`;
    }
    else if (kwh <= 200) {
        return `(50 * 1678) + (50 * 1734) + (${kwh - 100} * 2014) = ${(50 * 1678) + (50 * 1734) + ((kwh - 100) * 2014)}`;
    }
    else if (kwh <= 300) {
        return `(50 * 1678) + (50 * 1734) + (100 * 2014) + (${kwh -200} * 2536) = ${(50 * 1678) + (50 * 1734) + (100 * 2014) + ((kwh - 200) * 2536)}`;
    }
    else if (kwh <= 400) {
        return `(50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (${kwh -300} * 2834) = ${(50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + ((kwh - 300) * 2834)}`;
    }
    else {
        return `(50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (100 * 2834) + (${kwh - 400} * 2927) = ${(50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (100 * 2834) + ((kwh - 400) * 2927)}`;
    }
}
console.log(getElectricityBill(70));
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580

console.log(getElectricityBill(120));
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880



/**
 * // function getElectricityBill(kwh) {
 * //     const tiers = [
 * //         { limit: 50, price: 1678 },
 * //         { limit: 50, price: 1734 },
 * //         { limit: 100, price: 2014 },
 * //         { limit: 100, price: 2536 },
 * //         { limit: 100, price: 2834 },
 * //         { limit: Infinity, price: 2927 }
 * //     ];
 * //
 * //     let remaining = kwh;
 * //     let total = 0;
 * //
 * //     for (let tier of tiers) {
 * //         const used = Math.min(remaining, tier.limit);
 * //         total += used * tier.price;
 * //         remaining -= used;
 * //
 * //         if (remaining <= 0) break;
 * //     }
 * //
 * //     return total;
 * // }
 * // console.log(getElectricityBill(70));
 * // // 118580
 * //
 * // console.log(getElectricityBill(120));
 * // // 210880
 *
 */

//=======================================================
/**
 * const getElectricityBill=(kwh)=>{
 *     if(kwh<=50){
 *         return kwh*1678;
 *     }
 *     else if(kwh>=51&&kwh<=100){
 *         return (50*1678)+(kwh-50)*1734;
 *     }
 *     else if(kwh>=101&&kwh<=200){
 *         return (50*1678)+(50*1734)+(kwh-100)*2014;
 *     }
 *      else if(kwh>=201&&kwh<=300){
 *         return (50*1678)+(50*1734)+(100*2014)+(kwh-200)*2536;
 *     }
 *      else if(kwh>=301&&kwh<=400){
 *         return (50*1678)+(50*1734)+(100*2014)+(100*2536)+(kwh-300)*2834;
 *     }
 *     else if(kwh>=401){
 *         return (50*1678)+(50*1734)+(100*2014)+(100*2536)+(100*2834)+(kwh-400)*2927;
 *     }
 *     else{
 *         return "kwh ko hợp lệ!!"
 *     }
 *
 * }
 * console.log(getElectricityBill(70));
 * // Mong đợi: (50 * 1678) + (20 * 1734) = 118580
 *
 * console.log(getElectricityBill(120));
 * // Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880
 * */