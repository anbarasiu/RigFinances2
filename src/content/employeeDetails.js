/*  Content for Employee Details page
 *  @items: Picker items
 *  @validation - format : <rule1>-<rule2>-...-<rulen> - oneOf[required, pattern:<pattern>]
 */

export default [
  { id: 'name', field: 'Name', type: 'Text' },
  { id: 'process', field: 'Process', type: 'Text' },
  { id: 'date', field: 'Date', type: 'DatePicker' }
];
