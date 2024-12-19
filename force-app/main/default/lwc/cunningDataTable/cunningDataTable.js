// cunningDatatable.js

import LightningDataTable from "lightning/datatable";
import pictureTemplate from "./pictureTemplate.html";
import lookupTemplate from "./lookupTemplate.html";
import { api } from "lwc";

export default class CunningDataTable extends LightningDataTable {
  @api lookupChange;

  static customTypes = {
    picture: {
      template: pictureTemplate,
      standardCellLayout: true,
      typeAttributes: ["pictureUrl"]
    },

    lookup: {
      template: lookupTemplate,
      standardCellLayout: true,
      typeAttributes: [
        "fieldApi",
        "fieldApiName",
        "objectApiName",
        "objectRecordId",
        "class",
        "variant"
      ]
    }
  };
}

// end cunningDatatable.js
