const SELECTION_START = 4;
const SELECTION_RANGE = 3;
const baseCountryCode = '8';
const baseMatrix = '__________';
const phoneLength = baseCountryCode.length + baseMatrix.length;

const onPhoneInputInput = (e) => {
  const matrix = `${baseCountryCode}${baseMatrix}`;
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = e.target.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  e.target.value = matrix.replace(/./g, (a) => {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

const onPhoneInputClick = (e) => {
  if (e.target.selectionStart < SELECTION_START) {
    e.preventDefault();
    e.target.setSelectionRange(SELECTION_RANGE, SELECTION_RANGE);
  }
};

const onPhoneInputPaste = (e) => {
  e.target.setSelectionRange(0, 0);
  if (!e.target.selectionStart) {
    setTimeout(() => {
      if (e.target.value.startsWith('+7')) {
        return;
      }
      if (e.target.value.startsWith('+8')) {
        e.target.value = `+7 ${e.target.value.slice(SELECTION_RANGE)}`;
        return;
      }
      e.target.value = '';
    });
  }
};

const onPhoneInputKeydown = (e) => {
  if (e.target.selectionStart < SELECTION_START && (e.key === 'ArrowLeft' || e.key === 'Enter')) {
    e.preventDefault();
    e.target.setSelectionRange(SELECTION_RANGE, SELECTION_RANGE);
  }
};

const onPhoneInputBlur = ({target}) => {
  if (target.value === baseCountryCode) {
    const parent = target.closest('[data-validate-type="phone"]');
    target.value = '';
    if (!parent.hasAttribute('data-required')) {
      parent.classList.remove('is-valid');
      parent.classList.remove('is-invalid');
      const parentMessage = parent.querySelector('.input-message');
      if (parentMessage) {
        parentMessage.remove();
      }
    }
    parent.classList.remove('not-empty');
    target.removeEventListener('input', onPhoneInputInput);
    target.removeEventListener('blur', onPhoneInputBlur);
    target.removeEventListener('keydown', onPhoneInputKeydown);
    target.removeEventListener('paste', onPhoneInputPaste);
    target.removeEventListener('click', onPhoneInputClick);
  }
};

const onPhoneInputFocus = ({target}) => {
  if (!target.value) {
    target.value = baseCountryCode;
  }
  target.addEventListener('input', onPhoneInputInput);
  target.addEventListener('blur', onPhoneInputBlur);
  target.addEventListener('keydown', onPhoneInputKeydown);
  target.addEventListener('paste', onPhoneInputPaste);
  target.addEventListener('click', onPhoneInputClick);
};

export const initPhoneInput = (parent) => {
  const input = parent.querySelector('input');
  parent.dataset.phoneLength = phoneLength;
  input.addEventListener('focus', onPhoneInputFocus);
};
