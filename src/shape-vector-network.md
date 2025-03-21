## Vector Networks

Vector network nodes provide more flexibility to lines. They can work as hub nodes where multiple lines can converge.

![](/assets/vn-intro.png)

### Insert New Node

Activate the insertion mode from the tool panel, then select the location to insert a new node on the lines.  
Holding the `Ctrl` (Windows) or `Command` (Mac) key prevents the cursor from snapping to shapes other than lines.

![](/assets/vn-insert-1.png)

Each line running through the node is split into two, and the split lines are connected to the node.

![](/assets/vn-insert-2.png)

You can also add or insert a new node via the context menu for a vertex or a segment of a line.

### Draw New Line

Select a node, then drag the anchor at the center of the node.

![](/assets/vn-draw-1.png)

When dragging ends, a new line and a new node are created.

![](/assets/vn-draw-2.png)

If another node is already placed there, only a new line is created and connected to the existing node.

![](/assets/vn-draw-3.png)

### Avoid Exporting Nodes

Since vector network nodes are supposed to be control anchors rather than actual shapes, you may want to hide them on export. This can be done by turning on the `No export` property for them in the inspector panel.

![](/assets/vn-noexport.png)
