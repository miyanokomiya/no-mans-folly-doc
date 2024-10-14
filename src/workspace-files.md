# Workspace files

## Workspace folder
A workspace is a folder where all data of the diagram is saved.  

![](/assets/workspace-files.png)

All files and folders in the workspace, except for the workspace folder itself, are referenced to open the diagram, so you shouldn't arbitrarily change their names.

This app doesn't create new workspace folder itself. You need to make a folder outside the app then choose it as a workspace in the app when you want to use new folder as a workspace.

## Diagram file
The diagram data is saved as a file named `diagram.folly`.  
Diagram file contains general data of all sheets.

## Sheet files
Each sheet is saved as a separate file named `[sheet id].folly`.  You can see id of the sheet in URL query `sheet=[sheet id]` when you open the sheet.  
Sheet file contains shape data of the sheet.

Currently, sheet files aren't deleted when sheets are deleted in the app.

Sheet file can be dropped into other sheet in the app and you can import shapes there.  
Although this operation can be done to a sheet of other diagram, asset files aren't transported by this operation.
[Export as Folly SVG](/export.html#export-as-folly-svg) would be helpful for that purpose.

## Asset folder
All asset files that have been used in the diagram are saved in the `assets` folder.

Asset files aren't automatically deleted even if they are no longer used in the diagram. This is mainly because of history functionality.  
Currently, there's no good way to know which asset files aren't used in the diagram.

## Without workspace
You can make a diagram with no workspace, but the diagram data will be gone unless it's saved to a workspace before you leave the page.  
You cannot import asset files when no workspace is prepared for the diagram.

## File format
The formart of `diagram.folly` and `[sheet id].folly` files are binary format provided by [Yjs](https://docs.yjs.dev/).
