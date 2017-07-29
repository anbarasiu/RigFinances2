export default [
  { field: 'S.No.', type: 'Text' },
  {
    field: 'Category',
    type: 'Picker',
    items: ['Diesel', 'Maintenance', 'Site', 'Cook', 'Pipe', 'Hammer', 'Bit']
  },
  {
    field: 'Sub-Category',
    type: 'Picker',
    items: [
      { Cook: ['Rice', 'Vegetables', 'Grocery', 'Masala', 'Floor', 'Non-Veg'] },
      { Tools: ['Hand tools', 'Grinder', 'Grinder Stones'] },
      { Road: ['RTO', 'Toll Fee'] },
      { Pipe: ['Rod', 'Casting-PVC', 'Casting-Metal'] },
      { Hammer: ['6-inch', '4-inch'] },
      { Bit: ['6-inch', '4-inch'] }
    ]
  },
  { field: 'Amount', type: 'Text' },
  { field: 'Remarks', type: 'Text' },
  {
    field: 'Spent On',
    type: 'Picker',
    items: ['Diesel', 'Maintenance', 'Site', 'Cook', 'Pipe', 'Hammer', 'Bit']
  },
  { field: 'Quantity', type: 'Text' },
  { field: 'Engine Hrs', type: 'Text' },
  { field: 'Extra numbers', type: 'Number' }
];
