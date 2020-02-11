String.prototype.consonants = function () {
  const consStr = this.toLowerCase().split('').filter(element => {
    return element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' && element !== 'u';
  })
  return consStr.length;
}

String.prototype.vowels = function () {
  // Write your code here

}
