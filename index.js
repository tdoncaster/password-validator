const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'
const numberValue = '0123456789'


function upperCase(password, i) {
  return upperCaseLetter.includes(password[i])
}
function lowerCase(password, i) {
  return lowerCaseLetter.includes(password[i])
}
function numericValue(password, i) {
  return numberValue.includes(password[i])
}
function specialChar(password, i) {
  const specialChar = password.charCodeAt(i)

  if (specialChar >= 31 && specialChar <= 47 || specialChar >= 58 && specialChar <= 64 ||
    specialChar >= 91 && specialChar <= 96 ||
    specialChar >= 123 && specialChar <= 126) {
    return true
  }
}

function validatePassword(password) {
  let upperCaseCount = 0
  let lowerCaseCount = 0
  let numberCount = 0
  let specialCharacterCount = 0

  if (password.length < 8) {
    return false
  }
  for (let i = 0; i <= password.length; i++) {
    if (upperCase(password, i)) {
      upperCaseCount++
    }
    if (lowerCase(password, i)) {
      lowerCaseCount++
    }
    if (numericValue(password, i)) {
      numberCount++
    }
    if (specialChar(password, i)) {
      specialCharacterCount++
    }

    return upperCaseCount > 0 && lowerCaseCount > 0 && numberCount > 0 && specialCharacterCount > 0
  }
}
module.exports = validatePassword


