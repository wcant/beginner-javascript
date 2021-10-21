const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {

    // hide all tab panels
    tabPanels.forEach(panel => (panel.hidden = true));
    // mark all tabs as unselected
    tabButtons.forEach(button => (button.setAttribute('aria-selected', false)));



    const clickedTab = event.currentTarget;
    const clickedTabId = clickedTab.attributes.id.nodeValue;

    //Method 1
    /*
    // select panel corresponding to the clicked tab's ID
    const clickedPanel = document.querySelector(`[aria-labelledby="${clickedTabId}"]`);
    // change aria-selected and hidden attribute for clicked panel
    clickedTab.setAttribute('aria-selected', true);
    clickedPanel.hidden = false;
    */
    
    //Method 2
    clickedTab.setAttribute('aria-selected', true);
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === clickedTabId);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', 
handleTabClick));