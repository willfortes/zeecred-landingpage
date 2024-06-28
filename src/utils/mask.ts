function cpfMask(cpf: string): string {
    let value = cpf.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
    return value;
}

function cnpjMask(cnpj: string): string {
    let value = cnpj.replace(/\D/g, '');

    if (value.length > 14) {
      value = value.slice(0, 14);
    }

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
  
    return value;
}

function phoneMask(phone: string): string {
  let value = phone.replace(/\D/g, '');

  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');

  return value;
}

function cellphoneMask(cellphone: string): string {
  let value = cellphone.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  return value;
}

function zipCodeMask(zipCode: string): string {
    let value = zipCode.replace(/\D/g, '');
  
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
  
    value = value.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
  
    return value;
}

function cardNumberMask(cardNumber: string): string {
  let value = cardNumber.replace(/\D/g, '');

  if (value.length > 16) {
    value = value.slice(0, 16);
  }

  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  return value.trim();
}

function dateCardMask(value: string): string {
  let cleanValue = value.replace(/\D/g, '');

  if (cleanValue.length > 4) {
    cleanValue = cleanValue.slice(0, 4);
  }

  if (cleanValue.length > 2) {
    cleanValue = cleanValue.replace(/^(\d{2})(\d)/, '$1/$2');
  }

  return cleanValue;
}

export default {
    cpfMask,
    cnpjMask,
    phoneMask,
    cellphoneMask,
    zipCodeMask,
    cardNumberMask,
    dateCardMask
}