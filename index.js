function removeBlinkAnimation() {
    const elements = document.getElementsByClassName('miga')
    for (let element of elements) {
        element.style.animation = 'none'
        element.style.webkitAnimation = 'none'
    }
}

const changeImage = () => {
    let image = document.querySelector(
        'img[src="https://e-university.tu-sofia.bg/ETUS/Tu-sofia-logo.png"]'
    )
    if (!image)
        image = document.querySelector('img[src="../Tu-sofia-logo.png"]')

    image.src = 'https://usob.tu-sofia.bg/img/TUSlogosimple.png'
}

const darkMode = () => {
    document.body.style.fontFamily =
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";'
    document.body.style.backgroundColor = '#282c34'
    document.body.style.color = '#ffffff'

    // Apply styles to all links
    const links = document.querySelectorAll('a, u')
    links.forEach((link) => {
        link.style.color = '#60aff0'
    })

    // Apply styles to all text-containing elements
    const textElements = document.querySelectorAll(
        'p, h2, h3, h4, h5, h6, span, div, table, th'
    )
    textElements.forEach((element) => {
        element.style.color = '#e0e0e0'
    })
    const tableElements = document.querySelectorAll('table, th, tr, td')
    tableElements.forEach((el) => {
        el.style.color = '#e0e0e0'
        el.style.backgroundColor = '#282c34'
    })
    //awful hack because only the top lvl table has an ugly border bottom :)
    const table = document.querySelector('table[style*="border-bottom"]') // Selects the table with a border-bottom style
    if (table) {
        table.style.borderBottom = 'none' // Unsets the border-bottom
    }
    // Apply background color to containers (if any)
    const containers = document.querySelectorAll('.container, .content, .main')
    containers.forEach((container) => {
        container.style.backgroundColor = '#1e1e1e'
    })

    const inputStyles = `
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
`

    const inputs = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="number"]'
    )
    inputs.forEach((input) => {
        input.style.cssText = inputStyles
        input.addEventListener('focus', () => {
            input.style.borderColor = '#007BFF'
            input.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)'
            input.style.outline = 'none'
        })
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc'
            input.style.boxShadow = 'none'
        })
    })

    // Apply styles to all submit buttons
    const buttonStyles = `
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  `

    const buttons = document.querySelectorAll(
        'button[type="submit"], input[type="submit"]'
    )
    buttons.forEach((button) => {
        button.style.cssText = buttonStyles
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0056b3'
            button.style.transform = 'translateY(-2px)'
        })
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007BFF'
            button.style.transform = 'translateY(0)'
        })
        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = '#004085'
            button.style.transform = 'translateY(0)'
        })
        button.addEventListener('mouseup', () => {
            button.style.backgroundColor = '#0056b3'
            button.style.transform = 'translateY(-2px)'
        })
    })

    // Select the button with type="button" and value="Изход"
    const scaryButton = document.querySelector(
        'input[type="button"][value="Изход"]'
    )

    if (scaryButton) {
        // Define scary button styles
        const scaryButtonStyles = `
      background-color: #c72c2c; /* Dark red */
      color: white;
      padding: 6px 12px;
      border: 2px solid #a11a1a; /* Darker red border */
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
    `

        const scaryButtonHoverStyles = `
      background-color: #a11a1a; /* Darker red on hover */
      border: 2px solid #8e1414; /* Even darker red */
      transform: scale(1.05); /* Slightly larger on hover */
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.7); /* Red glow effect */
    `

        // Apply initial styles
        scaryButton.style.cssText = scaryButtonStyles

        // Add hover and active states
        scaryButton.addEventListener('mouseover', () => {
            scaryButton.style.cssText += scaryButtonHoverStyles
        })

        scaryButton.addEventListener('mouseout', () => {
            scaryButton.style.backgroundColor = '#c72c2c'
            scaryButton.style.border = '2px solid #a11a1a'
            scaryButton.style.transform = 'scale(1)'
            scaryButton.style.boxShadow = 'none'
        })

        scaryButton.addEventListener('mousedown', () => {
            scaryButton.style.backgroundColor =
                '#8e1414' /* Even darker red when pressed */
            scaryButton.style.transform = 'scale(1)'
        })

        scaryButton.addEventListener('mouseup', () => {
            scaryButton.style.backgroundColor =
                '#a11a1a' /* Restore hover color */
        })
    }

    // Define normal select styles
    const normalSelectStyles = `
    background-color: #ffffff; /* White background */
    color: #333333; /* Dark text */
    padding: 8px;
    border: 2px solid #cccccc; /* Light grey border */
    border-radius: 4px;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;
  `

    const normalSelectFocusStyles = `
    border-color: #007BFF; /* Blue border on focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Blue glow effect */
  `

    // Select all <select> elements
    const selects = document.querySelectorAll('select')
    selects.forEach((select) => {
        // Apply initial styles
        select.style.cssText = normalSelectStyles

        // Add focus effect
        select.addEventListener('focus', () => {
            select.style.cssText += normalSelectFocusStyles
        })

        select.addEventListener('blur', () => {
            select.style.borderColor = '#cccccc'
            select.style.boxShadow = 'none'
        })
    })
}

// Run the function when the page loads
removeBlinkAnimation()
darkMode()
changeImage()

document.addEventListener('DOMContentLoaded', () => {
    // Function definitions

    // Create a MutationObserver to watch for changes to the body
    const observer = new MutationObserver(() => {
        removeBlinkAnimation()
        darkMode()
        changeImage()
    })

    // Start observing changes to the body and its subtree
    observer.observe(document.body, { childList: true, subtree: true })
})
