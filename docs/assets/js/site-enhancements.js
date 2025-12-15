/**
 * AI for Sarcopenia Literature Daily - Site Enhancements
 * Clean, professional JavaScript without dark mode toggle
 */

(function() {
  'use strict';

  // ============================================
  // Mobile Device Detection and Redirect
  // ============================================
  
  function detectAndRedirectMobile() {
    // Check if already on mobile.html to avoid redirect loop
    if (window.location.pathname.includes('mobile.html')) {
      return;
    }
    
    // Detect mobile devices using user agent and screen width
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                     || (window.innerWidth <= 768);
    
    // Redirect to mobile.html if on mobile device
    if (isMobile) {
      window.location.href = 'mobile.html';
    }
  }
  
  // Run mobile detection immediately
  detectAndRedirectMobile();

  // ============================================
  // Initialize on DOM Ready
  // ============================================
  
  document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initExternalLinks();
    initMobileTableLabels();
    initBackToTop();
    initMobileMenu();
    initSidebarTOC();
    initSearchFab();
    removeThemeSearchButton();
  });

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, null, targetId);
        }
      });
    });
  }

  // ============================================
  // External Links - Open in New Tab
  // ============================================
  
  function initExternalLinks() {
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      
      // Check if it's an external link
      if (href && (
        href.startsWith('http://') || 
        href.startsWith('https://') || 
        href.includes('arxiv.org') || 
        href.includes('github.com')
      )) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        // Add visual indicator
        if (!link.querySelector('.external-link-icon') && !link.querySelector('img')) {
          const icon = document.createElement('span');
          icon.className = 'external-link-icon';
          icon.innerHTML = ' ↗';
          link.appendChild(icon);
        }
      }
    });
  }

  // ============================================
  // Mobile Table Data Labels
  // ============================================
  
  function initMobileTableLabels() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
      const rows = table.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
          if (headers[index]) {
            cell.setAttribute('data-label', headers[index]);
          }
        });
      });
    });
  }

  // ============================================
  // Back to Top Button
  // ============================================
  
  function initBackToTop() {
    // Create back to top button
    const button = document.createElement('button');
    button.id = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    button.setAttribute('title', 'Back to top');
    button.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      transition: all 0.3s ease;
      z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    });
    
    // Scroll to top when clicked
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
    });
  }

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  
  function initMobileMenu() {
    // Create mobile menu toggle button if screen is small
    if (window.innerWidth <= 1064) {
      const menuButton = document.createElement('button');
      menuButton.id = 'mobile-menu-toggle';
      menuButton.innerHTML = '☰';
      menuButton.setAttribute('aria-label', 'Toggle menu');
      menuButton.style.cssText = `
        position: fixed;
        top: 1rem;
        left: 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
      `;
      
      document.body.appendChild(menuButton);
      
      const sidebar = document.querySelector('.side-bar');
      
      menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        menuButton.innerHTML = sidebar.classList.contains('show') ? '✕' : '☰';
      });
      
      // Close sidebar when clicking outside
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== menuButton) {
          sidebar.classList.remove('show');
          menuButton.innerHTML = '☰';
        }
      });
    }
    
    // Update on window resize
    window.addEventListener('resize', () => {
      const menuButton = document.getElementById('mobile-menu-toggle');
      if (window.innerWidth <= 1064 && !menuButton) {
        initMobileMenu();
      } else if (window.innerWidth > 1064 && menuButton) {
        menuButton.remove();
        document.querySelector('.side-bar').classList.remove('show');
      }
    });
  }

  // ============================================
  // Sidebar TOC (On this page) - clone from headings
  // ============================================
  function initSidebarTOC() {
    try {
      const sidebar = document.querySelector('.side-bar');
      if (!sidebar) return;

      // Prefer existing generated TOC, else build from headings
      const existingToc = document.querySelector('#markdown-toc');

      // Create container
      const toc = document.createElement('nav');
      toc.className = 'sidebar-toc';
      toc.setAttribute('aria-label', 'On this page');
      toc.innerHTML = '<div class="sidebar-toc-title">On this page</div><ul class="sidebar-toc-list"></ul>';
      const list = toc.querySelector('.sidebar-toc-list');

      const addItem = (id, text, level) => {
        if (!id || !text) return;
        const li = document.createElement('li');
        li.className = level || '';
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = text.replace(/^\s*[#📋📅🔬🤖📚]+\s*/,'').trim();
        li.appendChild(a);
        list.appendChild(li);
      };

      if (existingToc) {
        existingToc.querySelectorAll('a[href^="#"]').forEach(a => {
          const href = a.getAttribute('href');
          const id = href ? href.replace('#','') : '';
          const parentLi = a.closest('li');
          const isH3 = parentLi && parentLi.classList.contains('h3');
          addItem(id, a.textContent, isH3 ? 'h3' : 'h2');
        });
      } else {
        // Build from headings with ids
        const headings = document.querySelectorAll('.main-content h2[id], .main-content h3[id], .page-content h2[id], .page-content h3[id]');
        headings.forEach(h => addItem(h.id, h.textContent, h.tagName.toLowerCase()));
      }

      // Insert under primary nav list (or at end of sidebar)
      const navList = sidebar.querySelector('.nav-list');
      if (navList && navList.parentElement) {
        navList.parentElement.insertAdjacentElement('afterend', toc);
      } else {
        sidebar.appendChild(toc);
      }
    } catch (e) {
      console.warn('Sidebar TOC init failed:', e);
    }
  }

  // ============================================
  // Lazy Load Images (if any)
  // ============================================
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // Print-Friendly Adjustments
  // ============================================
  
  window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
  });

  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
  });

  // ============================================
  // Performance Optimization
  // ============================================
  
  // Add fade-in animation to table rows
  const observeTableRows = () => {
    const tableObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('table tbody tr').forEach((row, index) => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(20px)';
      row.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
      tableObserver.observe(row);
    });
  };

  // Initialize table row animations
  setTimeout(observeTableRows, 300);

  console.log('✅ AI for Sarcopenia Literature Daily - Site enhancements loaded successfully!');

})();

/**
 * Floating Search Button (above Back-to-Top)
 */
function initSearchFab(){
  try{
    const existing = document.getElementById('search-fab');
    if(existing) return;

    const btn = document.createElement('button');
    btn.id = 'search-fab';
    btn.type = 'button';
    btn.setAttribute('aria-label','Search');
    btn.setAttribute('title','Search');
    btn.textContent = '🔍';

    // Fallback inline positioning to avoid overlap with back-to-top (which is bottom:2rem inline)
    btn.style.position = 'fixed';
    btn.style.right = '2rem';
    btn.style.bottom = (window.innerWidth <= 768) ? '8.5rem' : '6.5rem';
    btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    btn.style.color = '#fff';
    btn.style.width = (window.innerWidth <= 768) ? '44px' : '48px';
    btn.style.height = (window.innerWidth <= 768) ? '44px' : '48px';
    btn.style.borderRadius = '50%';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.fontSize = (window.innerWidth <= 768) ? '1.25rem' : '1.4rem';
    btn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
    btn.style.transition = 'all 0.3s ease';
    btn.style.zIndex = '1000';

    document.body.appendChild(btn);

    const adjust = () => {
      btn.style.bottom = (window.innerWidth <= 768) ? '8.5rem' : '6.5rem';
      btn.style.right = (window.innerWidth <= 768) ? '1rem' : '2rem';
      btn.style.width = (window.innerWidth <= 768) ? '44px' : '48px';
      btn.style.height = (window.innerWidth <= 768) ? '44px' : '48px';
      btn.style.fontSize = (window.innerWidth <= 768) ? '1.25rem' : '1.4rem';
    };
    window.addEventListener('resize', adjust);

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
      btn.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
    });

    btn.addEventListener('click', () => {
      const input = document.querySelector('.search-input');
      if (input) {
        // Bring into view and focus
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => { input.focus(); }, 250);
      } else {
        // Fallback to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  } catch(e){
    console.warn('Search FAB init failed:', e);
  }
}

/**
 * Remove redundant theme search button next to the header search input
 * (class: .search-button.btn-reset). We keep our floating #search-fab.
 */
function removeThemeSearchButton(){
  try {
    document.querySelectorAll('.search-button').forEach(btn => btn.remove());
  } catch (e) {
    console.warn('Remove theme search button failed:', e);
  }
}
