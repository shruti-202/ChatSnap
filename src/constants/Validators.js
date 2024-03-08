export const userNameFormat = (userName) => {
    const gibberishRegex = /(.)\1{2,}/; 
    if (gibberishRegex.test(userName)) {
      return false; 
    }
    const userNameFormat = /^[A-Z][a-z]+(?:_[a-z]*)?$/;
    return userNameFormat.test(userName);
  };
  
  export const userMessageFormat = (userMessage) => {
    const gibberishRegex = /(.)\1{3,}/; 
    if (gibberishRegex.test(userMessage)) {
      return false; 
    }
    const userMessageFormat = /^(?:[A-Z][a-z]*|[A-Z]+)(?:\s(?:[A-Z][a-z]*|[A-Z]+|[a-z]+))*$/
    return /\b[A-Z][a-z]*\b/.test(userMessage) && userMessageFormat.test(userMessage);
  };
  