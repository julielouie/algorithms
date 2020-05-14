function formatPhoneNumber(phoneNum) {
  const phoneArr = `${phoneNum}`.split('');
  phoneArr.unshift('(');
  phoneArr.splice(4, 0, ') ');
  phoneArr.splice(8, 0, '-');
  return phoneArr.join('');
}

// const nums = 1234567891;
// const nums = 1534267894;
// const nums = 1856423985;
const nums = 8527419630;

console.log(formatPhoneNumber(nums));
