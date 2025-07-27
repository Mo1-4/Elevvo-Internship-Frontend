// Set current year in footer
const yearDate = new Date()
const yearText = document.querySelector('footer .container small .year')
yearText.textContent = yearDate.getFullYear()

// Dark mode functionality
const darkButton = document.getElementById('darkButton')
const toggleSpan = darkButton.querySelector('span')

// Get theme from localStorage or default to 'light'
let currentTheme = localStorage.getItem('theme') || 'light'

// Function to apply dark mode
function applyDarkMode() {
    document.body.classList.add('dark-mode')
    document.querySelector('.navbar').classList.add('navbar-dark', 'bg-dark')
    
    // Apply dark mode to sections with id="dark"
    const darkSections = document.querySelectorAll('#dark')
    darkSections.forEach(section => {
        section.classList.add('dark-mode')
    })
    
    // Apply dark mode to cards
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.classList.add('dark-mode')
    })
    
    toggleSpan.textContent = "Light"
}

// Function to apply light mode
function applyLightMode() {
    document.body.classList.remove('dark-mode')
    document.querySelector('.navbar').classList.remove('navbar-dark', 'bg-dark')
    
    // Remove dark mode from sections
    const darkSections = document.querySelectorAll('#dark')
    darkSections.forEach(section => {
        section.classList.remove('dark-mode')
    })
    
    // Remove dark mode from cards
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.classList.remove('dark-mode')
    })
    
    toggleSpan.textContent = "Dark"
}

// Function to toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', currentTheme)
    
    if (currentTheme === 'dark') {
        applyDarkMode()
    } else {
        applyLightMode()
    }
}

// Initialize theme on page load
function initializeTheme() {
    if (currentTheme === 'dark') {
        applyDarkMode()
    } else {
        applyLightMode()
    }
}

// Add event listener to dark mode button
darkButton.addEventListener('click', toggleTheme)

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initializeTheme)

