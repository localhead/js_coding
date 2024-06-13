const isSimilar = function (nums1, nums2) {
  const sort1 = nums1.sort((a, b) => a - b);
  const sort2 = nums2.sort((a, b) => a - b);

  if (sort1.join("") === sort2.join("")) return true;
  return false;
};

console.log(isSimilar([0, 1, 2], [2, 1, 0])); /// true
console.log(isSimilar([0, 1], [2, 1, 0])); /// false
console.log(isSimilar([0, 5, 1], [0, 1, 5])); /// true
