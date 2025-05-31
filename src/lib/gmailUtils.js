/**
 * Validates if an email address is a Gmail address
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if valid Gmail address
 */
export function isValidGmailAddress(email) {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
  return emailRegex.test(email);
}

/**
 * Extracts the username part from a Gmail address
 * @param {string} email - The Gmail address
 * @returns {string} - The username part (before @)
 */
export function extractUsername(email) {
  if (!isValidGmailAddress(email)) return '';
  return email.split('@')[0];
}

/**
 * Generates all possible dot combinations for a username
 * @param {string} username - The username to generate variants for
 * @returns {string[]} - Array of all possible dot variants
 */
export function generateDotVariants(username) {
  if (!username || username.length <= 1) return [username + '@gmail.com'];
  
  // Remove existing dots to work with clean username
  const cleanUsername = username.replace(/\./g, '');
  
  if (cleanUsername.length <= 1) return [cleanUsername + '@gmail.com'];
  
  const variants = new Set();
  const positions = cleanUsername.length - 1; // Number of possible dot positions
  
  // Generate all possible combinations using binary representation
  // Each bit represents whether to place a dot at that position
  for (let i = 0; i < Math.pow(2, positions); i++) {
    let variant = '';
    let binaryString = i.toString(2).padStart(positions, '0');
    
    for (let j = 0; j < cleanUsername.length; j++) {
      variant += cleanUsername[j];
      
      // Add dot if the corresponding bit is 1 and we're not at the last character
      if (j < positions && binaryString[j] === '1') {
        variant += '.';
      }
    }
    
    variants.add(variant + '@gmail.com');
  }
  
  return Array.from(variants).sort();
}

/**
 * Copies text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      textArea.remove();
      return success;
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}
