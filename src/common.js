import { Button } from "@mui/material";

const dataEntries = [
    { 
      'Head': 'company-name', 
      'Input': ['Tesla'], 
      'Recent Editor': 'admin', 
      'Updated On': '11/01/2022', 
      'changesCount': 0, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'text',
      'label': 'Company Name'
    },
    { 
      'Head': 'cin', 
      'Input': ['U8923u4UIe'], 
      'Recent Editor': 'john doe', 
      'Updated On': '15/01/2024', 
      'changesCount': 1, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'text',
      'label': 'CIN'
    },
    { 
      'Head': 'roc', 
      'Input': ['ROC Mumbai'], 
      'Recent Editor': 'john doe', 
      'Updated On': '24/01/2024', 
      'changesCount': 4, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'text',
      'label': 'ROC'
    },
    { 
      'Head': 'date-of-inc', 
      'Input': ['15/05/2023'], 
      'Recent Editor': 'admin', 
      'Updated On': '11/03/2022', 
      'changesCount': 1, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'date',
      'label': 'Date of Inc.'
    },
    { 
      'Head': 'email-id', 
      'Input': ['email1@gmail.com','email2@gmail','email3@gmail'], 
      'Recent Editor': 'admin ', 
      'Updated On': '22/02/2022', 
      'changesCount': 0, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'email',
      'label': ['email-1','email-2','email-3']
    },
    { 
      'Head': 'registered-add', 
      'Input': ['303-Bandra Mumbai'], 
      'Recent Editor': 'john doe', 
      'Updated On': '15/01/2022', 
      'changesCount': 1, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'text',
      'label': 'Registered Address'
    },
    { 
      'Head': 'authorized-capital', 
      'Input': [300000], 
      'Recent Editor': 'john doe', 
      'Updated On': '05/05/2023', 
      'changesCount': 1, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'number',
      'label': 'Total Capital'
    },
    { 
      'Head': 'total-products', 
      'Input': [25], 
      'Recent Editor': 'john doe', 
      'Updated On': '05/04/2022', 
      'changesCount': 3, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'number',
      'label': 'Total Products'
    },
    { 
      'Head': 'total-entries', 
      'Input': [9], 
      'Recent Editor': 'admin', 
      'Updated On': '11/02/2023', 
      'changesCount': 2, 
      'Action': <Button variant="outlined" color="primary" size="small">Edit</Button>,
      'type': 'number',
      'label': 'Total Entries'
    }
  ];
  export {dataEntries}