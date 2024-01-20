document.addEventListener("scroll", (event) => {
    const totalPageOffset = document.body.scrollHeight - window.innerHeight;
    const currentPageOffset = window.scrollY;
    const pageScrolledByPercent = currentPageOffset / totalPageOffset;
    activeProgress.style.width = `${pageScrolledByPercent * 100}%`;
});

const progressBar = document.createElement('div');
progressBar.className = 'progress-bar-container';
progressBar.style.position = 'sticky';
progressBar.style.top = '0';
progressBar.style.width = '100%';
progressBar.style.height = '8px';
progressBar.style.background = 'gray';
progressBar.style.display = 'flex';
progressBar.style.alignItems = 'center';

const activeProgress = document.createElement('span');
activeProgress.className = 'current-page-progress';
activeProgress.style.height = '80%';
activeProgress.style.borderRadius = '4px';
activeProgress.style.background = 'white';

progressBar.appendChild(activeProgress);

document.body.insertBefore(progressBar, document.body.firstChild);