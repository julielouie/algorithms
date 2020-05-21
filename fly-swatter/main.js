function removeFlys(str) {
  const regex = RegExp(/[fly]+/g);
  if (regex.test(str)) {
    return str.replace(regex, '');
  }
  return 'No flies here!';
}
