export function calculateSum(list) {
    let sum = 0;
    if (list) {
      list.forEach((arg) => {
        sum += parseInt(arg.amount);
      });
    }
    return sum;
}