/**
 * This file contains functions that interact with the FiveM NUI client side
 * It also contains okokPhone specific functions
 */

const resourceName = "custom_app";
const appName = "custom_app";

/**
 * Send Event to NUI
 * @template T
 * @param {string} eventName Nui Event Name
 * @param {any} data?
 * @returns {Promise<T>}
 */
async function fetchNui(eventName, data = {}) {
  try {
    const result = await fetch(`https://${resourceName}/${eventName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    return await result.json();
  } catch (error) {
    console.error(`Error fetching ${eventName}\n`, error);
    return null;
  }
}

/**
 * ----------------------------------------
 * okokPhone specific functions
 * ----------------------------------------
 */

/**
 * Trigger an island notification
 * @param {{title?: string, text?: string, app?: string, icon?: string, duration: number}} notification
 */
function notifyIsland(notification) {
  if (!notification.app && !notification.icon) {
    notification.app = appName;
  }
  document.notifyIsland(notification);
}
