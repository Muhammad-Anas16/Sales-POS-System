export const getSalesReport = async () => {
  try {
    const sales = await window.api.getSalesReport()
    return sales
  } catch (err) {
    console.error(err)
    return []
  }
}
