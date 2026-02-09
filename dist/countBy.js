export default function countyBy(arr) {
    return arr.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++;
        }
        else {
            acc[item] = 1;
        }
        return acc;
    }, {});
}
