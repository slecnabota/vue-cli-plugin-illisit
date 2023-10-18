import get from "lodash/get";
export default () => ({
  form: {
    input: (self, name) => {
      const modelValue = self.get(name);
      const maskedValue = self.getMask(name)
        ? self.applyMask(name, modelValue)
        : modelValue;
      return {
        modelValue: maskedValue,
        "onUpdate:modelValue": (v) => self.set(name, v),
        error: get(
          self.getStore().formErrors,
          self.formName + "." + name + ".0"
        ),
      };
    },
    validations: {
      required(values, name, param) {
        const value = values[name];
        if (value.length > 0) {
          return true;
        } else {
          return false;
        }
      },
      max(values, name, param) {
        const value = values[name];
        if (value.length >= param) {
          return false;
        } else {
          return true;
        }
      },
      regexp(values, name, param) {
        const value = values[name];
        const patternRegex = new RegExp(param);
        return patternRegex.test(value);
      },
      maskFilled(values, name, param) {
        const value = values;
        const mask = param;

        const maskedValue = mask.replace(/#/g, "_");
        const sanitizedValue = value.replace(/_/g, "");
        if (sanitizedValue.length !== maskedValue.length) {
          return false;
        } else {
          return true;
        }
      },
      email(values, name, param) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return this.regexp(values, name, emailPattern);
      },

      min(values, name, param) {
        const value = values[name];
        if (value.length > 0 && value.length <= param) {
          return false;
        } else {
          return true;
        }
      },
    },
    messages: {
      min: "нужно больше",
      max: "нужно меньше",
      email: "Указанный адрес электронной почты некорректен",
      regexp: "Поле имеет неверный формат",
      equals: "Поля не совпадают",
      mask: "Введите все символы маски",
      required: "Заполните поле",
    },
  },
});
