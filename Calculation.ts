//export const multiplication(x,y,z) (same as below)
export function calculationSum(x: any,y:any,z:any) {
    //Integer.parseInt(x);
    return (Number(x) + Number(y) + Number(z)).toString();
}
export function calculationDifference(x:any,y:any,z:any) {
    return (Number(x) - Number(y) - Number(z)).toString();
}
export function calculationMultiply(x:any,y:any,z:any) {
    return (Number(x) * Number(y) * Number(z)).toString();
}
