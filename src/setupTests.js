import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// jsdom hides popover elements but does not implement the browser's showPopover API.
const popoverStyles = document.createElement('style');
popoverStyles.textContent = '[popover][data-open] { display: block !important; }';
document.head.append(popoverStyles);

afterEach(cleanup);
