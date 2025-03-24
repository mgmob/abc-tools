function parseText() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    
    // Пример простого парсера
    const parsed = input
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== '')
        .join('\n');
    
    output.textContent = parsed;
    Prism.highlightElement(output);
}

// Инициализация CodeMirror
document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('input');
    CodeMirror.fromTextArea(textArea, {
        lineNumbers: true,
        theme: 'default',
        mode: 'text/plain'
    });
});
