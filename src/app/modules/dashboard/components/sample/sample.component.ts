import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }
  columnDefs = [
    { field: 'SN', sortable: true, width: 80, pinned:'left', checkboxSelection: true},
    { field: 'Created', sortable: true, width: 100, suppressSizeToFit: true, pinned:'left', filter: true },
    { field: 'Code', sortable: true, filter: true},
    { field: 'Type', sortable: true, filter: true},
    { field: 'Name', sortable: true, filter: true},
    { field: 'Location', sortable: true, filter: true},
    { field: 'Contact Details', sortable: true, filter: true},
    { field: 'Source', sortable: true, filter: true},
    { field: 'Stage', sortable: true, filter: true},
    { field: 'Action', sortable: true, filter: true}
  ];

  rowData = [
      { SN: '01', Created: 'Santanu Kumar Kundu', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '02', Created: 'Gourav', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '03', Created: 'Manoj', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '04', Created: 'Arunkumar', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '05', Created: 'Sumant', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '06', Created: 'Ankit', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '07', Created: 'Abhay', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '08', Created: 'Amith', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '09', Created: 'Rakesh', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '10', Created: 'Samanta', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '11', Created: 'Prakash', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '12', Created: 'Ami jha', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '13', Created: 'Surya prakash', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '14', Created: 'Piyush', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '15', Created: 'Sanket', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '16', Created: 'Narmada', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '17', Created: 'Lakshmi', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
      { SN: '18', Created: 'Rama', Code: 35000, Type: '', Name: '', Location: '', 'Contact Details': '', Source: '', Stage: '', Action: ''},
  ];
  gridOptions: GridOptions;
  ngOnInit(): void {
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      defaultColDef: { editable: true },
      enableColResize: true,
      enableFilter: true,
      columnTypes: {
        numberColumn: {
          width: 83,
          filter: "agNumberColumnFilter"
        },
        nonEditableColumn: { editable: false }
      }
    }
  }

}
