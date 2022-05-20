const hasDuplicate = arr => new Set(arr).size != arr.length;
hasDuplicate([1,2,3,4]);
hasDuplicate([1,3,3,4]);

const set = new Set();
set.add("red");
set.has("red");
set.delete("red");
set.has("red");