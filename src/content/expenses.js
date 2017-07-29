export default [
  { id: 'sno', field: 'S.No.', type: 'Text' },
  {
    id: 'category',
    field: 'Category',
    type: 'Picker',
    handler: true,
    items: ['Diesel', 'Maintenance', 'Site', 'Cook', 'Pipe', 'Hammer', 'Bit']
  },
  {
    id: 'subcategory',
    field: 'Sub-Category',
    type: 'Picker',
    handler: true,
    items: {
      Cook: ['Rice', 'Vegetables', 'Grocery', 'Masala', 'Floor', 'Non-Veg'],
      Tools: ['Hand tools', 'Grinder', 'Grinder Stones'],
      Road: ['RTO', 'Toll Fee'],
      Pipe: ['Rod', 'Casting-PVC', 'Casting-Metal'],
      Hammer: ['6-inch', '4-inch'],
      Bit: ['6-inch', '4-inch']
    }
  },
  { id: 'amount', field: 'Amount', type: 'Text' },
  { id: 'remarks', field: 'Remarks', type: 'Text' },
  {
    id: 'spenton',
    field: 'Spent On',
    type: 'Picker',
    handler: true,
    items: ['Diesel', 'Maintenance', 'Site', 'Cook', 'Pipe', 'Hammer', 'Bit']
  },
  { id: 'quantity', field: 'Quantity', type: 'Text' },
  { id: 'enginehrs', field: 'Engine Hrs', type: 'Text' },
  { id: 'extra', field: 'Extra numbers', type: 'Number' }
];
