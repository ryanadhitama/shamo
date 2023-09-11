export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
}
