function formatPhoneNumber(phoneNum) {
  const phoneArr = `${phoneNum}`.split('');
  phoneArr.unshift('(');
  phoneArr.splice(4, 0, ') ');
  phoneArr.splice(8, 0, '-');
  return phoneArr.join('');
}
