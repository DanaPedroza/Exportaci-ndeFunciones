export function costCalculator(costoTransaccion) {
    if (typeof costoTransaccion !== "number"|| costoTransaccion <= 0){
        throw new Error ("El valr de la transacción debe ser un número mayor a 0")
    }

    const intereses = costoTransaccion * 0.01;

    const totalTransaccion = intereses + 3;

    return totalTransaccion;
}