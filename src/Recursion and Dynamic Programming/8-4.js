const powerSet = (set) => {
  const subsets = [];
  const recurse = function(currSet, remainingSet) {
    subsets.push(currSet);
    for (let i = 0; i < remainingSet.length; i++) {
      recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  };
  recurse([], set);
  return subsets;
};
