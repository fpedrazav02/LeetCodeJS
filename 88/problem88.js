var merge = function (nums1, m, nums2, n) {
  let pos = nums1.length - 1;
  m--;
  n--;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[pos] = nums1[m];
      m--;
    } else {
      nums1[pos] = nums2[n];
      n--;
    }
    pos--;
  }
};
