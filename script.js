function showSection(sectionId) {
    // Remove active class from all buttons
    document.querySelectorAll('.section-buttons button').forEach(button => {
        button.classList.remove('active');
    });

    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // Add active class to clicked button
    document.querySelector(`.section-buttons button[onclick="showSection('${sectionId}')"]`).classList.add('active');

    // Show selected section
    document.getElementById(sectionId).classList.add('active');
}

// Initialize with Projects section active
document.addEventListener('DOMContentLoaded', () => {
    showSection('projects');
});