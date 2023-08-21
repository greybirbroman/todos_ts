export function lockScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  export function unLockScroll() {
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 100);
  }
  