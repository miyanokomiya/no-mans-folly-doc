## アラインボックス
アラインボックスは、複数のシェイプを保持し、指定されたアラインメントプロパティに従ってそれらを整列させるコンテナです。

![アラインボックス追加の例](/assets/shape-alignbox-add.png)

![アラインボックスの例](/assets/shape-alignbox.png)

### 方向
アラインボックスは、シェイプを水平または垂直に整列させます。方向は、シェイプの左上にあるボタンをクリックすることで変更できます。

`align-items` と `justify-content` プロパティは、現在の方向に従って動作します。

### `align-items`
`align-items` プロパティは、各行内の垂直方向のアラインを設定します。

![Align Items の例](/assets/shape-alignbox-alignitems.png)

利用可能な値は以下の通りです:
- `start`
- `center`
- `end`

### `justify-content`
`justify-content` プロパティは、各行内の水平方向のアラインと間隔を設定します。

![Justify Content の例](/assets/shape-alignbox-justifycontent.png)

利用可能な値は以下の通りです:
- `start`
- `center`
- `space-between`
- `space-around`
- `space-evenly`
- `end`

### 幅と高さ
アラインボックスのサイズは、コンテンツに応じて自動的に調整されます。一度サイズが手動で設定されると、コンテンツは指定されたサイズ内で折り返されます。

シェイプの右または下にある黄色のアンカーをドラッグすることで、コンテンツをスケーリングせずにアラインボックスのサイズを変更できます。

シェイプの右または下にあるボタンをクリックすることで、手動で設定されたサイズをクリアできます。

### パディング
アラインボックスの各エッジにパディングを設定できます。

### マージン
行内および行間のアイテム間のマージンを設定できます。