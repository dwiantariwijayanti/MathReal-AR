// MathReal-AR Common Scripts

document.addEventListener('DOMContentLoaded', () => {
    console.log('MathReal-AR initialized');
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');

    function toggleSidebar(show) {
        if (!mobileSidebar) return;
        if (show) {
            mobileSidebar.classList.remove('invisible');
            mobileSidebar.classList.remove('translate-x-full');
            sidebarBackdrop.classList.remove('opacity-0');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        } else {
            mobileSidebar.classList.add('translate-x-full');
            sidebarBackdrop.classList.add('opacity-0');
            setTimeout(() => {
                if (mobileSidebar.classList.contains('translate-x-full')) {
                    mobileSidebar.classList.add('invisible');
                }
            }, 500); // Match transition duration
            document.body.style.overflow = ''; // Restore scroll
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleSidebar(true));
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleSidebar(false));
    if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));

    // Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Modal Logic
    const modal = document.getElementById('pdfModal');
    const closeBtn = document.getElementById('closeModal');
    const pdfIframe = document.getElementById('pdfIframe');

    window.openModal = (pdfUrl) => {
        if (!modal || !pdfIframe) return;
        
        // Reset loading state
        const loader = document.getElementById('modalLoading');
        if (loader) loader.classList.remove('hidden');
        pdfIframe.classList.add('opacity-0');
        pdfIframe.classList.remove('opacity-100');

        pdfIframe.src = pdfUrl;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = () => {
        if (!modal || !pdfIframe) return;
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        pdfIframe.src = '';
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal on click outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
