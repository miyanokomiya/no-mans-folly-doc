# Lines

## Line Types

### Polyline
Each segment of a polyline can be straight, an arc, or a bezier curve.
![](/assets/shape-line-polyline.png)

#### Arc
Create and modify an arc curve by dragging the anchor at the center of the segment.
![](/assets/shape-line-arc.png)

#### Bezier Curve
Create and modify a cubic bezier curve by dragging the anchors around the vertices. These anchors are hidden when the segment is an arc.
![](/assets/shape-line-bezier.png)

### Smooth Curve
The entire line automatically becomes a smooth bezier polyline.
![](/assets/shape-line-smooth.png)

When the first and last vertices are at the same location, the line forms a loop.
![](/assets/shape-line-smooth-loop.png)

### Elbow / Curved Elbow
Elbow lines are automatically optimized along with connected shapes. The optimization may be unstable until the line is connected to shapes.
![](/assets/shape-line-elbow.png)

![](/assets/shape-line-elbow-curved.png)

Internal segments can be moved in a certain direction by dragging.
![](/assets/shape-line-elbow-move.png)

## Tangent / Normal Line
You can place a tangent or normal line at the outline of a shape or a line.  
Click the respective button in the toolbar, then choose the target line on the canvas.
![](/assets/shape-line-tangent.png)

![](/assets/shape-line-normal.png)

## Modify Vertices
You can add or delete vertices unless the line is an elbow.

### Add
Drag the anchor near each vertex to add and move a new vertex to the line.
![](/assets/shape-line-vertices.png)

### Delete
Delete a vertex via the context menu on the vertex.
![](/assets/shape-line-delete-vertex-context.png)

You can also delete a vertex by shift + clicking it.

## Modify Segments
Move or extrude a segment by dragging it while the line is selected.  
Switch the operation by pressing the `e` key while moving or extruding a segment.
![](/assets/shape-line-segment-move.png)

When a segment is extruded, new vertices are automatically inserted.
![](/assets/shape-line-segment-extrude.png)

## Jump
When this property is enabled, the line jumps over other backward lines. Jumping can only occur between straight segments.
![](/assets/shape-line-jump.png)

## Make Polygon
Lines, except for elbows, can be converted into polyline or polygon shapes that use the source lines as outlines.

Source Line
![](/assets/shape-makepolygon-line.png)

Polyline
![](/assets/shape-makepolygon-polyline.png)

Polygon
![](/assets/shape-makepolygon-polygon.png)

Both polyline and polygon can revert to the source line, but some properties, such as shape connections or line heads, may be lost in the process.
