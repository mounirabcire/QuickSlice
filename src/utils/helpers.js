export function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(value);
}

export function formatDate(dateStr) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
    const d1 = new Date().getTime();
    const d2 = new Date(dateStr).getTime();
    return Math.round((d2 - d1) / 60000);
}

export const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

export function isValidPassword(password) {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long!";
    }
    if (!specialCharPattern.test(password)) {
        return "Password must contain at least one special character!";
    }
    
    return "";
}
