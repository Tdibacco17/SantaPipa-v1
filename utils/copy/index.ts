export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Texto copiado con éxito');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
}