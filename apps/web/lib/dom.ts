export const safeScrollToElement = (targetId: string): boolean => {
  // Validate targetId with comprehensive sanitization
  if (!targetId || typeof targetId !== 'string' || 
      !/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(targetId)) {
    console.warn('Invalid targetId provided for scrolling');
    return false;
  }

  try {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
  } catch (error) {
    console.error('Error scrolling to element:', error);
  }
  
  return false;
};