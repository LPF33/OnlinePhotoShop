import bcrypt from "bcryptjs";

const hash = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
};

const compare = (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
};

export { compare, hash };
