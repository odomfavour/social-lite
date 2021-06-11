export default {
    data() {
      return {
        inputPatterns: {
          humanName: '[-_a-zA-Z0-9`\' ]+',
          // email: '.+\\@.+\\..+',
          email: '\\S+@\\S+\\.\\S+',
          phone: '[+-0-9 ]+',
          machineName: '[-_a-zA-Z0-9]+',
        }
      }
    },
    methods: {
      validateNotEmpty(items) {
        return Object.values(items).reduce((accum, item) =>
          item !== '' && item !== null && accum, true);
      },
  
      validateHumanName(item) {
        return new RegExp(this.inputPatterns.humanName).test(item);
      },
  
      validateMachineName(item) {
        return new RegExp(this.inputPatterns.machineName).test(item);
      },
  
      validatePhone (phone) {
        return new RegExp(this.inputPatterns.phone).test(phone);
      },
  
      validateEmail (email) {
        return new RegExp(this.inputPatterns.email).test(email);
      },
  
      validateUsernameOrEmail (login) {
        return !/@/.test(login) || this.validateEmail(login)
      },
  
      validatePhoneOrEmail (login) {
        return this.validatePhone(login) || this.validateEmail(login)
      },
  
      // Threshold is the limit in MB.
      validateFileSize(file, threshold, type = 'highLimit') {
        if (!file) return false;
  
        const size = Math.round(file.size * 0.00000095367432);
        switch (type) {
          case 'highLimit':
            if (size > threshold) return false;
            break;
  
          case 'lowLimit':
            if (size < threshold) return false;
            break;
  
          case 'range':
            if (size < threshold[0] || size > threshold[1]) return false;
            break;
  
          default:
        }
        return true;
      },
    }
  }
  