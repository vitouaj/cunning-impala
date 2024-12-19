import { api, LightningElement } from "lwc";

export default class CunningLookup extends LightningElement {
  @api className;
  @api fieldApiName;
  @api objectApiName;
  @api objectRecordId;
  @api variant;

  handleLookupChange(event) {
    const lookupChangeEvent = new CustomEvent("lookupchange", {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        seletedRecordId: event.detail.value[0]
      }
    });
    this.dispatchEvent(lookupChangeEvent);
  }
}
