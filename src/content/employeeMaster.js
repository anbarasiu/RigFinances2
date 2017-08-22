/*  Content for Employee Master page
 *  @items: Picker items
 *  @validation - format : <rule1>-<rule2>-...-<rulen> - oneOf[required, pattern:<pattern>]
 */

export default [
  { id: 'name', field: 'Name', type: 'Text' },
  { id: 'designation', field: 'Designation', type: 'Text' },
  { id: 'salary', field: 'Salary', type: 'Number' }
];
