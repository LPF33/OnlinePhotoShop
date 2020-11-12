export const checkName = (name: string, val: string): [boolean, string] => {
    if (val.match(/^([A-Za-z äöüÄÖÜß -,._']){2,15}$/i)) {
        return [true, ""];
    } else {
        return [
            false,
            `${name}: length: 2-15 cahracters, all alphabetical characters and following special characters:[-,._'] allowed.`,
        ];
    }
};

export const checkPostal = (val: string): [boolean, string] => {
    if (val.match(/^\d{5}$/g)) {
        return [true, ""];
    } else {
        return [false, `Postalcode: Must contain 5 numbers!`];
    }
};

export const checkStreet = (val: string): [boolean, string] => {
    if (val.match(/^\d{1,6}[a-z]?$/gi)) {
        return [true, ""];
    } else {
        return [
            false,
            `Street-number: Must contain a number (max. 6 numbers), can contain one letter.`,
        ];
    }
};

export const checkEmail = (email: string): [boolean, string] => {
    if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        return [true, ""];
    } else {
        return [false, "No valid email"];
    }
};

export const checkPassword = (password: string): [boolean, string] => {
    if (
        password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/
        )
    ) {
        return [true, ""];
    } else {
        return [
            false,
            "Password must contain: 1 lowercase and 1 uppercase alphabetical character, 1 numeric, 1 special character: [!@#$%^&*], must be 6 or more characters long",
        ];
    }
};
