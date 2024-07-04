import { createBannerSection } from '../home/home_banner.js';
import { createContentBoxesSection } from '../home/home_context_box.js';
import { createBabyDetailsSection } from '../home/baby_information_card.js';
import { createAddBabySection } from '../home/add_baby_profile.js';
import { createBottomNavSection } from '../common/bottom_navigation_bar.js';
import { createOverlay } from '../common/overlay.js';
import { createBottomDrawer } from '../common/bottom_drawer.js';

export function initializeApp() {
    console.log('Initializing app');

    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
        console.error('main-content element not found');
        return;
    }

    mainContent.appendChild(createBannerSection());
    mainContent.appendChild(createContentBoxesSection());
    mainContent.appendChild(createBabyDetailsSection());
    mainContent.appendChild(createAddBabySection());

    const app = document.getElementById('app');
    if (!app) {
        console.error('app element not found');
        return;
    }

    app.appendChild(createBottomNavSection());
    app.appendChild(createOverlay());
    app.appendChild(createBottomDrawer());
}

console.log('main.js script executed');
