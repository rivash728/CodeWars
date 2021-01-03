function derive(coefficient,exponent) {
  var sum = coefficient * exponent;
  return "" + sum + "x^" + (exponent - 1) + "";
}

derive(7,8);
