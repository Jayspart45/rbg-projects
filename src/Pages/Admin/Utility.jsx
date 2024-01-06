import localstorageEncrypt from "localstorage-encrypt"
const ls = localstorageEncrypt.init("storage", "secret_key", 12)
export default ls