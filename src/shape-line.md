# Lines

## Line types
### Polyline
Each segment of a polyline can become either straight, arc or bezier curve segment.
![](/assets/shape-line-polyline.png)

#### Arc
Create and modify arc curve by dragging the anchor at the center of the segment.
![](/assets/shape-line-arc.png)

#### Bezier curve
Create and modify qubic bezier curve by dragging the anchors around the vertices. These anchors are hidden when the segment has already been an arc.
![](/assets/shape-line-bezier.png)

### Smooth curve
The whole line automatically becomes smooth bezier polyline.
![](/assets/shape-line-smooth.png)

When the first vertex and the last vertex are at the same location, the line becomes a loop.
![](/assets/shape-line-smooth-loop.png)

### Elbow / Curved elbow
Elbow lines are automatically optimized along with connected shapes. The optimization would be unstable until the line gets connected to shapes.
![](/assets/shape-line-elbow.png)

![](/assets/shape-line-elbow-curved.png)

Internal segments can be moved along certain direction by dragging.
![](/assets/shape-line-elbow-move.png)

## Tangent / Normal line
You can put a tangent / normal line at the outline of a shape or a line.  
Click either button in the toolbar, then choose the target line in the canvas.

![](/assets/shape-line-tangent.png)

![](/assets/shape-line-normal.png)

## Modify vertices
You can add or delete vertices unless the line is an elbow.

### Add
Drag the anchor near by each vertex to add and move new vertex to the line.
![](/assets/shape-line-vertices.png)

### Delete
You can delete a vertex via the context menu on the vertex.
![](/assets/shape-line-delete-vertex-context.png)

You can also delete a vertex by shift + clicking it.

## Jump
When a line has this property on, it jumps over other backward lines. Jump can happen only between straight segments.
![](/assets/shape-line-jump.png)

## Make polygon
Lines satisfying below conditions can turn into polygon shapes having the source line as its outline.

Conditions:
- The line isn't an elbow
- The line doesn't consist of singular straight segment

Turn on `Make polygon` property,
![](/assets/shape-line-polygon-before.png)

then the line turns into a polygon. The first and the last vertices automatically get closed here.
![](/assets/shape-line-polygon-after.png)

Although this polygon can turn into the source line by turning off the property again, some properties of the line, such as shape connections or line heads, would be lost through this process.
