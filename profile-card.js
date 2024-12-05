class ProfileCard extends HTMLElement {
constructor()
{
    super();
    const shadowRoot = this.attachShadow({mode:open});
    shadowRoot.innerHTML = `
    <style>
    :host {
        display: block;
        max-width: 300px;
        border: 1 px solid #ddd;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        overflow:hidden;
    }
    ::slotted(img) {
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
    </style>
    <slot name="photo"></slot>
    <slot name="name"></slot>
    <slot name="position"></slot>
    <slot name="bio"></slot>
    `;
}
}
window.customElements.define('profile-card', ProfileCard);