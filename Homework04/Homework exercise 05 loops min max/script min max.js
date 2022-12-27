function minAndMax(arr) {
  let min = 9999999999;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i] && typeof arr[i] === "number") {
      min = arr[i];
    }
    if (max < arr[i] && typeof arr[i] === "number") {
      max = arr[i];
    }
  }
  sum = min + max;
  console.log(`${max} ${min} ${sum}`);
}
arr = [3, 5, 6, 8, 11, "jabolko", "cimet", null];

minAndMax(arr);
