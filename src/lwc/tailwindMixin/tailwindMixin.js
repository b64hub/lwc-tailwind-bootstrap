import { loadStyle } from 'lightning/platformResourceLoader';
import TAILWIND from '@salesforce/resourceUrl/tailwind';

/**
 * Mixin that loads the compiled Tailwind CSS static resource
 * into a component's shadow root.
 *
 * Call once in connectedCallback(). Returns a Promise that
 * resolves when the stylesheet has been injected.
 *
 * @example
 * import { useTailwind } from 'c/tailwindMixin';
 *
 * export default class MyComponent extends LightningElement {
 *     connectedCallback() {
 *         useTailwind(this);
 *     }
 * }
 */
export function useTailwind(component) {
    return loadStyle(component, TAILWIND).catch((err) => {
        console.error('[tailwindElement] Failed to load styles:', err);
    });
}
