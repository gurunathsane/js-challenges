function calculateTotalSalesWithTax(products, taxRate) {
  const totalBeforeTax = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const total = totalBeforeTax + (totalBeforeTax * taxRate) / 100;
  return parseFloat(total.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
