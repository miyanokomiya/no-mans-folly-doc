# Line connection

## Connect
Each vertex of the line can be connected to other shape by moving it close to the outline or the center of the shape.

![](/assets/shape-line-connection.png)

## Detach
You can detach the vertex without moving it by selecting `Detach vertex` in the context menu for the vertex or clicking detach-button in the inspector panel for the line.

![](/assets/shape-line-connection-detach1.png)

![](/assets/shape-line-connection-detach2.png)

## Smart connection
When the first or the last vertex is connected to the center, yellow anchor appears near by the vertex. By clicking this anchor, the vertex moves to the outline but behaives as if it's connected to the center.

![](/assets/shape-line-connection-center-1.png)

![](/assets/shape-line-connection-center-2.png)

## Remote connection
You can remotely connect a vertex to a shape without moving its position.

Select `Attach vertex` in the context menu for the vertex.

![](/assets/shape-line-connection-attach-menu1.png)

Choose target shape to connect.

![](/assets/shape-line-connection-attach-menu2.png)

Then, the vertex is remotely connected to the shape.

![](/assets/shape-line-connection-attach-menu3.png)

This feature is useful especially when you want whole line to move along with the shape.

<video controls="controls" muted src="/assets/shape-line-connection-attach-menu-example.mp4" />
