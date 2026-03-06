/**
 * SCRIPTS BÁSICOS PARA O CURRÍCULO
 * 
 * 1. Inicializa os ícones da biblioteca Lucide
 * 2. Adiciona animação de entrada suave conforme o usuário rola a página
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa os ícones (Lucide)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Configuração do Intersection Observer para as animações de entrada
    const observerOptions = {
        threshold: 0.1, // Dispara quando 10% do elemento está visível
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para disparar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento após a animação ocorrer uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todas as seções de conteúdo para animar
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Funcionalidade do Botão de Imprimir
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            // Garante que todas as seções estejam visíveis para a impressão (caso o observer não tenha disparado)
            sections.forEach(section => {
                section.classList.add('visible');
            });
            
            // Pequeno delay para garantir que as classes foram aplicadas antes de abrir o diálogo
            setTimeout(() => {
                window.print();
            }, 100);
        });
    }

    // Log de confirmação (opcional)
    console.log('Currículo carregado com sucesso!');
});
