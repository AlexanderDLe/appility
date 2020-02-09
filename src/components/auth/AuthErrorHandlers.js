export const usernameErrorHandler = errors => {
    if (errors.username) {
        switch (errors.username.type) {
            case 'required':
                return 'This field is required.';
            case 'minLength':
                return 'Must be at least 3 characters.';
            default:
                return '';
        }
    }
};
export const emailErrorHandler = errors => {
    if (errors.email) {
        switch (errors.email.type) {
            case 'required':
                return 'This field is required.';
            case 'pattern':
                return 'Must be a valid email';
            default:
                return '';
        }
    }
};
export const passwordErrorHandler = errors => {
    if (errors.password) {
        switch (errors.password.type) {
            case 'required':
                return 'This field is required.';
            case 'minLength':
                return 'Must be at least 8 characters.';
            case 'maxLength':
                return 'Must be at most 20 characters.';
            case 'pattern':
                return 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, 1 special character, and be 8-20 characters.';
            default:
                return '';
        }
    }
};
export const confirmPasswordErrorHandler = errors => {
    if (errors.confirmPassword) {
        switch (errors.confirmPassword.type) {
            case 'required':
                return 'This field is required.';
            case 'validate':
                return 'Passwords must match.';
            default:
                return '';
        }
    }
};
export const confirmCodeErrorHandler = errors => {
    if (errors.confirmationCode) {
        switch (errors.confirmationCode.type) {
            case 'required':
                return 'This field is required.';
            default:
                return '';
        }
    }
};
