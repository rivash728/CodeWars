function enough(cap, on, wait) {
  var sum = on + wait;
  if ( cap > sum)
    return 0;
  else
    overflow = sum - cap;
    return overflow;
}

console.log(enough(10, 5, 5));