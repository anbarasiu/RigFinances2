export default [
  { id: 'type', field: 'Bore Type', type: 'Picker', items: [] },
  { id: 'hammerSize', field: 'Hammer Size', type: 'Picker', items: [] },
  { id: 'bitSize', field: 'Bit Size', type: 'Picker', items: [] },
  { id: 'castingDepth', field: 'Casting Depth', type: 'Number' },
  {
    id: 'pipeMaterial',
    field: 'Casting Pipe Material',
    type: 'Picker',
    items: []
  },
  { id: 'pipeSize', field: 'Casting Pipe Size', type: 'Picker', items: [] },
  { id: 'startHrs', field: 'Engine Start Hrs', type: 'TimePicker' },
  { id: 'stopHrs', field: 'Engine Stop Hrs', type: 'TimePicker' },
  { id: 'averageRpm', field: 'Eng Average RPM', type: 'Number' },
  { id: 'location', field: 'Location', type: 'Text' },
  { id: 'bitLoss', field: 'Bit Loss', type: 'Picker', items: [] },
  { id: 'totalDepth', field: 'Total Depth', type: 'Number' },
  { id: 'customer', field: 'Customer', type: 'Picker', items: [] },
  { id: 'agent', field: 'Agent', type: 'Text' },
  { id: 'totalBill', field: 'Total Bill', type: 'Number' },
  { id: 'commission', field: 'Commission to Agent', type: 'Number' },
  { id: 'note', field: 'Note', type: 'Text' }
];
