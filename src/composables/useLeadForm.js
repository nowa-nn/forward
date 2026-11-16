import { ref } from 'vue';

/**
 * Composable for lead capture form state, +7 Russian phone mask, and validation.
 */
export function useLeadForm() {
  const form = ref({
    name: '',
    phone: '',
    consent: false
  });

  const formErrors = ref({
    name: false,
    phone: false,
    consent: false
  });

  const isSubmitted = ref(false);

  const handlePhoneInput = (event) => {
    let input = event.target.value.replace(/\D/g, '');
    if (!input) {
      form.value.phone = '';
      return;
    }

    if (['7', '8', '9'].includes(input[0])) {
      if (input[0] === '9') input = '7' + input;
      let formatted = '+7 ';
      if (input.length > 1) {
        formatted += '(' + input.substring(1, 4);
      }
      if (input.length >= 5) {
        formatted += ') ' + input.substring(4, 7);
      }
      if (input.length >= 8) {
        formatted += '-' + input.substring(7, 9);
      }
      if (input.length >= 10) {
        formatted += '-' + input.substring(9, 11);
      }
      form.value.phone = formatted;
    } else {
      form.value.phone = '+' + input.substring(0, 16);
    }

    if (form.value.phone.replace(/\D/g, '').length === 11) {
      formErrors.value.phone = false;
    }
  };

  const handleNameInput = () => {
    if (form.value.name.trim().length >= 2) {
      formErrors.value.name = false;
    }
  };

  const handleConsentChange = () => {
    if (form.value.consent) {
      formErrors.value.consent = false;
    }
  };

  const submitForm = () => {
    const digits = form.value.phone.replace(/\D/g, '');
    const isNameValid = form.value.name.trim().length >= 2;
    const isPhoneValid = digits.length === 11;
    const isConsentValid = form.value.consent === true;

    formErrors.value.name = !isNameValid;
    formErrors.value.phone = !isPhoneValid;
    formErrors.value.consent = !isConsentValid;

    if (isNameValid && isPhoneValid && isConsentValid) {
      isSubmitted.value = true;
      console.log('Lead submitted:', { ...form.value });
    }
  };

  return {
    form,
    formErrors,
    isSubmitted,
    handlePhoneInput,
    handleNameInput,
    handleConsentChange,
    submitForm
  };
}
