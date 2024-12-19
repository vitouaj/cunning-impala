// cunningPage.js

import { LightningElement } from "lwc";
import "./cunningPage.css"; // Import CSS file
import { loadStyle } from "lightning/platformResourceLoader";
import cunningStyle from "@salesforce/resourceUrl/cunningPage";

const columns = [
  { label: "Label", fieldName: "name" },
  {
    label: "Photo",
    type: "picture",
    typeAttributes: {
      pictureUrl: { fieldName: "Picture__c" }
    }
  },
  {
    label: "Account on Contact",
    type: "lookup",
    initialWidth: 330,
    typeAttributes: {
      // parentObjectApi: { fieldName: Account },
      fieldApi: { fieldName: "AccountId" },
      fieldApiName: "AccountId",
      objectApiName: "Contact",
      objectRecordId: { fieldName: "ContactId" },
      class: "lookup-input",
      variant: "label-hidden"
    }
  },
  { label: "Website", fieldName: "website", type: "url" },
  { label: "Phone", fieldName: "phone", type: "phone" },
  { label: "Balance", fieldName: "amount", type: "currency" },
  { label: "CloseAt", fieldName: "closeAt", type: "date" }
];

export default class CunningPage extends LightningElement {
  columns = columns;

  data = [];

  connectedCallback() {
    this.data = this.generateData({ amountOfRecords: 10 });

    loadStyle(this, cunningStyle)
      .then(() => console.log("Files loaded."))
      .catch((error) => console.log("Error " + error.body.message));
  }

  handleChange(event) {
    console.log("You selected an account: " + event.detail.value[0]);
  }

  getSelectedRows(event) {
    const selectedRows = event.detail.selectedRows;
    console.log(JSON.stringify(selectedRows));
  }

  generateData({ amountOfRecords }) {
    return [...Array(amountOfRecords)].map((_, index) => {
      return {
        id: `record-${index}`, // Unique identifier
        name: `Name (${index})`,
        Picture__c:
          "https://cunning-impala-4inqna-dev-ed.trailblaze.file.force.com/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_Png&versionId=068dL000006Wqw5&operationContext=CHATTER&contentId=05TdL000007r8Mn",
        website: "www.salesforce.com",
        ContactId: "003dL00000D3eRJQAZ",
        AccountId: "001dL00000h5IfIQAU",
        amount: Math.floor(Math.random() * 100),
        phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        closeAt: new Date(Date.now() + 86400000 * Math.ceil(Math.random() * 20))
      };
    });
  }

  lookupChangeHandler(event) {
    const { seletedRecordId } = event.detail;
    console.log("lookupChangeHandler");
    console.log(JSON.stringify(seletedRecordId));
  }
}
