export default function edad(edad) {
    const currentYear = new Date().getFullYear();
    return currentYear - edad;
}
