Categories Field for EE 2.x
======================

![Categories Field](/images/nf_categories_field.png?raw=true "Categories Field")

Categories Field is an [ExpressionEngine](https://ellislab.com/expressionengine) 2.x fieldtype which can be used to save category IDs to a custom channel entries field either in addition to those stored by native categories or as a replacement with a more flexibile interface that includes a 'as you type' categories search filter. It also provides the option to record a 'Primary Category', 'Auto Assign Parents' and much more.

Install
-------

1. Download the [latest release](https://github.com/ninefour/categories_field.ft.ee_addon/releases)
2. Move third\_party/nf\_categories\_field to expressionengine/third\_party
3. Move themes/third\_party/nf\_categories\_field to expressionengine/themes
4. Install the field type from the ExpressionEngine control panel
5. Create a new custom field and select the 'Categories' field type

Field Settings
--------------

- **Category Groups:** You can either use one field to manage all categories across all groups or split the groups between seperate custom fields.

- **Category Filter:** Useful when you have very large category groups or multiple category groups selected. Provides a live as you type filter based on category name.

- **Category Filter Placeholder Text:** You can customise the placeholder text which appears inside the filter.

- **Exclude Parents from Filter:** If enabled excludes top level parents from the filter, i.e. they remain visible at all times.

- **Show Category Group Names:** If enabled displays category group names between category groups. Useful when you have a categories field set to display multiple category groups.

- **Collapse Category Groups:** If enabled category groups are collapsed by default in the control panel interface.

- **Field Delimiter:** The character which is used to delimit the string of category IDs that are stored in ths custom field. i.e. "|"

- **Field Wrapper:** If specified will wrap the string of delimited values in the specified character. i.e. "1|2|3" would become "|1|2|3|" if a wrapper of "|" was specified.

- **Auto Assign Parents:** Will search out parents of selected categories and automatically assign their parents also.

- **Primary Category Assignment:** If enabled allows you to record a "Primary Category" for a field.

- **Sync with Native Categories:** If enabled will mirror native category selections (for the specified category group only - assuming that the category group is assigned to the channel where this field appears).

- **Highlight Assigned Native Categories:** Useful if you want to be able to easily refer to the last saved native category assignments for an entry in a field which is not set to be synced.

Usage
-----

Obviously if you set your field to 'Sync with Native Categories' then you can use the native channel entries categories tags to output your data. However - for those situations where your field is not synced the following tags are available:

### Single Variables

When displaying the field on the front end, you can use the following single variable:

- `{field_name}`

This will either display a single category ID or a piped list if more than one category has been assigned (e.g. `1|3|17`).

If you have enabled the 'Primary Category Assignment' option then you can access the various attributes of the primary category and the ID of it's parent (or itself if it has no parent) by appending the 'primary' modifier to the single field_name variable tag:

- `{field_name:primary:category_id}`
- `{field_name:primary:category_parent_id}`
- `{field_name:primary:category_name}`
- `{field_name:primary:category_url_title}`
- `{field_name:primary:category_description}`
- `{field_name:primary:category_image}`
- `{field_name:primary:category_custom_field_name}`

You can also return the primary category ID using the modifier with no attribute specified:

- `{field_name:primary}`

### Variable Pair

You can also use a field_name variable pair:

<pre>{field_name}
<option val="{category_id}">{category_name} ({category_url_title})</option>
{/field_name}</pre>

You have access to several variables inside the variable pair:

- `{category_id}`
- `{category_parent_id}`
- `{category_name}`
- `{category_url_title}`
- `{category_description}`
- `{category_image}`
- `{category_custom_field_name}`

You also have access to these parameters:

- `{field_name backspace="2"}`
- `{field_name limit="1"}`

Change Log
----------

For release notes and instructions on upgrading from one version to another please check the releases page:

https://github.com/ninefour/categories_field.ft.ee_addon/releases

Thanks
------

This add-on was inspired by Matrix Cat Col (https://github.com/jkoivisto/matrix_cat_col), guided by the work Low has done on Low Freeform Field (https://github.com/low/low_freeform_field) and the efforts of Wes Baker on Category Select (https://github.com/wesbaker/category_select.ee2_addon). It also clearly cribs some UI elements from Pixel & Tonic Matrix (http://devot-ee.com/add-ons/matrix).
