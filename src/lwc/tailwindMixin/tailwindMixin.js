import { loadStyle } from 'lightning/platformResourceLoader';
import TAILWIND from '@salesforce/resourceUrl/tailwind';

/**
 * Mixin that loads the compiled Tailwind CSS static resource
 * into a component's shadow root.
 *
 * Follows the Salesforce class-factory mixin pattern
 * (same as NavigationMixin, CurrentPageReference, etc.).
 *
 * @example
 * import { TailwindMixin } from 'c/tailwindMixin';
 *
 * export default class MyComponent extends TailwindMixin(LightningElement) {
 *     connectedCallback() {
 *         super.connectedCallback();
 *         // your own logic here
 *     }
 * }
 */
export const TailwindMixin = (Base) => {
    return class extends Base {
        _tailwindLoaded = false;

        connectedCallback() {
            super.connectedCallback?.();
            if (!this._tailwindLoaded) {
                this._tailwindLoaded = true;
                loadStyle(this, TAILWIND).catch((err) => {
                    console.error('[tailwindMixin] Failed to load styles:', err);
                });
            }
        }
    };
};
