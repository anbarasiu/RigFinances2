export default [
  {
    id: 'type',
    field: 'Bore Type',
    type: 'Picker',
    items: ['New', 'Reset', 'Flushing']
  },
  {
    id: 'hammerSize',
    field: 'Hammer Size',
    type: 'Picker',
    items: ['6-inch', '4-inch']
  },
  {
    id: 'bitSize',
    field: 'Bit Size',
    type: 'Picker',
    items: ['6-inch', '4-inch']
  },
  { id: 'castingDepth', field: 'Casting Depth', type: 'Number' },
  {
    id: 'pipeMaterial',
    field: 'Casting Pipe Material',
    type: 'Picker',
    items: ['PVC', 'Metal']
  },
  {
    id: 'pipeSize',
    field: 'Casting Pipe Size',
    type: 'Picker',
    items: ['6-inch', '4-inch']
  },
  { id: 'startHrs', field: 'Engine Start Hrs', type: 'TimePicker' },
  { id: 'stopHrs', field: 'Engine Stop Hrs', type: 'TimePicker' },
  { id: 'averageRpm', field: 'Eng Average RPM', type: 'Number' },
  { id: 'location', field: 'Location', type: 'Text' },
  { id: 'bitLoss', field: 'Bit Loss', type: 'Switch' },
  { id: 'totalDepth', field: 'Total Depth', type: 'Number' },
  { id: 'customer', field: 'Customer', type: 'Text' },
  { id: 'agent', field: 'Agent', type: 'Text' },
  { id: 'totalBill', field: 'Total Bill', type: 'Number' },
  { id: 'commission', field: 'Commission to Agent', type: 'Number' },
  { id: 'note', field: 'Note', type: 'Text' }
];
