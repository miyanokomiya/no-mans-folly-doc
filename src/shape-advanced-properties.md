# Advanced properties

## Alpha
Alpha property changes opacity of the shape. When it's `1` the shape looks opaque. When it's `0` the shape looks invisible.  
This property can be set in the inspector panel.
![Screenshot for alpha](/assets/shape-property-alpha.png)

## Group constraints
You can set specific behavior to child shapes within the group via group constraint properties.  
These properties can be set in the inspector panel.

### Example
When the top-right circle shape has these group constraints,
![Screenshot for group constraints](/assets/shape-property-group-con-tr.png)

it changes in this way when the parent group shape is resized.
![Screenshot for group constraints](/assets/shape-property-group-con-tr-resized.png)

## Clip
You can clip out or in a group shape via clip properties.  
These properties can be set in the inspector panel.

### Clip mode of group shape
Whether clipping in or out can be switched via "Clip mode" property of the group.
![Screenshot for clip mode](/assets/shape-property-clip-mode.png)

Clipping out looks like:
![Screenshot for clip mode out](/assets/shape-property-clip-mode-out.png)

Clipping in looks like:
![Screenshot for clip mode in](/assets/shape-property-clip-mode-in.png)

### Turn child shapes into clipping path
Turn on `Clip within parent group` of the child shapes, then the shapes work as clipping path within the group.
![Screenshot for clip within parent group](/assets/shape-property-clip-on.png)

Once a group shape becomes clipping path, all nested shapes are treated in the same way.

### Crop outline of child shapes
You can crop outline that sticking out to the visible area via "Crop outside border".
![Screenshot for crop outline](/assets/shape-property-clip-crop-outline.png)
