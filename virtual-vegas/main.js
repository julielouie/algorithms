function isJackpot(slotArr) {
  return slotArr.every(slotItem => slotItem === slotArr[0]);
}
